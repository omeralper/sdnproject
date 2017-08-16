/**
 * Created by omeroz on 2/27/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BaseDataTablesPage} from "../../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../../../PageServices";
import {FeatureDTO} from "../../../../../swagger/FeatureDTO";
import {ControllerNodeDTO} from "../../../../../swagger/ControllerNodeDTO";
import {FeatureApi} from "../../../../../swagger/FeatureApi";
import {FeatureListResponse} from "../../../../../swagger/FeatureListResponse";
import {GenericSearchRequest} from "../../../../../swagger/GenericSearchRequest";
import {QUERYOP} from "../../../../../swagger/QUERYOP";
import {QueryOptions} from "../../../../../swagger/QueryOptions";
import {SearchOptions} from "../../../../../swagger/SearchOptions";
import {Headers} from "@angular/http";
import {CURRENTSTATUS} from "../../../../../swagger/CURRENTSTATUS";
import {FeatureRequest} from "../../../../../swagger/FeatureRequest";
import {DIALOG_TYPES} from "../../../../UIHelper";
import {ControllerSettingsService, ClusterViewParam} from "../ControllerSettingsService";
import {Subscription} from "rxjs";

@Component({
	moduleId: module.id,
	selector: 'ControllerTaskList',
	templateUrl: '../../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class ControllerTaskList extends BaseDataTablesPage<FeatureDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
	controller: ControllerNodeDTO = <ControllerNodeDTO>{};
	subscription: Subscription;
	intervalId;

	constructor(public featureApi: FeatureApi,
	            public controllerSettingsService: ControllerSettingsService,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('network_vis.controller_management.controllerSettings.tasks');
		this.isServerSide = false;
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngOnInit() {
		super.ngOnInit();
		this.intervalId = setInterval(() => {
			this.reload();
		}, 5000);
		this.subscription = this.controllerSettingsService.viewSelected.subscribe((param: ClusterViewParam) => {
			this.controller = param.data;
			this.reload();
		});
	}

	ngAfterViewInit() {
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
		clearTimeout(this.intervalId);
		super.ngOnDestroy();
	}

	getDataTableOptions() {
		return {
			columns: [
				{
					title: this.ft('workStatus'), width: '15%', orderable: true, type: 'html',
					name: 'currentStatus', className: 'dt-center',
				},
				{
					title: this.ft('actionStatus'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'processingStatus',
					className: 'dt-center'
				},
				{title: this.ft('name'), width: '15%', orderable: true, type: 'string', name: 'name'},
				{
					title: this.ft('version'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'version',
					className: 'dt-center'
				},
				{title: this.ft('startTime'), width: '15%', orderable: true, type: 'string', name: 'startTime'},

			],
			"order": [
				[1, "desc"]
			],
			extraFields: [],
			"drawCallback": () => {
				$('.taskStatus:not(.required-task)')
					.bootstrapSwitch()
					.on('switchChange.bootstrapSwitch', (event, state) => {
						let row = $(event.target).closest('tr');
						$('.taskStatus', row).bootstrapSwitch('indeterminate', true);
						$('.taskStatus', row).bootstrapSwitch('disabled', true);

						let data = <FeatureDTO> this.currentList[+(<any>event.target).dataset.index];
						data.currentStatus = state ? CURRENTSTATUS.INSTALLED : CURRENTSTATUS.UNINSTALLED;
						let request: FeatureRequest = <FeatureRequest>this.baseServices.apiHelper.genRequest({
							data: data
						});
						this.featureApi
							.featureSavePOST(request)
							.subscribe(
								(res) => {
									if (this.baseServices.uiHelper.processResponse(res)) {
										this.baseServices.uiHelper.notify(this.t('messages.save_success', {dto: res.data}), DIALOG_TYPES.SUCCESS);
										row[0].children[1].innerHTML = this.renderIcon('PROCESSINGSTATUS', res.data.processingStatus);
									}
								},
								(error: any) => {
									this.baseServices.uiHelper.processResponse(error._body);
								});
					});
				$('.taskStatus.required-task').bootstrapSwitch('disabled', true);
			}
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
					fieldValue: this.controller.id,
					fieldName: "id"
				},
				pageSize: 10,
				startPage: 0
			}
		});

		let header = new Headers();
		header.append('X-NODE_ID', this.controller.nmNodeId);

		this.featureApi
			.featureSearchPOST(<GenericSearchRequest>request, true, header)
			.subscribe(
				(res) => {
					executeCallback(<FeatureListResponse>res);
				}
			);

		let executeCallback = (response: FeatureListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: FeatureDTO, i) => {
					let stat = itm.currentStatus == CURRENTSTATUS.INSTALLED ? 'checked' : '';
					let required = itm.isRequired ? 'required-task' : '';
					dataTableData.push(
						[
							'<input type="checkbox" class="taskStatus ' + required + '" ' + stat + ' data-index="' + i + '" />',
							this.renderIcon('PROCESSINGSTATUS', itm.processingStatus),
							itm.name || '',
							itm.version || '',
							this.renderDateTime(itm.startTime),
						]
					);
				});

			} else {
				this.logger.error('Task List DataTable Error:', data);
			}

			callback({
				draw: data.draw,
				recordsTotal: response.data ? response.data.totalItems : [],
				recordsFiltered: response.data ? response.data.totalItems : [],
				data: dataTableData
			});
		};
	}
}
