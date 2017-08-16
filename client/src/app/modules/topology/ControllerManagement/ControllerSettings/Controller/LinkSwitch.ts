/**
 * Created by omeroz on 3/8/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {Headers} from "@angular/http";
import {BasePopupEditPage} from "../../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {SwitchDTO} from "../../../../../swagger/SwitchDTO";
import {PageServices} from "../../../../PageServices";
import {DIALOG_TYPES} from "../../../../UIHelper";
import {ControllerNodeDTO} from "../../../../../swagger/ControllerNodeDTO";
import {GenericSearchRequest} from "../../../../../swagger/GenericSearchRequest";
import {PrognetDeviceApi} from "../../../../../swagger/PrognetDeviceApi";
import {PrognetDeviceRequest} from "../../../../../swagger/PrognetDeviceRequest";
import {PrognetDeviceResponse} from "../../../../../swagger/PrognetDeviceResponse";
@Component({
    moduleId: module.id,
    selector: 'LinkSwitch',
    templateUrl: 'LinkSwitch.html',
})
export class LinkSwitch extends BasePopupEditPage<ControllerNodeDTO> implements OnInit, AfterViewInit, OnDestroy {
    switches: Array<SwitchDTO> = [];
    selectedSwitch: SwitchDTO = <SwitchDTO>{};

    constructor(public prognetDeviceApi: PrognetDeviceApi,
                public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.controller_management.controllerSettings.switches.link');
        this.setFormActions([
            this.createAction('dialogs.actions.ok', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
        this.fetchSwitchList();
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

    fetchSwitchList() {
        let request = this.baseServices.apiHelper.genFullListRequest();
        this.prognetDeviceApi
            .deviceSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    this.switches = res.data.list;
                    this.changeDetector.detectChanges();
                }
            );
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        let request = this.baseServices.apiHelper.genRequest({
            data: this.selectedSwitch
        });

        let header = new Headers();
        header.append('X-NODE_ID', this.data.nmNodeId);

        this.prognetDeviceApi
            .controllerDeviceAssignPOST(<PrognetDeviceRequest>request, true, header)
            .subscribe(
                (res: PrognetDeviceResponse) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.link_success', {dto: this.data}))) {
                        this.close(true);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }
}
