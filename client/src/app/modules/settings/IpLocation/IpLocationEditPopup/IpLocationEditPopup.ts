/**
 * Created by barangu on 5/15/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from '@angular/core';
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../PageServices";
import {DIALOG_TYPES} from "../../../UIHelper";
import {IpLocationApi} from "../../../../swagger/IpLocationApi";
import {IpLocationDTO} from "../../../../swagger/IpLocationDTO";
import {IpLocationRequest} from "../../../../swagger/IpLocationRequest";

@Component({
    moduleId: module.id,
    selector: 'IpLocationEditPopup',
    templateUrl: './IpLocationEditPopup.html',
    providers: [IpLocationApi]
})
export class IpLocationEditPopup extends BasePopupEditPage<IpLocationDTO> implements OnInit, AfterViewInit, OnDestroy {

    ipBlocks: string;

    constructor(public ipLocationApi: IpLocationApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('settings.ip_location.edit');

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
        if (this.data.ipList)
            this.ipBlocks = this.data.ipList.join("\n");
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
            let parts = input.split("/");
            let ip = parts[0].split(".");
            let port = parts[1];
            if ((port === "*" || this.validateNum(port, 8, 32))
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
        this.data.ipList = [];

        if (this.ipBlocks)
            this.data.ipList = this.ipBlocks.split("\n");

        let request = this.baseServices.apiHelper.genRequest({
            data: <IpLocationDTO> this.baseServices.apiHelper.genDTO(this.data)
        });

        this.ipLocationApi
            .ipLocationSavePOST(<IpLocationRequest>request)
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
