/**
 * Created by barangu on 7/22/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../PageServices";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {ListOptions} from "../../../swagger/ListOptions";
import {VirtualNetFunctionInstanceDTO} from "../../../swagger/VirtualNetFunctionInstanceDTO";
import {NFVApi} from "../../../swagger/NFVApi";
import {VirtualNetFunctionInstanceListRequest} from "../../../swagger/VirtualNetFunctionInstanceListRequest";
import {VirtualNetFunctionInstanceListResponse} from "../../../swagger/VirtualNetFunctionInstanceListResponse";
import {VnfInstanceFailoverPopup} from "./VnfInstanceFailoverPopup";
import {Action} from "../../../commons/Action";
import {VnfActionRequest} from "../../../swagger/VnfActionRequest";
import {GenericIdRequest} from "../../../swagger/GenericIdRequest";
import {VirtualNetFunctionInstanceActionRequest} from "../../../swagger/VirtualNetFunctionInstanceActionRequest";
import {VimInfoDTO} from "../../../swagger/VimInfoDTO";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {VnfInstanceViewPopup} from "./VnfInstanceViewPopup";

@Component({
	moduleId: module.id,
	selector: 'VnfInstanceListPage',
	templateUrl: './VnfInstanceListPage.html'
})
export class VnfInstanceListPage extends BaseDataTablesPage<VirtualNetFunctionInstanceDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
	public vimList: Array<VimInfoDTO>;
	public vimName: string;
	public vim: VimInfoDTO;

	constructor(public nfvApi: NFVApi, public changeDetector: ChangeDetectorRef, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('network_function_virtualization.vnf_instance.list');
		this.isServerSide = false;
		this.setActions([]);

		this.setRowActions([
			this.createAction('@view', (itm: VirtualNetFunctionInstanceDTO) => {
				this.baseServices.sharedService.showModal(VnfInstanceViewPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),
			this.createAction('@failover', (itm: VirtualNetFunctionInstanceDTO) => {
				this.vimFinal();
				itm.vimInstanceId = this.vim.id;
				this.baseServices.sharedService.showModal(VnfInstanceFailoverPopup, itm, (result) => {
					if (result.isSuccess) this.reload();
				});
			}),
			this.createAction('@failover_cancel', (itm: VirtualNetFunctionInstanceDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.failover_cancel', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						this.vimFinal();
						let request = this.baseServices.apiHelper.genRequest({
							vnfrId: itm.vnfServerId,
							vimInstanceId: this.vim.id
						});

						this.nfvApi
							.vnfDeregisterVnfFailOverPOST(<VnfActionRequest>request)
							.subscribe(
								(res) => {
									if (this.baseServices.uiHelper.processResponse(res, this.t('messages.failover_cancel_success', {dto: itm}))) {
										this.reload();
									}
								},
								(error: any) => {
									this.baseServices.uiHelper.processResponse(error._body);
								}
							);

					}
				})
			}),
			this.createAction('@instance_start', (itm: VirtualNetFunctionInstanceDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.instance_start', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						this.vimFinal();
						let request = this.baseServices.apiHelper.genRequest({
							vimInstanceId: this.vim.id,
							vmInstanceId: itm.vnfServerId
						});

						let s =
							this.nfvApi
							.vimVmStartPOST(<VirtualNetFunctionInstanceActionRequest>request)
							.subscribe(
								(res) => {
									if (this.baseServices.uiHelper.processResponse(res, this.t('messages.instance_start_success', {dto: itm}))) {
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
			}),
			this.createAction('@instance_stop', [
				this.createAction('@instance_stop_hard', (itm: VirtualNetFunctionInstanceDTO) => {
					this.baseServices.uiHelper.confirm(this.t('messages.instance_stop', {dto: itm}), (selected: Action) => {
						if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
							this.vimFinal();
							let request = this.baseServices.apiHelper.genRequest({
								vimInstanceId: this.vim.id,
								vmInstanceId: itm.vnfServerId,
								actionType: "HARD"
							});

							this.nfvApi
								.vimVmStopPOST(<VirtualNetFunctionInstanceActionRequest>request)
								.subscribe(
									(res) => {
										if (this.baseServices.uiHelper.processResponse(res, this.t('messages.instance_stop_success', {dto: itm}))) {
											this.reload();
										}
									},
									(error: any) => {
										this.baseServices.uiHelper.processResponse(error._body);
									}
								);

						}
					})
				}),
				this.createAction('@instance_stop_soft', (itm: VirtualNetFunctionInstanceDTO) => {
					this.baseServices.uiHelper.confirm(this.t('messages.instance_stop', {dto: itm}), (selected: Action) => {
						if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
							this.vimFinal();
							let request = this.baseServices.apiHelper.genRequest({
								vimInstanceId: this.vim.id,
								vmInstanceId: itm.vnfServerId,
								actionType: "SOFT"
							});

							this.nfvApi
								.vimVmStopPOST(<VirtualNetFunctionInstanceActionRequest>request)
								.subscribe(
									(res) => {
										if (this.baseServices.uiHelper.processResponse(res, this.t('messages.instance_stop_success', {dto: itm}))) {
											this.reload();
										}
									},
									(error: any) => {
										this.baseServices.uiHelper.processResponse(error._body);
									}
								);

						}
					})
				}),
			]),
			this.createAction('@restart', [
				this.createAction('@restart_hard', (itm: VirtualNetFunctionInstanceDTO) => {
					this.baseServices.uiHelper.confirm(this.t('messages.restart_confirm', {dto: itm}), (selected: Action) => {
						if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
							let parsedRawData = JSON.parse(itm.rawData);
							let request: VirtualNetFunctionInstanceActionRequest = this.baseServices.apiHelper.genRequest({
								vmInstanceId: parsedRawData.vnfServerId,
								actionType: 'HARD',
								vimInstanceId: parsedRawData.vimId
							});

							this.nfvApi
								.vimVmRestartPOST(<VirtualNetFunctionInstanceActionRequest>request)
								.subscribe(
									(res) => {
										if (this.baseServices.uiHelper.processResponse(res, this.t('messages.restart_success', {dto: itm}))) {
											this.reload();
										}
									},
									(error: any) => {
										this.baseServices.uiHelper.processResponse(error._body);
									}
								);

						}
					})
				}),
				this.createAction('@restart_soft', (itm: VirtualNetFunctionInstanceDTO) => {
					this.baseServices.uiHelper.confirm(this.t('messages.restart_confirm', {dto: itm}), (selected: Action) => {
						if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
							let parsedRawData = JSON.parse(itm.rawData);
							let request: VirtualNetFunctionInstanceActionRequest = this.baseServices.apiHelper.genRequest({
								vmInstanceId: parsedRawData.vnfServerId,
								actionType: 'SOFT',
								vimInstanceId: parsedRawData.vimId
							});

							this.nfvApi
								.vimVmRestartPOST(<VirtualNetFunctionInstanceActionRequest>request)
								.subscribe(
									(res) => {
										if (this.baseServices.uiHelper.processResponse(res, this.t('messages.restart_success', {dto: itm}))) {
											this.reload();
										}
									},
									(error: any) => {
										this.baseServices.uiHelper.processResponse(error._body);
									}
								);

						}
					})
				}),
			]),

			this.createAction('@delete', (itm: VirtualNetFunctionInstanceDTO) => {
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						let request = this.baseServices.apiHelper.genRequest({
							id: itm.nsrId,
						});

						this.nfvApi
							.nsrDeletePOST(<GenericIdRequest>request)
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
		this.vimInit();
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

	vimInit() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'name', isAscend: true}
			}
		});

		this.nfvApi
			.vimListPOST(<GenericListRequest>request)
			.subscribe(
				(res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.vimList = res.data.list;
                        this.vimName = this.vimList[0].name;
                        this.vim = this.vimList[0];
                        this.changeDetector.detectChanges();
                        this.reload();
                    }
				}
			);
	}

	vimFinal() {
		for (let i = 0; i < this.vimList.length; i++) {
			if (this.vimList[i].name == this.vimName) {
				this.vim = this.vimList[i];
				i = this.vimList.length;
			}
		}
	}

	vimReload($event) {
		this.vimFinal();
		this.reload();
	}

	getDataTableOptions() {
		return {
			columns: [
				{title: this.ft('name'), width: '20%', orderable: false, type: 'string', name: 'vnfciHostname'},
				{title: this.ft('status'), width: '15%', orderable: false, type: 'string', name: 'state'},
				{title: this.ft('ip'), width: '15%', orderable: false, type: 'string', name: 'vmIp'},
				{title: this.ft('floatingIp'), width: '15%', orderable: false, type: 'string', name: 'floatingIp'},
				{title: this.ft('VIM'), width: '30%', orderable: false, type: 'string', name: 'vimInstanceName'},
				{
					title: this.ft('settings'),
					width: '30%',
					orderable: false,
					type: 'string',
					name: 'failOverDescription'
				},
				{
					title: $.t('common.fields.actions'),
					width: '20%',
					orderable: false,
					type: 'html',
					defaultContent: '',
					className: 'action_cell'
				}
			]
		};
	}

	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {

		if (!this.vim) return;

		if (!requestOptions.queryOptions) requestOptions.queryOptions = {operator: QUERYOP.NOOP};

		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions> requestOptions,
			vimInstanceId: this.vim.id
		});

		this.nfvApi
			.vnfSearchVnfInstanceInfoPOST(<VirtualNetFunctionInstanceListRequest>request)
			.subscribe(
				(res) => {
					executeCallback(<VirtualNetFunctionInstanceListResponse>res);
				}
			);

		let executeCallback = (response: VirtualNetFunctionInstanceListResponse) => {
			let dataTableData = [];

			if (this.baseServices.uiHelper.processResponse(response)) {

				this.currentList = response.data.list;

				response.data.list.forEach((itm: VirtualNetFunctionInstanceDTO, idx) => {
					dataTableData.push(
						[
							itm.vnfciHostname || '',
							itm.state || '',
							itm.vmIp || '',
							itm.floatingIp || '',
							itm.vimInstanceName || '',
							itm.failOverDescription ? this.t('fields.failoverIp') + itm.failOverDescription : '',
							this.renderRowActions(idx, true, (action: Action, idx: number, data: VirtualNetFunctionInstanceDTO) => {
								if (action.id.lastIndexOf("cancel") != -1) {
									return data.failOverDescription.length > 0;
								} else if (action.id.lastIndexOf("failover") != -1) {
									return data.failOverDescription.length == 0;
								}
								else if (action.id.lastIndexOf("stop") != -1) {
									return data.state == "ACTIVE";
								}
								else if (action.id.lastIndexOf("instance_start") != -1) {
									return data.state == "SHUTOFF";
								}
								return true;
							})
						]
					);
				});

			} else {
				this.logger.error('VnfInstance DataTables Error:', data);
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
