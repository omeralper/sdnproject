/**
 * Created by omeroz on 5/24/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, OnChanges} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {SdnipRouteDTO} from "../../../../swagger/SdnipRouteDTO";
import {SdnipApi} from "../../../../swagger/SdnipApi";
import {SdnipRouteListResponse} from "../../../../swagger/SdnipRouteListResponse";
import {BgpRouteEditPopup} from "./BgpRouteEditPopup";
import {Action} from "../../../../commons/Action";
import {DeleteOptions} from "../../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../../swagger/GenericDeleteRequest";

@Component({
	moduleId: module.id,
	selector: 'BgpRouteListPage',
	templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})

export class BgpRouteListPage extends BaseDataTablesPage<SdnipRouteDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	constructor(public sdnipApi: SdnipApi, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('bgp_management.route.list');

		this.setActions([
			this.createAction('@create', () => {
				this.baseServices.sharedService.showModal(BgpRouteEditPopup, {},
					(result) => {
						if (result.isSuccess) this.reload();
					});
			})
		]);

		this.setRowActions([
			this.createAction('@delete', (itm: SdnipRouteDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						let request = this.baseServices.apiHelper.genRequest({
							options: <DeleteOptions> {
								id: itm.id,
								isReturnModel: false
							}
						});

						this.sdnipApi
							.sdnipRouterRouteDeletePOST(<GenericDeleteRequest>request)
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

	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngAfterViewInit() {
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	getDataTableOptions() {
		return {
			columns: [
				{
					title: this.ft('name'),
					width: '25%',
					orderable: true,
					type: 'string',
					name: 'peer',
					className: "dt-center"
				},
				{
					title: this.ft('prefix'),
					width: '25%',
					orderable: true,
					type: 'string',
					name: 'prefix',
					className: "dt-center"
				},
				{title: this.ft('nextHop'), width: '20%', orderable: true, type: 'string', name: 'nextHop'},
				{title: this.ft('origin'), width: '20%', orderable: true, type: 'string', name: 'origin'},
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
				[1, "desc"]
			]
		};
	}


	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>requestOptions
		});

		this.sdnipApi
			.sdnipRouterRouteSearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(res) => {
					executeCallback(res);
				}
			);

		let executeCallback = (response: SdnipRouteListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: SdnipRouteDTO, idx) => {
					dataTableData.push(
						[
							itm.peer && itm.peer.name || '',
							itm.prefix || "",
							itm.nextHop || "",
							itm.origin || "",
							this.renderRowActions(idx, true, (action, idx2, data2: SdnipRouteDTO) => {
								return data2.annonced && action.id.lastIndexOf("delete") != -1;
							})
						]
					);
				});

			} else {
				this.logger.error("Bgp Route DataTable Error", data);
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

