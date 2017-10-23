/**
 * Created by yildirayme on 28.04.2016.
 */
import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {EnumHelper} from "../../../commons/EnumHelper";
import {NacGroupApi} from "../../../swagger/NacGroupApi";
import {NacGroupDTO} from "../../../swagger/NacGroupDTO";
import {NacGroupRequest} from "../../../swagger/NacGroupRequest";
import {NACENTITYTYPE} from "../../../swagger/NACENTITYTYPE";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {AAAServerApi} from "../../../swagger/AAAServerApi";
import {DIALOG_TYPES} from "../../UIHelper";
import {UI_SECURITY_LEVELS} from "../../../commons/enums/UI_SECURITY_LEVELS";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {AccessProfileListResponse} from "../../../swagger/AccessProfileListResponse";
import {AccessProfileDTO} from "../../../swagger/AccessProfileDTO";


// Root Component
@Component({
	moduleId: module.id,
	selector: 'NacProfileEditPopup',
	templateUrl: './NacProfileEditPopup.html',
	providers: [NacGroupApi, PolicyApi, AAAServerApi, MvtnApi],

})
export class NacProfileEditPopup extends BasePopupEditPage<NacGroupDTO> implements OnInit, AfterViewInit, OnDestroy {

	public groupTypes = EnumHelper.getNames(NACENTITYTYPE);
	public securityLevels = EnumHelper.getValues(UI_SECURITY_LEVELS);
	public statuses = EnumHelper.getNames(NACSTATUS);
	public accessPolicies: Array<AccessProfileDTO> = [];
	public virtualNetworks;
	public virtualNetwork: MvtnDTO;
	public aaaServers;
	public sfcProfiles;
	public isVerified: Boolean = false;

	constructor(public changeDetector: ChangeDetectorRef,
	            public groupApi: NacGroupApi,
	            public policyApi: PolicyApi,
	            public aaaServerApi: AAAServerApi,
	            public mvtnApi: MvtnApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('nac_management.profiles.edit');
		this.data.groupType = this.data.groupType || NACENTITYTYPE.STAFF;
		this.data.status = this.data.status || NACSTATUS.ACTIVE;
		this.setFormActions([
			this.createAction('dialogs.actions.save', () => {
				this.save();
			}),
			this.createAction('dialogs.actions.cancel', () => {
				this.close();
			})
		]);

		this.isVerified = !!this.data.aaaServer;
	}

	ngOnInit() {
		super.ngOnInit();
		this.initAccessPolicies();
		this.initVirtualNetworks();
		this.initAAAServers();
		this.initSfcProfiles();
		if (this.data.allowAutoBYOD == undefined)
			this.data.allowAutoBYOD = false;

		$("[name='byodCheck']")
			.bootstrapSwitch('state', this.data.allowAutoBYOD)
			.on('switchChange.bootstrapSwitch', (event, state) => {
				this.data.allowAutoBYOD = state;
				this.changeDetector.detectChanges();
			});

		if (this.isNewItem)
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

	ngOnDestroy() {
		super.ngOnDestroy();
	}


	newAccessPolicy() {
		alert('not implemented yet');
	}

	newVirutalNetwork() {
		alert('not implemented yet');
	}

	newAAAServer() {
		alert('not implemented yet');
	}

	initAAAServers() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'name', isAscend: true}
			}
		});

		let s =
			this.aaaServerApi
				.serverListPOST(<GenericListRequest>request)
				.subscribe(
					(res) => {
						this.aaaServers = res.data.list;
						res.data.list.forEach((item) => {
							if (this.data && this.data.aaaServer && item.id == this.data.aaaServer.id)
								this.data.aaaServer = item;
						});
						this.changeDetector.detectChanges();
					}
				);
		this.subscriptions.push(s);
	}

	initAccessPolicies() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'name', isAscend: true}
			}
		});

		this.policyApi
			.policyAccessProfileListPOST(<GenericListRequest>request)
			.subscribe(
				(res: AccessProfileListResponse) => {
					this.accessPolicies = res.data.list.filter((item: AccessProfileDTO) => {
						return item.accessPolicies && item.accessPolicies.length > 0;
					});
					res.data.list.forEach((item) => {
						if (this.data && this.data.accessPolicy && item.id == this.data.accessPolicy.id)
							this.data.accessPolicy = item;
					});
					this.changeDetector.detectChanges();
				}
			);
	}

	initVirtualNetworks() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'name', isAscend: true}
			}
		});

		this.mvtnApi
			.virtualListPOST(<GenericListRequest>request)
			.subscribe(
				(res) => {
					this.virtualNetworks = res.data.list;
				}
			);
	}

	initSfcProfiles() {

	}


	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.submitted = true;
		if (typeof this.data.aaaServer !== "object" || !this.isVerified) {
			delete this.data.aaaServer;
		}

		if (this.data.allowAutoBYOD === undefined)
			this.data.allowAutoBYOD = true;
		this.data.version = this.data.version || 1;
		this.data.revision = this.data.revision || 0;
		this.data.timestamp = this.data.timestamp || new Date();
		if (!this.data.id)
			this.data.created = this.data.created || new Date();

		delete this.data.mvtnName;
		if (this.data.mvtnId + "" == "")
			delete this.data.mvtnId;

		let request: NacGroupRequest = <NacGroupRequest>this.baseServices.apiHelper.genRequest({
			data: <NacGroupDTO> this.data
		});

		this.groupApi
			.groupSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
						this.close(true);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
				}
			);
	}

	gt(i18nkey: string, options?: any) {
		if (i18nkey) {
			let key = "perms." + i18nkey;
			let value = $.t(key, options);
			this.logger.debug("key:" + key + ", value:" + value);
			return value;
		}
		return '';
	}

	pt(i18nkey: string, options?: any) {
		if (i18nkey) {
			let parts = i18nkey.split(':');
			let key = "perms." + parts[0] + ".perms." + parts[1];
			let value = $.t(key, options);
			this.logger.debug("key:" + key + ", value:" + value);
			return value;
		}
		return '';
	}

}

