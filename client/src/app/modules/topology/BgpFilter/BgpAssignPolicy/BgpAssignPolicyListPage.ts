/**
 * Created by omeroz on 7/20/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, OnChanges} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {SdnipPolicyApi} from "../../../../swagger/SdnipPolicyApi";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {SdnipPolicyAssignmentDTO} from "../../../../swagger/SdnipPolicyAssignmentDTO";
import {SdnipPolicyAssignmentListResponse} from "../../../../swagger/SdnipPolicyAssignmentListResponse";
import {BgpAssignPolicyEditPopup} from "./BgpAssignPolicyEditPopup";

@Component({
	moduleId: module.id,
	selector: 'BgpAssignPolicyListPage',
	templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})

export class BgpAssignPolicyListPage extends BaseDataTablesPage<SdnipPolicyAssignmentDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	constructor(public sdnipPolicyApi: SdnipPolicyApi, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('bgp_filter.assign_policy.list');

		this.setRowActions([
			this.createAction('@edit', (itm: SdnipPolicyAssignmentDTO) => {
				this.baseServices.sharedService.showModal(BgpAssignPolicyEditPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),
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
					title: this.ft('resourceType'),
					width: '20%',
					orderable: true,
					type: 'string',
					name: 'resourceType',
					className: "dt-center"
				},
				{
					title: this.ft('policyType'),
					width: '20%',
					orderable: true,
					type: 'prefixList',
					name: 'policyType',
					className: "dt-center"
				},
				{
					title: this.ft('defaultRouteAction'),
					width: '20%',
					orderable: true,
					type: 'prefixList',
					name: 'defaultRouteAction',
					className: "dt-center"
				},
				{
					title: this.ft('policyList'),
					width: '20%',
					orderable: false,
					type: 'prefixList',
					name: 'policyList',
					className: "dt-center"
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
				[1, "desc"]
			]
		};
	}


	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>requestOptions
		});

		this.sdnipPolicyApi
			.sdnipPolicyAssignmentSearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(res) => {
					executeCallback(res);
				}
			);

		let executeCallback = (response: SdnipPolicyAssignmentListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: SdnipPolicyAssignmentDTO, idx) => {
					dataTableData.push(
						[
							this.renderIcon('SDNIPRESOURCETYPE', itm.resourceType),
							this.renderIcon('SDNIPPOLICYTYPE', itm.policyType),
							this.renderIcon('SDNIPROUTEACTION', itm.defaultRouteAction),
							itm.policyList && itm.policyList.list && itm.policyList.list.map(i => i.name) || '',
							this.renderRowActions(idx, true)
						]
					);
				});
			} else {
				this.logger.error("Bgp Filter Assign Policy DataTable Error", data);
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

