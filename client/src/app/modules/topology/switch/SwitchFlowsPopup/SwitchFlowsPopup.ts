/**
 * Created by ekinca on 12.04.2016.
 */

import {Component, ElementRef, OnInit, AfterViewInit, OnDestroy} from "@angular/core";
import {FlowsApi} from "../../../../swagger/FlowsApi";
import {BasePopupDataTablesPage} from "../../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {PageServices} from "../../../PageServices";
import {Action} from "../../../../commons/Action";
import {MODAL_SIZE} from "../../../ModalComponent";
import {FlowDTO} from "../../../../swagger/FlowDTO";
import {FlowDeleteRequest} from "../../../../swagger/FlowDeleteRequest";
import {FlowDeleteOptions} from "../../../../swagger/FlowDeleteOptions";
import {SwitchDTO} from "../../../../swagger/SwitchDTO";
import {FlowListOptions} from "../../../../swagger/FlowListOptions";
import {FlowListRequest} from "../../../../swagger/FlowListRequest";
import {SortOptions} from "../../../../swagger/SortOptions";
import {FlowListResponse} from "../../../../swagger/FlowListResponse";
import {LocalSwitchDTO} from "../../../../commons/LocalClasses/LocalSwitchDTO";


// Root Component
@Component({
	moduleId: module.id,
	selector: 'SwitchFlowsPopup',
	templateUrl: '../../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html',
	providers: [FlowsApi]
})
export class SwitchFlowsPopup extends BasePopupDataTablesPage<LocalSwitchDTO, FlowDTO> implements OnInit, AfterViewInit, OnDestroy {
	public deleteRowAction: Action;
	public loadingInPorgress;
	public refreshTimeout;

