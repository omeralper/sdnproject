/**
 * Created by omeroz on 2/27/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../PageServices";
import {ControllerNodeDTO} from "../../../../swagger/ControllerNodeDTO";
import {DIALOG_TYPES} from "../../../UIHelper";
import {ControllerApi} from "../../../../swagger/ControllerApi";
import {ControllerNodeRequest} from "../../../../swagger/ControllerNodeRequest";

@Component({
    moduleId: module.id,
    selector: 'ClusterEditPopup',
    templateUrl: './ControllerEditPopup.html',
    providers: []
})

export class ControllerEditPopup extends BasePopupEditPage<ControllerNodeDTO> implements OnInit, AfterViewInit, OnDestroy {
    constructor(public controllerApi: ControllerApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.controller_management.controllerSettings.controllerEdit');

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);

    }

    ngOnInit() {
        super.ngOnInit();

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

        this.data = this.baseServices.apiHelper.genDTO(this.data);

        let request: ControllerNodeRequest = <ControllerNodeRequest>this.baseServices.apiHelper.genRequest({
            data: <ControllerNodeDTO> this.data
        });

        this.controllerApi
            .controllerSavePOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
                        this.close(true, this.data);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }

}
