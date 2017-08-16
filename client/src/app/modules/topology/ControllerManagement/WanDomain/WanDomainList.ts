/**
 * Created by omeroz on 6/15/2017.
 */

import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {PageServices} from "../../../PageServices";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {DeleteOptions} from "../../../../swagger/DeleteOptions";
import {Action} from "../../../../commons/Action";
import {GenericDeleteRequest} from "../../../../swagger/GenericDeleteRequest";
import {WanDomainDTO} from "../../../../swagger/WanDomainDTO";
import {WanDomainEditPopup} from "./WanDomainEditPopup";
import {WANDOMAINApi} from "../../../../swagger/WANDOMAINApi";
import {WanDomainListResponse} from "../../../../swagger/WanDomainListResponse";
import {WanDomainMultiEditPopup} from "./WanDomainMultiEditPopup";
import {GenericListRequest} from "../../../../swagger/GenericListRequest";
import {WanDomainResponse} from "../../../../swagger/WanDomainResponse";

@Component({
	moduleId: module.id,
	selector: 'WanDomainList',
	templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class WanDomainList extends BaseDataTablesPage<WanDomainDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	currentDomain: WanDomainDTO = <WanDomainDTO>{};
	isLocal:boolean = false;
	constructor(public wanDOMAINApi: WANDOMAINApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('network_vis.controller_management.wanDomain.list');
		this.isServerSide = false;
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngAfterViewInit() {
		let req = this.baseServices.apiHelper.genRequest({});
		this.wanDOMAINApi
			.wanConfigurationWanDomainCurrentPOST(req)
			.subscribe((res: WanDomainResponse) => {
				if (res.data && (res.data.id || res.data.name.toLowerCase() == "standalone")) {
					this.currentDomain = res.data;
					this.isLocal = true;
				} else {
					this.setRowActions([
						this.createAction('@edit', (itm: WanDomainDTO) => {
							this.baseServices.sharedService.showModal(WanDomainEditPopup, itm, (result) => {
								if (result.isSuccess) this.reload();
							});
						}),
						this.createAction('@delete', (itm: WanDomainDTO) => {
							this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
								if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
									let request = this.baseServices.apiHelper.genRequest({
										options: <DeleteOptions> {
											id: itm.id,
											isReturnModel: false
										}
									});
									this.wanDOMAINApi
										.wanConfigurationWanDomainDeletePOST(<GenericDeleteRequest>request)
										.subscribe(
											(res) => {
												if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
													this.reload();
												}
											},
											(error: any) => {
												this.baseServices.uiHelper.processResponse(error._body);
											}
										);
								}
							})
						})
					]);


					this.setActions([
						this.createAction('@create', [
							this.createAction('@create', () => {
								this.baseServices.sharedService.showModal(WanDomainEditPopup, {},
									(result) => {
										if (result.isSuccess) this.reload();
									});
							}),
							this.createAction('@multiCreate', () => {
								this.baseServices.sharedService.showModal(WanDomainMultiEditPopup, {},
									(result) => {
										if (result.isSuccess) this.reload();
									});
							})
						])
					]);
				}
				return super.ngAfterViewInit();
			});
		return true;
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
					type: 'html',
					name: 'status',
					className: 'dt-center'
				},
				{title: this.ft('domainId'), width: '35%', orderable: true, type: 'string', name: 'domainId'},
				{title: this.ft('name'), width: '35%', orderable: true, type: 'string', name: 'name'},

			].concat(this.isLocal ? [] : [{
				title: $.t('common.fields.actions'),
				width: '15%',
				orderable: false,
				type: 'html',
				name:'',
				className: 'action_cell'
			}]),
			"order": [
				[1, "desc"]
			],
		};
	}


	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>requestOptions
		});

		this.wanDOMAINApi
			.wanConfigurationWanDomainListPOST(<GenericListRequest>request)
			.subscribe(
				(res) => {
					executeCallback(<WanDomainListResponse>res);
				}
			);

		let executeCallback = (response: WanDomainListResponse) => {
			let dataTableData = [];

			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;

				response.data.list.forEach((itm: WanDomainDTO, idx) => {
					dataTableData.push(
						[
							this.renderIcon('WANDOMAINSTATUS', itm.status),
							itm.domainId || '',
							itm.name || '',
							this.renderRowActions(idx, true)
						]
					);
				});

			} else {
				this.logger.error("Wan Domain Datatable Error", data);
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
