/**
 * Created by barangu on 09.02.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from '@angular/core';
import {PolicyApi} from "../../../swagger/PolicyApi";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {EndUserApplicationDTO} from "../../../swagger/EndUserApplicationDTO";
import {PageServices} from "../../PageServices";
import {DIALOG_TYPES} from "../../UIHelper";
import {EndUserApplicationRequest} from "../../../swagger/EndUserApplicationRequest";

@Component({
    moduleId: module.id,
    selector: 'NacUserAppEditPopup',
    templateUrl: './NacUserAppEditPopup.html',
    providers: [PolicyApi]
})
export class NacUserAppEditPopup extends BasePopupEditPage<EndUserApplicationDTO> implements OnInit, AfterViewInit, OnDestroy {

    ipPorts: string;

    constructor(public policyApi: PolicyApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('nac_management.nac_user_app.edit');

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
        if (this.data.addresses)
            this.ipPorts = this.data.addresses.join("\n");
        if(this.isNewItem)
            this.data.priority = 0;
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

    validateIpAndPort(evt) {
        let inputs = evt.target.value.split('\n');
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let parts = input.split(":");
            let ip = parts[0].split(".");
            let port = parts[1];
            if ((port === "*" || this.validateNum(port, 1, 65535))
                && (ip[0] === "*" || (ip.length == 4 && ip.every((segment) => {
                    return this.validateNum(segment, 0, 255);
                })))) {
                $(evt.target).removeClass('validation-error');
                evt.target.setCustomValidity("");
            } else {
                $(evt.target).addClass('validation-error');
                evt.target.setCustomValidity(" ");
                evt.target.setCustomValidity(input + " " + this.t('messages.invalid_ip'));
                break;
            }
        }
    }

    validateNum(input, min, max) {
        let num = +input;
        return num >= min && num <= max && input === num.toString();
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
        this.data.addresses = [];

        if (this.ipPorts)
            this.data.addresses = this.ipPorts.split("\n");

        this.data.priority = this.data.priority && +this.data.priority;

        let request = this.baseServices.apiHelper.genRequest({
            data: <EndUserApplicationDTO> this.baseServices.apiHelper.genDTO(this.data)
        });

        this.policyApi
            .endUserAppSavePOST(<EndUserApplicationRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
                        this.close(true);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }
}
