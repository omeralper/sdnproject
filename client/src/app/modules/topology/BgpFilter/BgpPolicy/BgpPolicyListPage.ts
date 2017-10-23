/**
 * Created by omeroz on 7/20/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, OnChanges} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {SdnipPolicyApi} from "../../../../swagger/SdnipPolicyApi";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {SdnipPolicyDTO} from "../../../../swagger/SdnipPolicyDTO";
import {SdnipPolicyListResponse} from "../../../../swagger/SdnipPolicyListResponse";
import {BgpPolicyEditPopup} from "./BgpPolicyEditPopup";
import {Action} from "../../../../commons/Action";
import {DeleteOptions} from "../../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../../swagger/GenericDeleteRequest";
import {SdnipStatementDTO} from "../../../../swagger/SdnipStatementDTO";

@Component({
	moduleId: module.id,
	selector: 'BgpPolicyListPage',
	templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})

export class BgpPolicyListPage extends BaseDataTablesPage<SdnipPolicyDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	constructor(public sdnipPolicyApi: SdnipPolicyApi, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('bgp_filter.policy.list');
		this.setActions([
			this.createAction('@create', () => {
				this.baseServices.sharedService.showModal(BgpPolicyEditPopup, <SdnipPolicyDTO>{},
					(result) => {
						if (result.isSuccess){
							this.reload();
						}
					});
			})
		]);

		this.setRowActions([
			this.createAction('@edit', (itm: SdnipPolicyDTO) => {
				this.baseServices.sharedService.showModal(BgpPolicyEditPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),

			this.createAction('@delete', (itm: SdnipPolicyDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						let request = this.baseServices.apiHelper.genRequest({
							options: <DeleteOptions> {
								id: itm.id,
								isReturnModel: false
							}
						});

						this.sdnipPolicyApi
							.sdnipPolicyDeletePOST(<GenericDeleteRequest>request)
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
				{title: this.ft('name'), width: '45%', orderable: true, type: 'string', name: 'name', className: "dt-center"},
				{title: this.ft('statementList'), width: '45%', orderable: false, type: 'string', className: "dt-center"},
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
				[0, "desc"]
			]
		};
	}


	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>requestOptions
		});

		this.sdnipPolicyApi
			.sdnipPolicySearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(res) => {
					executeCallback(res);
				}
			);

		let executeCallback = (response: SdnipPolicyListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: SdnipPolicyDTO, idx) => {
					dataTableData.push(
						[
							itm.name || '',
							itm.statementList && itm.statementList.list && itm.statementList.list.map(s => s.name) || '',
							this.renderRowActions(idx, true),
						]
					);
				});
			} else {
				this.logger.error("Bgp Filter PolicyDataTable Error", data);
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