	constructor(public flowsApi: FlowsApi, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.modalSize = MODAL_SIZE.FULL;
		this.isServerSide = false;//no server-side data request

		//populate i18n fields but exclude title, because we are going to define it here
		this.setI18NKey('network_vis.switch.flow_list', {
			'title': () => this.t('title', {name: (this.data.name || this.data.id)})
		});

		this.setPopupActions([
			this.createAction('@create_flow', () => {
				this.logger.debug('Add new flow clicked');

			})
		]);

		this.setRowActions([
			this.createAction('@view_flow', (itm: FlowDTO) => {
				this.logger.debug('View flow ' + itm.id + ' action clicked');

				/*
				 let itm = $(e.currentTarget);
				 console.log("Load Topology", itm.data("type"), itm.data("id"));

				 this.virtualListModal.modal('hide');

				 //delay the loading operation so that popup pages hides before topology refresh
				 setTimeout(()=> {
				 this.getTopology((<any>itm).data("type"), (<any>itm).data("id"));
				 }, 500);*/

			}),
			this.createAction('@edit_flow', (itm: FlowDTO) => {
				this.logger.debug('Edit flow ' + itm.id + ' action clicked');

			}),

			this.deleteRowAction = this.createAction('@delete_flow', (itm: FlowDTO) => {
				this.logger.debug('Delete flow ' + itm.id + ' action clicked');

				if (this.checkDeleteStatus(itm)) {
					this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
						if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
							//this.baseServices.uiHelper.alert("OK we will delete");

							let request: FlowDeleteRequest = <FlowDeleteRequest>this.baseServices.apiHelper.genRequest({
								options: <FlowDeleteOptions> {
									id: itm.id,
									deviceId: itm.deviceId,
									isReturnModel: false
								}
							});

							let s =
								this.flowsApi
									.flowDeletePOST(<FlowDeleteRequest>request)
									.subscribe(
										(res) => {
											if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
												this.reload();
											}
										},
										(error: any) => {
											this.baseServices.uiHelper.processResponse(error);//.body); //JSON parsing is handled in the function now
										}
									);
							this.subscriptions.push(s);
						}
					})
				} else {
					this.baseServices.uiHelper.alert(this.t('messages.delete_not_allowed', {dto: itm}));
				}
			})
		]);
	}


	ngOnChanges(e) {
		super.ngOnChanges(e);
		this.logger.info('something changed', e);
	}

	ngOnInit() {
		super.ngOnInit();
		//this.$tableRef.addClass('no-padding-sorting');
		this.startRefreshOperation();
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			//Code here
			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		clearInterval(this.refreshTimeout);
	}

	getDataTableOptions() {
		var dataset = this.prepateData();

		return {
			columns: [
				//{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
				{
					title: this.ft('state'),
					width: '5%',
					orderable: true,
					type: 'string',
					name: 'state',
					className: "dt-center"
				},
				{
					title: this.ft('controller'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'controller',
					className: "dt-center"
				},
				{
					title: this.ft('grp_tbl_id'),
					width: '5%',
					orderable: true,
					type: 'string',
					name: 'groupId,tableId',
					className: "dt-center"
				},
				{
					title: this.ft('priority'),
					width: '5%',
					orderable: true,
					type: 'number',
					name: 'priority',
					className: "dt-center"
				},
				{
					title: this.ft('app'),
					width: '5%',
					orderable: true,
					type: 'number',
					name: 'appId',
					className: "dt-center"
				},
				{title: this.ft('match_list'), width: '20%', orderable: true, type: 'Date', name: 'matchList'},
				{
					title: this.ft('instruction_list'),
					width: '16%',
					orderable: true,
					type: 'string',
					name: 'instructionList'
				},
				{
					title: "LIFE",//dummy column for proper sorting
					width: '0%',
					orderable: true,
					type: 'number',
					name: 'life',
					visible: false
				},
				{
					title: this.ft('life'),
					width: '8%',
					orderable: true,
					type: 'string',
					name: 'life',
					className: 'dt-center',
					orderData: [7]
				},
				{
					title: "PACKETS",//dummy column for proper sorting
					width: '0%',
					orderable: true,
					type: 'number',
					name: 'packets',
					visible: false
				},
				{
					title: this.ft('packets'),
					width: '8%',
					orderable: true,
					type: 'string',
					name: 'packets',
					className: "dt-center",
					orderData: [9]
				},
				{
					title: "BYTES",//dummy column for proper sorting
					width: '0%',
					orderable: true,
					type: 'number',
					name: 'bytes',
					visible: false
				},
				{
					title: this.ft('bytes'),
					width: '8%',
					orderable: true,
					type: 'string',
					name: 'bytes',
					className: "dt-center",
					orderData: [11]
				},
				{
					title: $.t('common.fields.actions'),
					width: '5%',
					orderable: false,
					type: 'html',
					defaultContent: '',
					className: 'action_cell'
				}
			],
			order: [
				[1, "asc"]
			], // set first column as a default sort by asc
			searching: true,
			serverSide: false,
			data: dataset
		};
	}

	/*
	 makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {
	 //debugger;
	 let request:any;

	 if (requestOptions.queryOptions) {
	 //use Search function
	 request = this.baseServices.apiHelper.genRequest({
	 options: <FlowSearchOptions> $.extend(requestOptions, {
	 id: this.data.id,
	 })
	 });

	 this.flowsApi
	 .flowSearchPOST(<FlowSearchRequest>request)
	 .subscribe(
	 (res) => {
	 executeCallback(<FlowListResponse>res);
	 }
	 );

	 }
	 else {
	 //use list function
	 request = this.baseServices.apiHelper.genRequest({
	 options: <FlowListOptions> $.extend(requestOptions, {
	 id: this.data.id,
	 })
	 });

	 this.flowsApi
	 .flowListPOST(<FlowListRequest>request)
	 .subscribe(
	 (res) => {
	 executeCallback(<FlowListResponse>res);
	 }
	 // ,
	 // (error:any) => {
	 //     executeCallback(<FlowListResponse>JSON.parse(error.body));
	 // }
	 );
	 }

	 this.logger.debug("Request:", request);

	 let executeCallback = (response:FlowListResponse) => {
	 let dataTableData = [];

	 if (this.baseServices.uiHelper.processResponse(response)) {

	 this.currentList = response.data.list;

	 //let appIDList = ["Rest", "CLI", "OVSDB"];

	 response.data.list.forEach((itm:FlowDTO, idx)=> {
	 dataTableData.push(
	 [
	 //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
	 this.renderIcon('FLOWSTATE',itm.state),
	 [itm.groupId,itm.tableId].join('/'),
	 itm.priority,
	 //appIDList[itm.appId] || "N/A",
	 itm.appId || "N/A",
	 itm.matchList.join("<br>"),
	 itm.instructionList.join("<br>"),
	 `${itm.life}ms`,
	 this.baseServices.uiHelper.formatPackets(itm.packets),
	 this.renderRowActions(idx, true, (action:Action, idx:number, data:any)=>{
	 if (action==this.deleteRowAction){
	 return this.checkDeleteStatus(data);
	 }
	 return true;
	 })
	 ]
	 );
	 });

	 } else {
	 this.logger.error("Flow List DateTable Error", data);
	 }
	 callback({
	 draw: data.draw,
	 recordsTotal: response.data ? response.data.totalItems : []|| dataTableData.length,
	 recordsFiltered: response.data ? response.data.totalItems : []|| dataTableData.length,
	 data: dataTableData
	 });
	 }
	 }*/

	public checkDeleteStatus(data: FlowDTO) {
		return !(data.priority == 40000 || data.priority == 5 || data.appId.toString() == 'INTENT');
	}

	reload(reset: boolean = false) {
		this.logger.debug('Reload Flow List!');
		this.loadFlowList();
	}

	public startRefreshOperation() {
		this.loadingInPorgress = false;
		this.refreshTimeout = setInterval(() => {
			this.loadFlowList();
		}, 10000);
		this.loadFlowList();
	}

	public loadFlowList() {
		if (!this.loadingInPorgress) {
			this.loadingInPorgress = true;

			//use list function
			let request = this.baseServices.apiHelper.genRequest({
				options: <FlowListOptions> {
					id: this.data.id,
					mvtnNetworkId: this.data.mvtnNetworkId,
					startPage: 0,
					pageSize: 0,
					sortOptions: <SortOptions>{
						fieldName: 'id',
						isAscend: true,
					},
					//fields: this.getDataTableOptions().columns.map((v,i)=> v.name)
				}
			});

			//this.baseServices.uiHelper.block('SwitchFlowsPopup',this.getBlockingContainer(),false);
			let s =
				this.flowsApi
					.flowListPOST(<FlowListRequest>request, false)
					.finally(() => {
						//this.baseServices.uiHelper.unblock('SwitchFlowsPopup');
						this.loadingInPorgress = false;
					})
					.subscribe(
						(res: FlowListResponse) => {
							try {
								if (this.baseServices.uiHelper.processResponse(res)) {
									this.currentList = res.data.list;
									this.$dataTableRef.clear();
									this.$dataTableRef.rows.add(this.prepateData());
									this.$dataTableRef.draw(false);
								}
							} catch (e) {
								this.logger.error(e);
							}
						},
						(error: any) => {
							try {
								this.baseServices.uiHelper.processResponse(error.body); //JSON parsing is handled in the function now
							} catch (e) {
								this.logger.error(e);
							}
							clearInterval(this.refreshTimeout);
							setTimeout(() => {
								this.startRefreshOperation()
							}, 10000);
						}
					);
			this.subscriptions.push(s);
		}
	}

	public prepateData() {
		var dataset = [];
		if (this.currentList) {
			try {
				this.currentList.forEach((itm: FlowDTO, idx) => {
					dataset.push(
						[
							//'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
							this.renderIcon('FLOWSTATE', itm.state),
							[itm.controllerAddress ? itm.controllerAddress.ipv4 : "", itm.controllerPort ? itm.controllerPort : ""].join(':'),
							[itm.groupId, itm.tableId].join('/'),
							itm.priority,
							//appIDList[itm.appId] || "N/A",
							itm.appId || "N/A",
							itm.matchList.join("<br>"),
							itm.instructionList.join("<br>"),
							itm.life || 0,
							this.baseServices.uiHelper.formatTime(itm.life),
							//`${itm.life}ms`,
							itm.packets || 0,
							this.baseServices.uiHelper.formatPackets(itm.packets),
							itm.bytes || 0,
							this.baseServices.uiHelper.formatBytes(itm.bytes),
							this.renderRowActions(idx, true, (action: Action, idx: number, data: any) => {
								if (action == this.deleteRowAction) {
									return this.checkDeleteStatus(data);
								}
								return true;
							})
						]
					);
				});

			} catch (e) {

			}
		}
		return dataset;
	}

	// public getBlockingContainer() {
	//     return  this.$tableRef.closest('.table-body').find('.table-loader');
	// }
}

