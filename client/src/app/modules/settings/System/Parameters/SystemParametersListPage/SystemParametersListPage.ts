/**
 * Created by yildirayme on 02.02.2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, ChangeDetectorRef} from "@angular/core";
import {ConfigApi} from "../../../../../swagger/ConfigApi";
import {BaseDataTablesPage} from "../../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {ModuleNodeConfigDTO} from "../../../../../swagger/ModuleNodeConfigDTO";
import {PageServices} from "../../../../PageServices";
import {SystemParametersEditPopup} from "../SystemParametersEditPopup/SystemParametersEditPopup";
import {ModuleNodeConfigListResponse} from "../../../../../swagger/ModuleNodeConfigListResponse";
import {GenericListRequest} from "../../../../../swagger/GenericListRequest";
import {ModuleNodesDTO} from "../../../../../swagger/ModuleNodesDTO";
import {VersionNodesDTO} from "../../../../../swagger/VersionNodesDTO";
import {ModuleNodeConfigListRequest} from "../../../../../swagger/ModuleNodeConfigListRequest";
import {ModuleNodeConfigSearchDTO} from "../../../../../swagger/ModuleNodeConfigSearchDTO";
import {NODETYPE} from "../../../../../swagger/NODETYPE";
import {ActivatedRoute} from "@angular/router";

@Component({
	moduleId: module.id,
	selector: 'SystemDefinitionsListPage',
	templateUrl: './SystemParametersListPage.html',
	providers: [ConfigApi],
})
export class SystemParametersListPage extends BaseDataTablesPage<ModuleNodeConfigDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
	public static ALL_KEYWORD = "{ALL}";
	public comboData: Array<ModuleNodesDTO>;

	//INFO: Used by HTML template, do not remove
	public _selectedNodeType: ModuleNodesDTO;
	private requestedNodeType: NODETYPE = NODETYPE.CONTROLLER;

	public get selectedNodeType(): ModuleNodesDTO {
		return this._selectedNodeType;
	}

	public set selectedNodeType(nodeType: ModuleNodesDTO) {
		this._selectedNodeType = nodeType;
		if (is.not.empty(this._selectedNodeType.moduleVersions)) {
			this.selectedVersion = this._selectedNodeType.moduleVersions[0];
		} else {
			this.selectedVersion = null;
		}
	}

	public get nodeTypeList(): Array<ModuleNodesDTO> {
		return this.comboData ? this.comboData : [];
	}

	//INFO: Used by HTML template, do not remove
	public _selectedVersion: VersionNodesDTO;
	public get selectedVersion(): VersionNodesDTO {
		return this._selectedVersion;
	}

	public set selectedVersion(version: VersionNodesDTO) {
		this._selectedVersion = version;
		if (is.not.empty(this._selectedVersion.nodes)) {
			this.selectedNode = this._selectedVersion.nodes[0];
		} else {
			this.selectedNode = null;
		}
	}

	public get versionList(): Array<VersionNodesDTO> {
		return this.selectedNodeType ? this.selectedNodeType.moduleVersions : [];
	}

	//INFO: Used by HTML template, do not remove
	public _selectedNode: string;
	public get selectedNode(): string {
		return this._selectedNode;
	}

	public set selectedNode(node: string) {
		this._selectedNode = node;
		if (is.existy(this._selectedNode)) this.reload(true);
	}

	public get nodeList(): Array<string> {
		return this.selectedVersion ? this.selectedVersion.nodes : [];
	}

	constructor(public changeDetector: ChangeDetectorRef,
	            public configApi: ConfigApi,
	            public route: ActivatedRoute,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.isServerSide = false;
		this.setI18NKey("settings.system.parameters.list");

		// this.setActions([
		//     this.createAction('@create', () => {
		//         this.logger.debug('Create new action clicked')
		//         this.baseServices.sharedService.showModal(SystemParametersEditPopup, {},
		//             (result) => {
		//                 if (result.isSuccess) this.reload();
		//             });
		//     })
		// ]);

		this.setRowActions([
			this.createAction('@edit', (itm: ModuleNodeConfigDTO) => {
				this.logger.debug('Edit ' + itm.configId + ' action clicked');
				this.baseServices.sharedService.showModal(SystemParametersEditPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),
			// this.createAction('@delete', (itm: ModuleNodeConfigDTO) => {
			//     this.logger.debug('Delete ' + itm.configId + ' action clicked');
			//     this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
			//         if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
			//
			//             let request = this.baseServices.apiHelper.genRequest({
			//                 options: <DeleteOptions> {
			//                     id: itm.id,
			//                     isReturnModel: false
			//                 }
			//             });
			//
			//             this.configApi
			//                 .configModuleNodeConfigDeletePOST(<GenericDeleteRequest>request)
			//                 .subscribe(
			//                     (res) => {
			//                         if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
			//                             this.reload();
			//                         }
			//                     },
			//                     (error: any) => {
			//                         this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
			//                     }
			//                 );
			//
			//         }
			//     })
			// })
		]);

		this.route.params.subscribe(params => {
			this.requestedNodeType = (<NODETYPE>params['nodeType']) || NODETYPE.CONTROLLER;
			if (is.existy(this.comboData)) {
				this.selectNodeType(this.requestedNodeType);
			}
		});
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {

			this.populateCombos();

			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	getDataTableOptions() {
		return {
			columns: [
				{
					title: this.ft('nodeType'),
					width: '8%',
					orderable: true,
					type: 'string',
					name: 'configDefinition.nodeType'
				},
				{
					title: this.ft('componentName'),
					width: '30%',
					orderable: true,
					type: 'string',
					name: 'configDefinition.componentName'
				},
				{
					title: this.ft('configKey'),
					width: '20%',
					orderable: true,
					type: 'string',
					name: 'configDefinition.configKey'
				},
				{title: this.ft('nodeVersion'), width: '5%', orderable: true, type: 'string', name: 'nodeVersion'},
				{title: this.ft('nodeId'), width: '9%', orderable: true, type: 'string', name: 'nodeId'},
				{title: this.ft('configValue'), width: '20%', orderable: true, type: 'string', name: 'configValue'},
				{
					title: $.t('common.fields.actions'),
					width: '8%',
					orderable: false,
					type: 'html',
					defaultContent: '',
					className: 'action_cell'
				}
			],
			"order": [
				[1, "asc"]
			], // set first column as a default sort by asc
			searching: true,
			"argExtraFields": ["configId"]
		};
	}

	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		if (is.existy(this.comboData)) {
			let request;
			request = this.baseServices.apiHelper.genRequest({
				data: <ModuleNodeConfigSearchDTO>this.baseServices.apiHelper.genDTO({
					nodeId: this.selectedNode !== SystemParametersListPage.ALL_KEYWORD ? this.selectedNode : null,
					nodeType: this.selectedNodeType.nodeType,
					nodeVersion: this.selectedVersion.nodeVersion !== SystemParametersListPage.ALL_KEYWORD ? this.selectedVersion.nodeVersion : null
				}, true)
			});

			this.configApi
				.configModuleNodeConfigListPOST(<ModuleNodeConfigListRequest>request)
				.subscribe(
					(res) => {
						executeCallback(<ModuleNodeConfigListResponse>res);
					}
				);

			this.logger.debug("Request:", request);

			let executeCallback = (response: ModuleNodeConfigListResponse) => {
				let dataTableData = [];

				if (this.baseServices.uiHelper.processResponse(response)) {

					this.currentList = response.data.list;

					response.data.list.forEach((itm: ModuleNodeConfigDTO, idx) => {
						dataTableData.push(
							[
								this.renderIcon("NODETYPE", itm.configDefinition.nodeType),
								this.renderText(itm.configDefinition.componentName, '-', 80),
								this.renderText(itm.configDefinition.configKey),
								this.tt(this.renderText(itm.nodeVersion, SystemParametersListPage.ALL_KEYWORD)),
								this.tt(this.renderText(itm.nodeId, SystemParametersListPage.ALL_KEYWORD)),
								this.renderText(itm.configValue, '-', 35),
								this.renderRowActions(idx, true)
							]
						);
					});

				} else {
					this.logger.error("DataTable Error", data);
				}

				callback({
					draw: data.draw,
					recordsTotal: response.data ? response.data.totalItems : dataTableData.length,
					recordsFiltered: response.data ? response.data.totalItems : dataTableData.length,
					data: dataTableData
				});
			}
		} else {
			callback({
				draw: data.draw,
				recordsTotal: 0,
				recordsFiltered: 0,
				data: []
			});
		}

	}

	public populateCombos() {
		let request = this.baseServices.apiHelper.genFullListRequest();

		let s =
			this.configApi
				.configModuleNodesListPOST(<GenericListRequest>request)
				.subscribe(
					(response) => {
						if (this.baseServices.uiHelper.processResponse(response)) {
							if (is.existy(response.data.list) && is.not.empty(response.data.list)) {
								this.comboData = response.data.list;
								//INFO: MLAT-3198 implementation - START
								this.comboData.sort((a, b) => {
										return this.i18n.t('enums.NODETYPE.' + a.nodeType).localeCompare(this.i18n.t('enums.NODETYPE.' + b.nodeType));
									}
								);
								//INFO: MLAT-3198 implementation - END
							} else {
								this.comboData = [];
							}

							this.selectNodeType(this.requestedNodeType);

							this.changeDetector.detectChanges();
						}
					},
					(error) => {
						this.baseServices.uiHelper.processResponse(error);
					}
				);
		this.subscriptions.push(s);

	}

	public _allTitle;
	public get allTitle() {
		return this._allTitle || (this._allTitle = this.t("labels.ALL"));
	}

	//INFO: Used by HTML template, do not remove
	public tt(value) {
		return value.replace(SystemParametersListPage.ALL_KEYWORD, this.allTitle);
	}

	private selectNodeType(requestedNodeType: NODETYPE) {
		if (is.not.empty(this.comboData)) {
			//INFO: MLAT-3198 implementation - START
			//filter the list for CONTROLLER node type
			let justController = this.comboData.filter((val) => val.nodeType == requestedNodeType);
			//If we found controller than select it as default, else select the first available node type.
			this.selectedNodeType = is.not.empty(justController) ? justController[0] : this.comboData[0];
			//INFO: MLAT-3198 implementation - END
		} else {
			this.selectedNodeType = null;
		}
	}
}
