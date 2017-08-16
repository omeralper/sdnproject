/**
 * Created by yildirayme on 28.04.2016.
 */
import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {AAARolesApi} from "../../../swagger/AAARolesApi";
import {PageServices} from "../../PageServices";
import {RoleRequest} from "../../../swagger/RoleRequest";
import {RoleDTO} from "../../../swagger/RoleDTO";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {AAAPermissionsApi} from "../../../swagger/AAAPermissionsApi";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {EnumHelper} from "../../../commons/EnumHelper";
import {DIALOG_TYPES} from "../../UIHelper";
import {UI_SECURITY_LEVELS} from "../../../commons/enums/UI_SECURITY_LEVELS";

// Root Component
@Component({
	moduleId: module.id,
	selector: 'RoleEditPopup',
	templateUrl: './RoleEditPopup.html',
	providers: [AAAPermissionsApi, AAARolesApi],
})
export class RoleEditPopup extends BasePopupEditPage<RoleDTO> implements OnInit, AfterViewInit, OnDestroy {

	//INFO used by HTML template do not remove
	public securityLevels = EnumHelper.getValues(UI_SECURITY_LEVELS);

	public permList = [];

	constructor(public changeDetector: ChangeDetectorRef,
	            public permsApi: AAAPermissionsApi,
	            public rolesApi: AAARolesApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('user_management.roles.edit');
		this.logger.debug('Data received:', this.data);

		//TODO EDIT ve CREATE mode'larına göre farklı işlemesi lazım
		//this.setI18NKey('user_management.roles.edit',{
		//    'title': ()=> { return this.isNewItem?this.i18n.t('user_management.roles.create.title'):this.t('title'); }
		//});

		//init securityLevel value if it is not specified.
		this.data.securityLevel = this.data.securityLevel || 1;

		this.setFormActions([
			this.createAction('dialogs.actions.save', () => {
				this.logger.debug('Save Role clicked');
				this.save();
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
			let request = this.baseServices.apiHelper.genRequest({
				options: <ListOptions>{
					startPage: 0,
					pageSize: 0,
					sortOptions: {fieldName: 'name', isAscend: true},
				}
			});

			this.permsApi
				.aaaPermListPOST(<GenericListRequest>request)
				.subscribe(
					(res) => {

						if (this.baseServices.uiHelper.processResponse(res)) {
							this.permList = [];
							let permDict = {};
							res.data.list.forEach((perm, idx, all) => {
								let group = permDict[perm.tag];
								if (!group) {
									group = {
										id: perm.tag,
										permList: []
									};
									permDict[perm.tag] = group;
									this.permList.push(group);
								}
								group.permList.push(perm);
							});

							permDict = null;

							this.changeDetector.detectChanges();

							let selectedList = this.data.permList.map(perm => perm.id);

							let t = this.permList.map((group) => {
								let children = group.permList.map((perm) => {
									return {
										id: perm.id,
										text: this.pt(perm.id),
										type: perm.name,
										state: {
											selected: selectedList.indexOf(perm.id) > -1
										},
										permDTO: perm
									}
								});
								return {
									text: this.gt(group.id + '.title'),
									children: children,
									type: 'group'
								}
							});
							let treeData = {
								id: "-1",
								text: this.t('labels.permissions'),
								children: t
							};

							let language = this.baseServices.sessionManager.language;

							$('#permissionList').jstree({
								"plugins": ["checkbox", "sort", "types"],
								"sort" : function(a,b) {
									let nodeA = this.get_node(a);
                                    let nodeB = this.get_node(b);
                                    //INFO use localeCompare to sort text correctly
									return nodeA.text.localeCompare(nodeB.text,language);
								},
								"types": {
									"default": {
										"icon": "fa fa-file font-blue-hoki icon-lg"
									},
									"group": {
										"icon": "fa fa-folder icon-state-default icon-lg"
									},
									"add": {
										"icon": "fa fa-plus font-blue-madison icon-lg"
									},
									"edit": {
										"icon": "fa fa-pencil font-green-meadow icon-lg"
									},
									"create": {
										"icon": "fa fa-plus font-blue-madison icon-lg"
									},
									"list": {
										"icon": "fa fa-list font-blue-steel icon-lg"
									},
									"view": {
										"icon": "fa fa-eye font-blue-steel icon-lg"
									},
									"delete": {
										"icon": "fa fa-trash-o font-red-sunglo icon-lg"
									},
								},
								"core": {
									"data": treeData,
									"expand_selected_onload": false
								}
							}).on("changed.jstree", function (e, data) {
								if (data.selected.length > 0)
									$('#permissionList').removeClass('validation-error-multi');
							}).on('ready.jstree', function () {
								setTimeout(() => {
									let tree = $('#permissionList').jstree(true);
									tree.open_node("-1");
								}, 0)
							});

						} else {
							this.close(false);
						}
					},
					(error: any) => {
						this.baseServices.uiHelper.processResponse(error._body);
						this.close(false);
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
		}
		this.submitted = true;
		this.data.securityLevel = parseInt((this.data.securityLevel || 1).toString(), 10);

		let tree = $('#permissionList').jstree(true);
		this.data.permList = tree.get_bottom_checked(true).map((selection) => {
			return selection.original.permDTO;
		});

		if (this.data.permList.length == 0) {
			$('#permissionList').addClass('validation-error-multi');
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.data.version = this.data.version || 1;
		this.data.revision = this.data.revision || 0;
		this.data.timestamp = this.data.timestamp || new Date();

		let request = this.baseServices.apiHelper.genRequest({
			data: <RoleDTO> this.data
		});

		this.rolesApi
			.aaaRoleSavePOST(<RoleRequest>request)
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
			//this.logger.debug("key:" + key + ", value:" + value);
			return is.existy(value) ? value : i18nkey;
		}
		return '';
	}

	pt(i18nkey: string, options?: any) {
		if (i18nkey) {
			let parts = i18nkey.split(':');
			let key = "perms." + parts[0] + ".perms." + parts[1];
			let value = $.t(key, options);
			//this.logger.debug("key:" + key + ", value:" + value);
			return is.existy(value) ? value : i18nkey;
		}
		return '';
	}

}

