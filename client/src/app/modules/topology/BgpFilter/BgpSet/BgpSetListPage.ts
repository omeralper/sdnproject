/**
 * Created by omeroz on 7/20/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, OnChanges} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {SdnipDefinedSetDTO} from "../../../../swagger/SdnipDefinedSetDTO";
import {SdnipPolicyApi} from "../../../../swagger/SdnipPolicyApi";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {SdnipDefinedSetListResponse} from "../../../../swagger/SdnipDefinedSetListResponse";
import {Action} from "../../../../commons/Action";
import {DeleteOptions} from "../../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../../swagger/GenericDeleteRequest";
import {BgpSetEditPagePopup} from "./BgpSetEditPagePopup";

@Component({
	moduleId: module.id,
	selector: 'BgpSetListPage',
	templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})

export class BgpSetListPage extends BaseDataTablesPage<SdnipDefinedSetDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	constructor(public sdnipPolicyApi: SdnipPolicyApi, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('bgp_filter.set.list');

		this.setActions([
			this.createAction('@create', () => {
				this.baseServices.sharedService.showModal(BgpSetEditPagePopup, {
						list: {
							list: []
						}
					},
					(result) => {
						if (result.isSuccess) {
							this.reload();
						}
					});
			})
		]);

		this.setRowActions([
			this.createAction('@edit', (itm: SdnipDefinedSetDTO) => {
				this.baseServices.sharedService.showModal(BgpSetEditPagePopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),

			this.createAction('@delete', (itm: SdnipDefinedSetDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						let request = this.baseServices.apiHelper.genRequest({
							options: <DeleteOptions> {
								id: itm.id,
								isReturnModel: false
							}
						});

						this.sdnipPolicyApi
							.sdnipPolicyDefinedSetDeletePOST(<GenericDeleteRequest>request)
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
					title: this.ft('definedSetType'),
					width: '25%',
					orderable: true,
					type: 'string',
					name: 'definedSetType',
					className: "dt-center"
				},
				{
					title: this.ft('name'),
					width: '25%',
					orderable: true,
					type: 'string',
					name: 'name',
					className: "dt-center"
				},
				{title: this.ft('list'), width: '20%', orderable: false, type: 'string', name: 'list'},
				{title: this.ft('prefixList'), width: '20%', orderable: false, type: 'string', name: 'prefixList'},
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

		this.sdnipPolicyApi
			.sdnipPolicyDefinedSetSearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(res) => {
					executeCallback(res);
				}
			);

		let executeCallback = (response: SdnipDefinedSetListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: SdnipDefinedSetDTO, idx) => {
					dataTableData.push(
						[
							this.renderIcon('SDNIPDEFINEDSETTYPE',itm.definedSetType),
							itm.name || '',
							itm.list && itm.list.list && itm.list.list.map(i => i.item) || '',
							itm.prefixList && itm.prefixList.list && itm.prefixList.list.map(i => i.minMaskLength + '-' + i.maxMaskLength + '-' + i.ipPrefix) || '',
							this.renderRowActions(idx, true),
						]
					);
				});
			} else {
				this.logger.error("Bgp Filter Defined Set DataTable Error", data);
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

