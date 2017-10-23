/**
 * Created by yildirayme on 24.05.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {PageServices} from "../../PageServices";
import {DIALOG_TYPES} from "../../UIHelper";
import {UI_PASSWORD_POPUP_MODE} from "../../../commons/enums/UI_PASSWORD_POPUP_MODE";
import {NacUserApi} from "../../../swagger/NacUserApi";
import {NacChangeUserPwdRequest} from "../../../swagger/NacChangeUserPwdRequest";
import {NacSetUserPwdRequest} from "../../../swagger/NacSetUserPwdRequest";
import {NacUserDTO} from "../../../swagger/NacUserDTO";

@Component({
	moduleId: module.id,
	selector: 'NacUserPasswordPopup',
	templateUrl: './NacUserPasswordPopup.html',
	providers: [NacUserApi]
})
export class NacUserPasswordPopup extends BasePopupPage<NacUserDTO> implements OnInit, AfterViewInit, OnDestroy {

	public PASSWORD_POPUP_MODE = UI_PASSWORD_POPUP_MODE;

	public popupMode: UI_PASSWORD_POPUP_MODE;

	public submitted = false;

	public currentPassword: string;
	public newPassword: string;
	public newPasswordRetype: string;

	constructor(public changeDetector: ChangeDetectorRef,
	            public usersApi: NacUserApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.logger.debug('Data received:', this.data);

		this.popupMode = (this.data.id == this.baseServices.authenticationManager.getCurrentUser().userDTO.id) ? UI_PASSWORD_POPUP_MODE.CHANGE_PWD : UI_PASSWORD_POPUP_MODE.SET_PWD;

		this.logger.debug('Popup Mode:', this.popupMode);

		if (this.popupMode === UI_PASSWORD_POPUP_MODE.CHANGE_PWD) {
			this.setI18NKey('nac_management.users.change_pwd');
		} else {
			this.setI18NKey('nac_management.users.set_pwd');
		}

		this.setFormActions([
			this.createAction('dialogs.actions.change', () => {
				this.logger.debug('Change clicked');
				this.change();
			}),
			this.createAction('dialogs.actions.cancel', () => {
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

			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	change() {
		//debugger;
		//TODO validation
		// check parameters
		// check permissions if editing current user.

		if (this.newPassword != this.newPasswordRetype) {
			this.baseServices.uiHelper.notify(this.t('messages.passwords_mismatch'), DIALOG_TYPES.ERROR);
			return;
		}

		this.logger.debug('Change password');
		this.submitted = true;

		if (this.popupMode == UI_PASSWORD_POPUP_MODE.CHANGE_PWD) {

			let request: NacChangeUserPwdRequest = <NacChangeUserPwdRequest>this.baseServices.apiHelper.genRequest({
				username: this.data.username,
				oldPassword: this.currentPassword,
				newPassword: this.newPassword,
			});

			let s =
				this.usersApi
					.changepwdPOST(<NacChangeUserPwdRequest>request)
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
			this.subscriptions.push(s);
		} else {

			let request: NacSetUserPwdRequest = <NacSetUserPwdRequest>this.baseServices.apiHelper.genRequest({
				id: this.data.id,
				newPassword: this.newPassword,
			});

			let s = this.usersApi
				.setpwdPOST(<NacSetUserPwdRequest>request)
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
			this.subscriptions.push(s);
		}
	}

}

