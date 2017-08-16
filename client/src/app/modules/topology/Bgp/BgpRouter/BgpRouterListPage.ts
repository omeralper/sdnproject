/**
 * Created by omeroz on 5/24/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, OnChanges, Output, EventEmitter} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SdnipRouterDTO} from "../../../../swagger/SdnipRouterDTO";
import {DeleteOptions} from "../../../../swagger/DeleteOptions";
import {Action} from "../../../../commons/Action";
import {BgpRouterEditPopup} from "./BgpRouterEditPopup";
import {GenericDeleteRequest} from "../../../../swagger/GenericDeleteRequest";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {SdnipApi} from "../../../../swagger/SdnipApi";
import {AbstractSearchOptions} from "../../../../swagger/AbstractSearchOptions";
import {SdnipRouterListResponse} from "../../../../swagger/SdnipRouterListResponse";

@Component({
	moduleId: module.id,
	selector: 'BgpRouterListPage',
	templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})

export class BgpRouterListPage extends BaseDataTablesPage<SdnipRouterDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
	@Output() reloadOnUpdate = new EventEmitter<any>();

	constructor(public sdnipApi: SdnipApi, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('bgp_management.router.list');

		this.setActions([
			this.createAction('@create', () => {
				this.baseServices.sharedService.showModal(BgpRouterEditPopup, {
						bgpPort: 179
					},
					(result) => {
						if (result.isSuccess){
							this.reload();
							this.reloadOnUpdate.emit();
						}
					});
			})
		]);

		this.setRowActions([
			this.createAction('@edit', (itm: SdnipRouterDTO) => {
				this.baseServices.sharedService.showModal(BgpRouterEditPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),

			this.createAction('@delete', (itm: SdnipRouterDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						let request = this.baseServices.apiHelper.genRequest({
							options: <DeleteOptions> {
								id: itm.id,
								isReturnModel: false
							}
						});

						this.sdnipApi
							.sdnipRouterDeletePOST(<GenericDeleteRequest>request)
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
					title: this.ft('type'),
					width: '10%',
					orderable: true,
					type: 'string',
					name: 'type',
					className: "dt-center"
				},
				{
					title: this.ft('name'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'name',
					className: "dt-center"
				},
				{
					title: this.ft('asNumber'),
					width: '10%',
					orderable: true,
					type: 'string',
					name: 'asNumber',
					className: "dt-center"
				},
				{
					title: this.ft('deviceId'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'deviceId',
					className: "dt-center"
				},
				{
					title: this.ft('ip'),
					width: '10%',
					orderable: true,
					type: 'string',
					name: 'ip',
					className: "dt-center"
				},
				{
					title: this.ft('controlPlaneIp'),
					width: '10%',
					orderable: true,
					type: 'string',
					name: 'controlPlaneIp',
					className: "dt-center"
				},
				{
					title: this.ft('mac'),
					width: '10%',
					orderable: true,
					type: 'string',
					name: 'mac',
					className: "dt-center"
				},
				{
					title: this.ft('vlanId'),
					width: '10%',
					orderable: true,
					type: 'string',
					name: 'vlanId',
					className: "dt-center"
				},
				{
					title: $.t('common.fields.actions'),
					width: '10%',
					orderable: false,
					type: 'html',
					defaultContent: '',
					className: 'action_cell'
				},
				{visible:false, name:'bgpPassword'},
				{visible:false, name:'bgpPort'},
				{visible:false, name:'port'}
			],
			"order": [
				[2, "desc"]
			]
		};
	}


	makeDataTableRequest(requestOptions: AbstractSearchOptions, data: any, callback: (data: any) => void) {

		let request = this.baseServices.apiHelper.genRequest({
			options: requestOptions
		});

		this.sdnipApi
			.sdnipRouterSearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(res) => {
					executeCallback(res);
				}
			);

		let executeCallback = (response: SdnipRouterListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list && response.data.list.forEach((itm: SdnipRouterDTO, idx) => {
					dataTableData.push(
						[
							this.renderIcon('ROUTERTYPE', itm.type),
							itm.name || '',
							itm.asNumber || '',
							itm.deviceId + ':' + (itm.port || '') || '',
							(itm.ip || '') ,
							itm.controlPlaneIp || '',
							itm.mac || '',
							itm.vlanId || '',
							this.renderRowActions(idx, true),
							itm.bgpPassword || '',
							itm.bgpPort || '',
							itm.port ||''
						]
					);
				});

			} else {
				this.logger.error("Bgp Router DataTable Error", data);
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

