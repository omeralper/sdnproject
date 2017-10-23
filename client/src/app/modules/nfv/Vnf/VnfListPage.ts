/**
 * Created by omeroz on 4/6/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {NetServiceDescDTO} from "../../../swagger/NetServiceDescDTO";
import {NFVApi} from "../../../swagger/NFVApi";
import {NetServiceDescListResponse} from "../../../swagger/NetServiceDescListResponse";
import {VirtualNetFunctionDTO} from "../../../swagger/VirtualNetFunctionDTO";
import {VnfEditPopup} from "./VnfEditPopup";
import {VirtualNetFunctionListResponse} from "../../../swagger/VirtualNetFunctionListResponse";

@Component({
	moduleId: module.id,
	selector: 'VnfListPage',
	templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class VnfListPage extends BaseDataTablesPage<VirtualNetFunctionDTO> implements OnInit, AfterViewInit, OnDestroy {

	constructor(public nfvApi: NFVApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('network_function_virtualization.virtual_network_function.list');
		this.isServerSide = false;
		this.setActions([
			this.createAction('@create', () => {
				this.baseServices.sharedService.showModal(VnfEditPopup, {}, (result) => {
					if (result.isSuccess) this.reload();
				});
			})
		]);

		this.setRowActions([
			this.createAction('@edit', (itm: NetServiceDescDTO) => {
				this.baseServices.sharedService.showModal(VnfEditPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),
			// this.createAction('@nsr', (itm: NetServiceDescDTO) => {
			//     // this.baseServices.sharedService.showModal(NsdEditPopup, itm, (result) => {
			//     //     if (result.isSuccess) this.reload();
			//     // });
			// }),

			this.createAction('@delete', (itm: NetServiceDescDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						let request = this.baseServices.apiHelper.genRequest({
							options: <DeleteOptions> {
								id: itm.id,
								isReturnModel: false
							}
						});
						let s =
							this.nfvApi
								.vnfDeletePOST(<GenericDeleteRequest>request)
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
						this.subscriptions.push(s);
					}
				})
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

	getDataTableOptions() {
		return {
			columns: [
				{title: this.ft('name'), width: '20%', orderable: true, type: 'string', name: 'name'},
				{title: this.ft('vendor'), width: '20%', orderable: true, type: 'string', name: 'vendor'},
				{
					title: this.ft('vnfVersion'),
					width: '20%',
					orderable: true,
					type: 'string',
					name: 'vnfVersion'
				},
				{
					title: this.ft('vnfType'),
					width: '20%',
					orderable: true,
					type: 'string',
					name: 'vnfType'
				},
				{
					title: $.t('common.fields.actions'),
					width: '10%',
					name: 'actions',
					orderable: false,
					type: 'html',
					defaultContent: '',
					className: 'action_cell',
					bound: false
				}
			],
			"order": [
				[0, "asc"]
			],
		};
	}

	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions> requestOptions
		});

		this.nfvApi
			.vnfListPOST(request)
			.subscribe(
				(res) => {
					executeCallback(<VirtualNetFunctionListResponse>res);
				}
			);


		let executeCallback = (response: VirtualNetFunctionListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: VirtualNetFunctionDTO, idx) => {
					dataTableData.push(
						[
							itm.name || '',
							itm.vendor || '',
							itm.vnfVersion || '',
							itm.vnfType || '',
							this.renderRowActions(idx, true)
						]
					);
				});
			} else {
				this.logger.error("NFV DataTable Error", data);
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
