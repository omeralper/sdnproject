/**
 * Created by omeroz on 11.01.2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BaseDataTablesPage} from "../../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {GenericListRequest} from "../../../../../swagger/GenericListRequest";
import {PageServices} from "../../../../PageServices";
import {Action} from "../../../../../commons/Action";
import {DhcpScopeDTO} from "../../../../../swagger/DhcpScopeDTO";
import {DhcpApi} from "../../../../../swagger/DhcpApi";
import {DhcpScopeListResponse} from "../../../../../swagger/DhcpScopeListResponse";
import {DhcpEdit} from "../Edit/DhcpEdit";
import {GenericDeleteRequest} from "../../../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../../../swagger/DeleteOptions";
import {DhcpAssignedAddressesPopup} from "../DhcpAssignedAddressesPopup";

@Component({
	moduleId: module.id,
	selector: 'DhcpList',
	templateUrl: '../../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class DhcpList extends BaseDataTablesPage<DhcpScopeDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	constructor(public dhcpApi: DhcpApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('settings.dhcp.list');
		this.setActions([
			this.createAction('@create_dhcp', () => {
				this.baseServices.sharedService.showModal(DhcpEdit, {},
					(result) => {
						this.reload();
					});
			})
		]);

		this.setRowActions([
			this.createAction('@edit_dhcp', (itm: DhcpScopeDTO) => {
				this.baseServices.sharedService.showModal(DhcpEdit, itm, (result) => {
					this.reload();
				});
			}),
			this.createAction('@assigned', (itm: DhcpScopeDTO) => {
				this.baseServices.sharedService.showModal(DhcpAssignedAddressesPopup, itm, (result) => {
					this.reload();
				});
			}),
			this.createAction('@delete_dhcp', (itm: DhcpScopeDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						let request: GenericDeleteRequest = <GenericDeleteRequest>this.baseServices.apiHelper.genRequest({
							options: <DeleteOptions> {
								id: itm.id,
								isReturnModel: false
							}
						});

						let s =
							this.dhcpApi
								.dhcpWebScopeDeletePOST(request)
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
	}

	ngOnInit() {
		super.ngOnInit();
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
				{title: this.ft('name'), width: '10%', orderable: true, type: 'string', name: 'name'},
				{visible: false, type: 'string', name: 'domainServers'},
				{visible: false, type: 'string', name: 'routerAddresses'},
				{title: this.ft('networkId'), width: '10%', orderable: true, type: 'string', name: 'networkId'},
				{title: this.ft('vlanId'), width: '15%', orderable: true, type: 'string', name: 'vlanId'},
				{title: this.ft('ipVersionType'), width: '15%', orderable: true, type: 'string', name: 'ipVersionType'},
				{
					title: this.ft('dhcpIpRangeDtos'),
					width: '20%',
					orderable: true,
					type: 'string',
					name: 'dhcpIpRangeDtos'
				},
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
		let request = this.baseServices.apiHelper.genRequest({
			options: requestOptions
		});

		this.dhcpApi
			.dhcpWebScopeListPOST(<GenericListRequest>request)
			.subscribe(
				(res) => {
					executeCallback(<DhcpScopeListResponse>res);
				}
			);


		let executeCallback = (response: DhcpScopeListResponse) => {
			let dataTableData = [];

			if (this.baseServices.uiHelper.processResponse(response)) {

				this.currentList = response.data.list;

				response.data.list.forEach((itm: DhcpScopeDTO, idx) => {
					dataTableData.push(
						[
							itm.name,
							itm.domainServers || '',
							itm.routerAddresses ? itm.routerAddresses.split(',').join(', ') : '',
							itm.networkId || '',
							itm.vlanId == -1 ? '' : itm.vlanId,
							itm.ipVersionType,
							itm.dhcpIpRangeDtos ? itm.dhcpIpRangeDtos.map((range, index) => {
								return ((index != 0 && index % 5 == 0) ? "</br>" : "") + range.ipStart + "-" + range.ipEnd
							}).join(", ") : '',
							this.renderRowActions(idx, true),
						]
					);
				});

			} else {
				this.logger.error('NacUserList DataTables Error:', data);
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
