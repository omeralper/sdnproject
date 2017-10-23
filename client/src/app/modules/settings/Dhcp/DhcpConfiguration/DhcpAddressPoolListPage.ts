/**
 * Created by omeroz on 5/24/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, Input} from "@angular/core";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {PageServices} from "../../../PageServices";
import {DhcpApi} from "../../../../swagger/DhcpApi";
import {DhcpAddressPoolEditPopup} from "./DhcpAddressPoolEditPopup";
import {DhcpIpPoolListResponse} from "../../../../swagger/DhcpIpPoolListResponse";
import {DhcpIpPoolDTO} from "../../../../swagger/DhcpIpPoolDTO";
import {AbstractSearchOptions} from "../../../../swagger/AbstractSearchOptions";
import {QUERYOP} from "../../../../swagger/QUERYOP";
import {QueryOptions} from "../../../../swagger/QueryOptions";
import {WanDomainDTO} from "../../../../swagger/WanDomainDTO";

@Component({
	moduleId: module.id,
	selector: 'DhcpAddressPool',
	templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
	inputs: ["domain"]
})
export class DhcpAddressPoolListPage extends BaseDataTablesPage<DhcpIpPoolDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
	domain: WanDomainDTO = <WanDomainDTO>{};

	constructor(public dhcpApi: DhcpApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('settings.dhcp.configuration.list');
		this.setActions([
			this.createAction('@create', () => {
				this.baseServices.sharedService.showModal(DhcpAddressPoolEditPopup, {
						domainId: this.domain.id,
						subnetMask: '255.255.255.0'
					},
					(result) => {
						if (result.isSuccess) this.reload();
					});
			})
		]);
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
		if (e.domain) {
			this.reload();
		}
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
				{title: this.ft('ipAddress'), width: '40%', orderable: true, type: 'string', name: 'ipAddress'},
				{title: this.ft('subnetMask'), width: '40%', orderable: true, type: 'string', name: 'subnetMask'},
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
			],
			extraFields: []
		};
	}

	makeDataTableRequest(requestOptions: AbstractSearchOptions, data: any, callback: (data: any) => void) {

		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>$.extend(requestOptions, {
				queryOptions: <QueryOptions> {
					operator: QUERYOP.VALUE,
					fieldValue: this.domain.id,
					fieldName: "domainId"
				}
			})
		});

		this.dhcpApi
			.dhcpcentralwanDhcpCentalWanWebIpPoolSearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(res) => {
					executeCallback(<DhcpIpPoolListResponse>res);
				}
			);


		let executeCallback = (response: DhcpIpPoolListResponse) => {
			let dataTableData = [];

			if (this.baseServices.uiHelper.processResponse(response)) {

				this.currentList = response.data.list;

				response.data.list.forEach((itm: DhcpIpPoolDTO, idx) => {
					dataTableData.push(
						[
							itm.ipAddress || '',
							itm.subnetMask || ''
						]
					);
				});
			} else {
				this.logger.error('Dhcp Ip Pool DataTables Error:', data);
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
