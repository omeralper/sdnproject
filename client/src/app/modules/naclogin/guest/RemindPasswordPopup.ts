/**
 * Created by omeroz on 3/23/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {PageServices} from "../../PageServices";
import {DIALOG_TYPES} from "../../UIHelper";
import {NacUserApi} from "../../../swagger/NacUserApi";
import {NacForgettenPassDTO} from "../../../swagger/NacForgettenPassDTO";
import {NacForgettenPasswordRequest} from "../../../swagger/NacForgettenPasswordRequest";

@Component({
    moduleId: module.id,
    selector: 'RemindPasswordPopup',
    templateUrl: 'RemindPasswordPopup.html',
    providers: [NacUserApi]
})
export class RemindPasswordPopup extends BasePopupPage<NacForgettenPassDTO> implements OnInit, AfterViewInit, OnDestroy {

    mailOrPhone = "";

    constructor(public nacUserApi: NacUserApi,
                baseServices: PageServices,
                elementRef: ElementRef) {

        super(baseServices, elementRef);
        this.setI18NKey('naclogin.remindPassword');
        this.setFormActions([
            this.createAction('dialogs.actions.send', () => {
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

        if (this.mailOrPhone.indexOf('@') > -1) {
            this.data.mail = this.mailOrPhone;
        } else {
            this.data.phoneNumber = this.mailOrPhone;
        }

        let request: NacForgettenPasswordRequest = <NacForgettenPasswordRequest>this.baseServices.apiHelper.genRequest({
            data: <NacForgettenPassDTO> this.data
        });

        this.nacUserApi
            .userForgetPOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res,
                            this.t('messages.password_sent', {dto: this.data}))) {
                        this.close(true, res);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }
}

