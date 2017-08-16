/**
 * Created by ekinca on 17.01.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {NetworkDeviceDTO} from "../../../swagger/NetworkDeviceDTO";
import {NetworkDeviceApi} from "../../../swagger/NetworkDeviceApi";
import {NETWORKDEVICETYPE} from "../../../swagger/NETWORKDEVICETYPE";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {DIALOG_TYPES} from "../../UIHelper";
import {DocumentConverter} from "../../DocumentConverter";
import {PORTSTATE} from "../../../swagger/PORTSTATE";
import {PortDetail} from "../../../swagger/PortDetail";

@Component({
    moduleId: module.id,
    selector: 'AccessPointConversionPromptPopUp',
    templateUrl: './AccessPointConversionPromptPopUp.html',
    providers: [NetworkDeviceApi, TopologyApi, DocumentConverter],

})
export class AccessPointConversionPromptPopUp extends BasePopupEditPage<NetworkDeviceDTO> implements OnInit, AfterViewInit, OnDestroy {

    public $select: JQuery;
    public vlanid;
    public switchesIds: Array<string> = [];
    public selectedSwitchId:string= "";
    public portNo;
    public types = [];
    public deviceIp;

    constructor(public dc: DocumentConverter, public changeDetector: ChangeDetectorRef, public topologyApi: TopologyApi, baseServices: PageServices, elementRef: ElementRef, public gwApi: NetworkDeviceApi) {
        super(baseServices, elementRef);
        this.setI18NKey('settings.networkDevice.edit');

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);

        for (let enumMember in NETWORKDEVICETYPE) {
            if (isNaN(parseInt(enumMember))) {
                this.types.push(enumMember);
            }
        }
    }

    ngOnInit() {
        super.ngOnInit();
        if (this.data.ip)
            this.deviceIp = this.data.ip;

        this.selectedSwitchId = this.data.port.id;
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            if (this.isNewItem) {
                this.data.type = this.types[1];
            }

            let request = this.baseServices.apiHelper.genRequest({
                options: <ListOptions>{
                    startPage: 0,
                    pageSize: 0,
                    sortOptions: {fieldName: 'name', isAscend: true},
                }
            });

            this.topologyApi
                .topologySwitchListPOST(<GenericListRequest>request)
                .subscribe(
                    (res) => {
                        if (this.baseServices.uiHelper.processResponse(res)) {
                            this.switchesIds = res.data.list.map(s => s.id);
                            this.changeDetector.detectChanges();
                            if (!this.isNewItem && !~this.switchesIds.indexOf(this.data.port.id)) {
                                    this.baseServices.uiHelper.notify(this.t("messages.no_relevant_switch"), DIALOG_TYPES.ERROR);
                            }
                        }
                    }
                );
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
        } else {
            if (this.isNewItem) {
                this.data.port = <PortDetail>{
                    id: this.selectedSwitchId,
                    states: [PORTSTATE.LIVE],
                    number: this.portNo,
                    address: {
                        ipv4: "0",
                        mac: "0",
                        ipv6: "0"
                    }
                }
            } else {
                this.data.port.id = this.selectedSwitchId;
                this.data.port.number = this.portNo;
            }

            this.data.ip = this.deviceIp;
            this.data.vlanid = (!this.dc.isNotNullOrUndefinedOrEmptyString(this.vlanid)) ? -1 : this.vlanid;

            this.close(true, this.data);
        }
    }

}

