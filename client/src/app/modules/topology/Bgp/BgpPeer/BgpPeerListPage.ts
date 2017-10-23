/**
 * Created by omeroz on 5/24/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, OnChanges} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {DeleteOptions} from "../../../../swagger/DeleteOptions";
import {Action} from "../../../../commons/Action";
import {GenericDeleteRequest} from "../../../../swagger/GenericDeleteRequest";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {BgpPeerEditPopup} from "./BgpPeerEditPopup";
import {NeighborRelationSearchResponse} from "../../../../swagger/NeighborRelationSearchResponse";
import {NeighborRelationDTO} from "../../../../swagger/NeighborRelationDTO";
import {PeerRelationStatusListPage} from "./PeerRelationStatusListPage";
import {SdnipApi} from "../../../../swagger/SdnipApi";

@Component({
	moduleId: module.id,
	selector: 'BgpPeerListPage',
	templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})

export class BgpPeerListPage extends BaseDataTablesPage<NeighborRelationDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


	constructor(public sdnipApi: SdnipApi, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('bgp_management.peer.list');

		this.setActions([
			this.createAction('@create', () => {
				this.baseServices.sharedService.showModal(BgpPeerEditPopup, {
						peerList: [],
						speaker:{}
					},
					(result) => {
						if (result.isSuccess) this.reload();
					});
			})
		]);

		this.setRowActions([
			this.createAction('@edit', (itm: NeighborRelationDTO) => {
				this.baseServices.sharedService.showModal(BgpPeerEditPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),
			this.createAction('@relation', (itm: NeighborRelationDTO) => {
				this.baseServices.sharedService.showModal(PeerRelationStatusListPage, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),
			this.createAction('@delete', (itm: NeighborRelationDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						let request = this.baseServices.apiHelper.genRequest({
							options: <DeleteOptions> {
								id: itm.id,
								isReturnModel: false
							}
						});

						this.sdnipApi
							.sdnipRouterNeighborDeletePOST(<GenericDeleteRequest>request)
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
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'speaker',
					className: "dt-center"
				},
				{
					title: this.ft('peerList'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'peerList',
					className: "dt-center"
				},
				{
					title: this.ft('connectRetry'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'connectRetry',
					className: "dt-center"
				},
				{
					title: this.ft('holdTime'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'holdTime',
					className: "dt-center"
				},
				{
					title: this.ft('keepaliveInterval'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'keepaliveInterval',
					className: "dt-center"
				},
				{
					title: this.ft('minimumAdvertisementInterval'),
					width: '15%',
					orderable: true,
					type: 'string',
					name: 'minimumAdvertisementInterval',
					className: "dt-center"
				},
				{
					title: $.t('common.fields.actions'),
					width: '15%',
					orderable: false,
					type: 'html',
					defaultContent: '',
					className: 'action_cell'
				}
			],
			"order": [
				[2, "desc"]
			]
		};
	}


	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>requestOptions
		});

		this.sdnipApi
			.sdnipRouterNeighborSearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(res) => {
					executeCallback(res);
				}
			);

		let executeCallback = (response: NeighborRelationSearchResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: NeighborRelationDTO, idx) => {
					dataTableData.push(
						[
							itm.speaker.name,
							itm.peerList.map(p => p.name + ' (' + p.asNumber + ')' ).join(',</br>'),
							itm.connectRetry || "",
							itm.holdTime || "",
							itm.keepaliveInterval || "",
							itm.minimumAdvertisementInterval || "",
							this.renderRowActions(idx, true),
						]
					);
				});

			} else {
				this.logger.error("Bgp Peer DataTable Error", data);
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

