/**
 * Created by ekinca on 20.07.2017.
 */

import {Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {DIALOG_TYPES} from "../../UIHelper";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {VnfrApi} from "../../../swagger/VnfrApi";
import {GenericListRequest} from "app/swagger/GenericListRequest";
import {ListOptions} from "../../../swagger/ListOptions";
import {VnfdApi} from "app/swagger/VnfdApi";
import {VnfrDTO} from "app/swagger/VnfrDTO";
import {HostDTO} from "../../../swagger/HostDTO";
import {VNFRSTATUS} from "../../../swagger/VNFRSTATUS";
import {VNFRTYPE} from "../../../swagger/VNFRTYPE";
import {HOSTTYPE} from "app/swagger/HOSTTYPE";
import {VnfdDTO} from "../../../swagger/VnfdDTO";
import {VNFDTYPE} from "../../../swagger/VNFDTYPE";

@Component({
    moduleId: module.id,
    selector: 'VNFConversionPopup',
    templateUrl: './VNFConversionPopup.html',
    providers: [ VnfrApi, VnfdApi ]
})
export class VNFConversionPopup extends BasePopupPage<HostDTO> implements OnInit, AfterViewInit, OnDestroy {

    isNewItem: boolean;

    vnfds: Array<VnfdDTO>;
    selectedType: VnfdDTO;


    constructor(baseServices: PageServices, elementRef: ElementRef, public changeDetector: ChangeDetectorRef, private vnfrApi: VnfrApi, private vnfdApi: VnfdApi) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.topology.vnf_conversion_popup');

        this.logger.debug('Data received:', this.data);

        this.setFormActions([
            this.createAction('dialogs.actions.ok', () => {
                this.logger.debug('OK clicked');
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.logger.debug('Cancel clicked');
                this.close();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
        let request = this.baseServices.apiHelper.genRequest(<GenericListRequest>{
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0
            }
        });
        this.vnfdApi.sfcVnfdListPOST(request).subscribe((res)=>{
            if(this.baseServices.uiHelper.processResponse(res)){
                this.vnfds = res.data.list;
                this.selectedType = this.vnfds[0];
            }
        });
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    save() {

        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        let reqData = <VnfrDTO>this.baseServices.apiHelper.genDTO({
                "vnfrStatus": VNFRSTATUS.ACTIVE,
                "inPort": this.data.port && this.data.port.number ? this.data.port.number : -1,
                "outPort": this.data.port && this.data.port.number ? this.data.port.number : -1,
                "vnfdId": this.selectedType.vnfdId,
                "vnfrType": VNFRTYPE.PHYSICAL,
                "vnfrName": this.data.name,
                "vnfrHostId": this.data.id
        });

        let request = this.baseServices.apiHelper.genRequest({
            data: <VnfrDTO> reqData
        });

        this.vnfrApi.sfcVnfrSavePOST(request).subscribe((res)=>{
            if(this.baseServices.uiHelper.processResponse(res)){
                (this.data as any).type = this.selectedType.vnfdType == VNFDTYPE.FIREWALL ? HOSTTYPE.SFC_FIREWALL : this.selectedType.vnfdType;
                this.close(true, this.data);
            }
        });
    }
}