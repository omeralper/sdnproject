/**
 * Created by omeroz on 2/13/2017.
 */

import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {AppDTO} from "../../../swagger/AppDTO";
import {AppsApi} from "../../../swagger/AppsApi";
import {AppRequest} from "../../../swagger/AppRequest";
import {AAARolesApi} from "../../../swagger/AAARolesApi";
import {ListOptions} from "../../../swagger/ListOptions";
import {RoleDTODef} from "../../../swagger/RoleDTO";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {RoleListResponse} from "../../../swagger/RoleListResponse";
import {AAASTATUS} from "../../../swagger/AAASTATUS";
import {DocumentConverter} from "../../DocumentConverter";

@Component({
	moduleId: module.id,
	selector: 'RoleEditPopup',
	templateUrl: './ThirdPartyEditPopup.html',
	providers: [AppsApi, AAARolesApi],
})
export class ThirdPartyEditPopup extends BasePopupEditPage<AppDTO> implements OnInit, AfterViewInit, OnDestroy {

	roles: Array<any> = [];

	constructor(public appsApi: AppsApi,
	            public rolesApi: AAARolesApi,
	            public changeDetector: ChangeDetectorRef,
	            baseServices: PageServices,
	            public dc: DocumentConverter,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('user_management.third_party.edit');
		this.setFormActions([
			this.createAction('dialogs.actions.save', () => {
				this.save();
			}),
			this.createAction('dialogs.actions.cancel', () => {
				this.close();
			})
		]);

		this.data.status = this.dc.isNotNullOrUndefined(this.data.status) ? this.data.status : AAASTATUS.PASSIVE;
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			$("[name='status']", this.elementRef.nativeElement)
				.bootstrapSwitch({
					onText: this.t("fields.active"),
					offText: this.t("fields.passive"),
					state: this.data.status == AAASTATUS.ACTIVE
				})
				.on('switchChange.bootstrapSwitch', (event, state) => {
					this.data.status = state ? AAASTATUS.ACTIVE : AAASTATUS.PASSIVE;
					this.changeDetector.detectChanges();
				});

			this.fetchRoles();
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	fetchRoles() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				fields: Object.keys(RoleDTODef.fields)
			}
		});
		let s = this.rolesApi
			.aaaRoleListPOST(<GenericListRequest>request)
			.subscribe(
				(response: RoleListResponse) => {
					this.roles = response.data.list;
					this.roles.forEach((role) => {
						role.checked = !!this.data.roleList.find(r => r.id == role.id);
					});
					this.changeDetector.detectChanges();
				}
			);
		this.subscriptions.push(s);
	}

	updateAllRoleList(event) {
		this.roles.forEach((role) => {
			role.checked = !!event.target.checked;
		});
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.submitted = true;
		this.data.roleList = this.roles.filter(role => role.checked);
		this.data.roleList.forEach(role => delete (<any>role).checked);

		let request = this.baseServices.apiHelper.genRequest({
			data: <AppDTO> this.data
		});

		this.appsApi
			.aaaAppSavePOST(<AppRequest>request)
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

