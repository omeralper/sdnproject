/**
 * Created by yildirayme on 24.05.2016.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, ViewChild} from "@angular/core";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {PageServices} from "../../PageServices";
import {AAAUsersApi} from "../../../swagger/AAAUsersApi";
import {ChangePwdRequest} from "../../../swagger/ChangePwdRequest";
import {DIALOG_TYPES} from "../../UIHelper";
import {SetPwdRequest} from "../../../swagger/SetPwdRequest";
import {UI_PASSWORD_POPUP_MODE} from "../../../commons/enums/UI_PASSWORD_POPUP_MODE";
import {UserDTO} from "../../../swagger/UserDTO";
import {SessionManager} from "../../SessionManager";


@Component({
    moduleId: module.id,
    selector: 'PasswordPopup',
    templateUrl: './PasswordPopup.html',
    providers: [AAAUsersApi]
})
export class PasswordPopup extends BasePopupPage<UserDTO> implements OnInit, AfterViewInit, OnDestroy {

    PASSWORD_POPUP_MODE = UI_PASSWORD_POPUP_MODE;

    popupMode: UI_PASSWORD_POPUP_MODE;

    submitted = false;

    currentPassword: string;
    newPassword: string;
    newPasswordRetype: string;

    @ViewChild('pass1') pass1;
    @ViewChild('pass2') pass2;

    constructor(public changeDetector: ChangeDetectorRef,
                public usersApi: AAAUsersApi,
                public sessionManager: SessionManager,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        this.logger.debug('Data received:', this.data);

        this.popupMode = (this.data.id == this.baseServices.authenticationManager.getCurrentUser().userDTO.id) ? UI_PASSWORD_POPUP_MODE.CHANGE_PWD : UI_PASSWORD_POPUP_MODE.SET_PWD;

        this.logger.debug('Popup Mode:', this.popupMode);

        if (this.popupMode === UI_PASSWORD_POPUP_MODE.CHANGE_PWD) {
            this.setI18NKey('user_management.users.change_pwd');
        } else {
            this.setI18NKey('user_management.users.set_pwd');
        }

        this.setFormActions([
            this.createAction('dialogs.actions.change', ()=> {
                this.logger.debug('Change clicked');
                this.change();
            }),
            this.createAction('dialogs.actions.cancel', ()=> {
                this.logger.debug('Cancel clicked');
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

            if (this.sessionManager.isLdapEnabled){
                this.baseServices.uiHelper.notify("Password change not allowed when LDAP is in use.",DIALOG_TYPES.WARNING);
                setTimeout(()=> {this.close(false);}, 300);
            }

            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    change() {

        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        this.logger.debug('Change password');
        this.submitted = true;

        if (this.popupMode == UI_PASSWORD_POPUP_MODE.CHANGE_PWD) {

            let request: ChangePwdRequest = <ChangePwdRequest>this.baseServices.apiHelper.genRequest({
                username: this.data.username,
                oldPassword: this.currentPassword,
                newPassword: this.newPassword,
            });

            this.usersApi
                .aaaUserChangepwdPOST(<ChangePwdRequest>request)
                .subscribe(
                    (res) => {
                        if (this.baseServices.uiHelper.processResponse(res, this.t('messages.change_success', {dto: this.data}))) {
                            this.close(true);
                        }
                    },
                    (error: any) => {
                        this.baseServices.uiHelper.processResponse(error._body);
                    }
                );

        } else {

            let request: SetPwdRequest = <SetPwdRequest>this.baseServices.apiHelper.genRequest({
                id: this.data.id,
                newPassword: this.newPassword,
            });

            this.usersApi
                .aaaUserSetpwdPOST(<SetPwdRequest>request)
                .subscribe(
                    (res) => {
                        if (this.baseServices.uiHelper.processResponse(res, this.t('messages.change_success', {dto: this.data}))) {
                            this.close(true);
                        }
                    },
                    (error: any) => {
                        this.baseServices.uiHelper.processResponse(error._body);
                    }
                );
        }
    }

}

