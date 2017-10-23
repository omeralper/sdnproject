/**
 * Created by omeroz on 2/27/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, EventEmitter} from "@angular/core";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../../PageServices";
import {ClusterDTO} from "../../../../swagger/ClusterDTO";
import {ControllerApi} from "../../../../swagger/ControllerApi";
import {GenericIdRequest} from "../../../../swagger/GenericIdRequest";
import {ControllerNodeListResponse} from "../../../../swagger/ControllerNodeListResponse";
import {ControllerNodeDTO} from "../../../../swagger/ControllerNodeDTO";
import {ControllerEditPopup} from "./ControllerEditPopup";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {QueryOptions} from "../../../../swagger/QueryOptions";
import {QUERYOP} from "../../../../swagger/QUERYOP";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {ControllerSettingsService, ClusterViews, ClusterViewParam} from "./ControllerSettingsService";
import {ControllerTlsPopup} from "./ControllerTlsPopup";
import {CONTROLLERSTATUS} from "../../../../swagger/CONTROLLERSTATUS";


@Component({
	moduleId: module.id,
	selector: 'ControllerList',
	templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class ControllerList extends BaseDataTablesPage<ControllerNodeDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	public cluster: ClusterDTO = <ClusterDTO> {};
	subscription;

	constructor(public controllerApi: ControllerApi,
	            public controllerSettingsService: ControllerSettingsService,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('network_vis.controller_management.controllerSettings.controllerList');
		this.title = this.t('title');
		this.isServerSide = false;

		this.setRowActions([
			this.createAction('@edit', (itm: ControllerNodeDTO) => {
				this.baseServices.sharedService.showModal(ControllerEditPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),
			this.createAction('@parameters', (itm: ControllerNodeDTO) => {
				this.selectView(ClusterViews.Parameter, itm)
			}),
			this.createAction('@tasks', (itm: ControllerNodeDTO) => {
				this.selectView(ClusterViews.Task, itm)
			}),
			this.createAction('@switches', (itm: ControllerNodeDTO) => {
				this.selectView(ClusterViews.Switch, itm)
			}),
		]);
		this.setActions([
			this.createAction('@tls', () => {
				this.baseServices.sharedService.showModal(ControllerTlsPopup, {address: {}, location: {}},
					(result) => {
						if (result.isSuccess) this.reload();
					});
			})
		]);
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngOnInit() {
		super.ngOnInit();
		this.subscription = this.controllerSettingsService.viewSelected.subscribe((param: ClusterViewParam) => {
			this.cluster = param.data;
			this.reload();
		});
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {

			return true;
		}
		return false;
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
		super.ngOnDestroy();
	}

	selectView(view, data) {
		this.controllerSettingsService.selectView(view, data)
	}

	getDataTableOptions() {
		return {
			columns: [
				{title: this.ft('status'), width: '10%', orderable: true, type: 'string', name: 'status'},
				{
					title: this.ft('controllerName'),
					width: '25%',
					orderable: true,
					type: 'string',
					name: 'controllerName'
				},
				{title: this.ft('nm'), width: '15%', orderable: true, type: 'string', name: 'nm'},
				{title: this.ft('ip'), width: '10%', orderable: true, type: 'string', name: 'ip'},
				{title: this.ft('port'), width: '10%', orderable: true, type: 'string', name: 'port'},
				{title: this.ft('ofVersion'), width: '15%', orderable: true, type: 'string', name: 'ofVersion'},
				{
					title: $.t('common.fields.actions'),
					width: '20%',
					orderable: false,
					type: 'html',
					defaultContent: '',
					className: 'action_cell'
				}
			],
			"order": [
				[1, "desc"]
			],
			extraFields: []
		};
	}

	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		if (this.isFirstTime) {
			return super.makeDataTableRequest(requestOptions, data, callback);
		}

		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>{
				queryOptions: <QueryOptions> {
					operator: QUERYOP.VALUE,
					fieldValue: this.cluster.id,
					fieldName: "clusterId"
				},
				// pageSize:2,
				startPage: 0
			}
		});

		this.controllerApi
			.controllerSearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(res) => {
					executeCallback(<ControllerNodeListResponse>res);
				}
			);

		let executeCallback = (response: ControllerNodeListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: ControllerNodeDTO, idx) => {
					dataTableData.push(
						[
							this.renderIcon('CONTROLLERSTATUS', itm.status),
							itm.name || '',
							itm.nmNodeId || '',
							itm.managementAddress || '',
							itm.managementPort || '',
							itm.openflowVersions || '',
							this.renderRowActions(idx, true, (action, idx2, data2) => {
								if (action.id.indexOf('tasks') != -1 || action.id.indexOf('switches') != -1) {
									if (!itm.featureVisible)
										return false;
								}
								if(action.id.indexOf('parameters') != -1 && itm.status == CONTROLLERSTATUS.PASSIVE)
									return false;
								return true;
							}),
						]
					);
				});
			} else {
				this.logger.error('ClusterList DataTables Error:', data);
			}
			callback({
				draw: data.draw,
				recordsTotal: response.data ? response.data.totalItems : [],
				recordsFiltered: response.data ? response.data.totalItems : [],
				data: dataTableData
			});
		}
	}

}
