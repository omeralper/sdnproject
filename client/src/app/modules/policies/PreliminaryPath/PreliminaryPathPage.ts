/**
 * Created by ekinca on 5.12.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DocumentConverter} from "../../DocumentConverter";
import {PreliminaryPathPopup} from "./PreliminaryPathPopup";
import {ProactivePathPolicyDTO} from "../../../swagger/ProactivePathPolicyDTO";
import {ProactivePathPolicyApi} from "../../../swagger/ProactivePathPolicyApi";
import {ProactivePathPolicyListResponse} from "../../../swagger/ProactivePathPolicyListResponse";


@Component({
	moduleId: module.id,
	selector: 'PrelimiaryPath',
	templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html'
})
export class PreliminaryPathPage extends BaseDataTablesPage<ProactivePathPolicyDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


	constructor(public policyApi: ProactivePathPolicyApi, baseServices: PageServices, elementRef: ElementRef, public dc: DocumentConverter) {
		super(baseServices, elementRef);
		this.setI18NKey('policy_management.preliminary_path_policies.list');

		this.setActions([
			this.createAction('@create_preliminary_path_policy', () => {
				this.logger.debug('Create new path policy action clicked')
				this.baseServices.sharedService.showModal(PreliminaryPathPopup, {},
					(result) => {
						if (result.isSuccess) this.reload();
					});
			})
		]);


		this.setRowActions([
			/*            this.createAction('@view_user', (itm:UserDTO)=> {
			 this.logger.debug('View user '+itm.username+' action clicked');
			 }),*/
			this.createAction('@edit_preliminary_path_policy', (itm: ProactivePathPolicyDTO) => {
				this.logger.debug('Edit user ' + itm.name + ' action clicked');
				this.baseServices.sharedService.showModal(PreliminaryPathPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),

			this.createAction('@delete_preliminary_path_policy', (itm: ProactivePathPolicyDTO) => {
				this.logger.debug('Delete user ' + itm.name + ' action clicked');
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						//this.baseServices.uiHelper.alert("OK we will delete");

						let request = this.baseServices.apiHelper.genRequest({
							options: <DeleteOptions> {
								id: itm.id,
								isReturnModel: false
							}
						});

						let s =
							this.policyApi
								.proactiveDeletePOST(<GenericDeleteRequest>request)
								.subscribe(
									(res) => {
										if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
											this.reload();
										}
									},
									(error: any) => {
										this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
									}
								);
						this.subscriptions.push(s);
					}
				})
			})
		]);
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
		this.logger.info('something changed', e);
	}

	ngOnInit() {
		super.ngOnInit();
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
	}

	getDataTableOptions() {
		return {
			columns: [
				{
					title: this.ft('status'),
					width: '5%',
					orderable: true,
					type: 'string',
					name: 'status',
					className: 'dt-center'
				},
				{visible: false, orderable: true, type: 'string', name: 'intentId'},
				{title: this.ft('name'), width: '10%', orderable: true, type: 'string', name: 'name'},
				{
					title: this.ft('mvtn_name_short'),
					tooltip: this.ft('mvtn_name'),
					width: '5%',
					orderable: true,
					type: 'string',
					name: 'mvtnName'
				},
				{title: this.ft('source_host'), width: '15%', orderable: true, type: 'num', name: 'fromId'},
				{title: this.ft('target_host'), width: '15%', orderable: true, type: 'num', name: 'toId'},
				{
					title: this.ft('priority'),
					width: '5%',
					orderable: true,
					type: 'num',
					name: 'priority',
					className: 'dt-center'
				},
				{
					title: this.ft('service_quality_policy_short'),
					tooltip: this.ft('service_quality_policy'),
					width: '10%',
					orderable: true,
					type: 'num',
					name: 'serviceAction'
				},
				{
					title: this.ft('start_date_short'),
					tooltip: this.ft('start_date'),
					width: '12.5%',
					orderable: true,
					type: 'num',
					name: 'startTime',
					className: 'dt-center'
				},
				{
					title: this.ft('end_date_short'),
					tooltip: this.ft('end_date'),
					width: '12.5%',
					orderable: true,
					type: 'num',
					name: 'stopTime',
					className: 'dt-center'
				},
				{
					title: $.t('common.fields.actions'),
					width: '10%',
					orderable: false,
					type: 'html',
					defaultContent: '',
					className: 'action_cell'
				}
			],
			"order": [
				[0, "asc"]
			], // set first column as a default sort by asc
			argExtraFields: ['mvtnId']
		};
	}

	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		// let request = this.baseServices.apiHelper.genRequest({
		//     options: <ListOptions>{
		//         startPage: 0,
		//         pageSize: 0,
		//         sortOptions: {fieldName: 'name', isAscend: true},
		//         fields: null
		//     }
		// });
		// request.options = <SearchOptions> requestOptions;
		// request.options.fields = null;

		let searchRequest = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions> requestOptions
		});

		this.policyApi
			.proactiveSearchPOST(<GenericSearchRequest>searchRequest)
			.subscribe(
				(res) => {
					executeCallback(<ProactivePathPolicyListResponse>res);
				}
			);

		this.logger.debug("Request:", searchRequest);

		let executeCallback = (response: ProactivePathPolicyListResponse) => {
			//debugger;
			let dataTableData = [];

			if (this.baseServices.uiHelper.processResponse(response)) {

				this.currentList = response.data.list;

				response.data.list.forEach((itm: any, idx) => {

					dataTableData.push(
						[
							//'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
							this.renderIcon("PPPSTATUS", itm.status) || '',
							itm.intentId || '',
							itm.name || '',
							itm.mvtnName || '-',
							itm.fromId,
							itm.toId,
							itm.priority,
							( (itm.serviceAction && itm.serviceAction.policyName) ? itm.serviceAction.policyName : "" ),
							this.baseServices.uiHelper.renderDateTime(itm.startTime),
							this.baseServices.uiHelper.renderDateTime(itm.stopTime),
							this.renderRowActions(idx, true)
						]
					);
				});

			} else {
				this.logger.error('UserList DataTables Error:', data);
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
