/**
 * Created by omeroz on 9/7/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../PageServices";
import {ListOptions} from "../../../swagger/ListOptions";
import {NFVApi} from "../../../swagger/NFVApi";
import {VimInfoDTO} from "../../../swagger/VimInfoDTO";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {ComputeStatisticsDTO} from "../../../swagger/ComputeStatisticsDTO";
import {ComputeHostStatisticListRequest} from "../../../swagger/ComputeHostStatisticListRequest";
import {ComputeHostStatisticListResponse} from "../../../swagger/ComputeHostStatisticListResponse";

@Component({
	moduleId: module.id,
	selector: 'VimStatistics',
	templateUrl: './VimStatistics.html'
})
export class VimStatistics extends BaseDataTablesPage<ComputeStatisticsDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
	public vimList: Array<VimInfoDTO>;
	public selectedVim: VimInfoDTO = <VimInfoDTO>{};

	constructor(public nfvApi: NFVApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('network_function_virtualization.statistics');
		this.isServerSide = false;
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngOnInit() {
		this.vimInit();
		super.ngOnInit();
	}

	ngAfterViewInit() {
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}


	vimInit() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'name', isAscend: true}
			}
		});

		let s =
			this.nfvApi
				.vimListPOST(<GenericListRequest>request)
				.subscribe(
					(res) => {
                        if (this.baseServices.uiHelper.processResponse(res)) {
                            this.vimList = res.data.list;
                            this.selectedVim = this.vimList[0];
                            this.reload();
                        }
					}
				);
		this.subscriptions.push(s);
	}

	vimChanged(vim: VimInfoDTO) {
		this.selectedVim = vim;
		this.reload();
	}

	getDataTableOptions() {
		return {
			columns: [
				{title: this.ft('computeHostIp'), width: '10%', orderable: true, type: 'string', name: 'computeHostIp'},
				{title: this.ft('memory'), width: '10%', orderable: true, type: 'string', name: 'memory'},
				{title: this.ft('disk'), width: '10%', orderable: true, type: 'string', name: 'disk'},
				{title: this.ft('localgb'), width: '10%', orderable: true, type: 'string', name: 'localgb'},
				{title: this.ft('runningTime'), width: '10%', orderable: true, type: 'string', name: 'runningTime'},
				{title: this.ft('pastLoad'), width: '10%', orderable: true, type: 'string', name: 'pastLoad'},
				{title: this.ft('loggedUsers'), width: '10%', orderable: true, type: 'string', name: 'loggedUsers'},
				{
					title: this.ft('currentNodeTime'),
					width: '10%',
					orderable: true,
					type: 'string',
					name: 'currentNodeTime'
				},
				{title: this.ft('vcpus'), width: '10%', orderable: true, type: 'string', name: 'vcpus'},
				{title: this.ft('runningVms'), width: '10%', orderable: true, type: 'string', name: 'runningVms'},
			]
		};
	}

	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		if (!this.selectedVim.id) return;

		let request: ComputeHostStatisticListRequest = this.baseServices.apiHelper.genRequest({
			options: <ListOptions> requestOptions,
			vimInstanceId: this.selectedVim.id
		});

		this.nfvApi
			.vimGetAllComputeHostStatisticPOST(<ComputeHostStatisticListRequest>request)
			.subscribe(
				(res) => {
					executeCallback(<ComputeHostStatisticListResponse>res);
				}
			);

		let executeCallback = (response: ComputeHostStatisticListResponse) => {
			let dataTableData = [];

			if (this.baseServices.uiHelper.processResponse(response)) {

				this.currentList = response.data.computeHostStatisticList;

				response.data.computeHostStatisticList.forEach((itm: ComputeStatisticsDTO, idx) => {
					dataTableData.push(
						[
							itm.computeHostIp || '',
							itm.freeRamMb + ' / ' + itm.memoryMbUsed + ' / ' + itm.memoryMb,
							itm.freeDiskGb + ' / ' + itm.diskAvailableLeast,
							itm.localGbUsed + ' / ' + itm.localGb,
							itm.uptimeDetail.runningTime || '',
							itm.uptimeDetail.past1MinLoad + ' / ' + itm.uptimeDetail.past5MinLoad + ' / ' + itm.uptimeDetail.past15MinLoad,
							itm.uptimeDetail.loggedUsers || '',
							itm.uptimeDetail.currentNodeTime || '',
							itm.vcpusUsed + ' / ' + itm.vcpus,
							itm.runningVms || ''
						]
					);
				});

			} else {
				this.logger.error('Vim Statistics DataTable Error:', data);
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
