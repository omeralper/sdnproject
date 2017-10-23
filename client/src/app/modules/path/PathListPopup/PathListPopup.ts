/**
 * Created by yildirayme on 09.05.2016.
 */

import {Component, ElementRef, OnInit, AfterViewInit, OnDestroy} from "@angular/core";
import {BasePopupDataTablesPage} from "../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {MODAL_SIZE} from "../../ModalComponent";
import {PathsApi} from "../../../swagger/PathsApi";
import {PathListRequest} from "../../../swagger/PathListRequest";
import {PathDTO, PathDTODef} from "../../../swagger/PathDTO";
import {PathListOptions} from "../../../swagger/PathListOptions";
import {PathListResponse} from "../../../swagger/PathListResponse";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {PATHSTATE} from "../../../swagger/PATHSTATE";
import {SharedService} from "../../SharedService";
import {SortOptions} from "../../../swagger/SortOptions";
import {ProactivePathPolicyDTO} from "../../../swagger/ProactivePathPolicyDTO";
import {DIALOG_TYPES} from "../../UIHelper";
import {TestPacketPopup} from "../TestPacketPopup/TestPacketPopup";


// Root Component
@Component({
	moduleId: module.id,
	selector: 'PathListPopup',
	templateUrl: '../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html',
	providers: [PathsApi]
})
export class PathListPopup extends BasePopupDataTablesPage<any, PathDTO> implements OnInit, AfterViewInit, OnDestroy {
	public loadingInPorgress;
	public refreshTimeout;

	constructor(public pathsApi: PathsApi, baseServices: PageServices, elementRef: ElementRef, public sharedService: SharedService) {
		super(baseServices, elementRef);
		this.modalSize = MODAL_SIZE.FULL;
		this.isServerSide = false;//no server-side data request

		//populate i18n fields but exclude title, because we are going to define it here
		this.setI18NKey('paths.list');

		// this.setPopupActions([
		//     this.createAction('@create_path', ()=> {
		//         this.logger.debug('Add new path clicked');
		//         this.close(true,<ReactivePathListReturn>{
		//             command: REACTIVE_PATH_LIST_COMMAND.PATH_CREATE
		//         });
		//     })
		// ]);

		this.setRowActions([
			this.createAction('@view_path', (itm: PathDTO) => {
				this.logger.debug('View path ' + itm.id + ' action clicked');

				if (is.existy(itm.links) && is.not.empty(itm.links)) {
					this.close(true, <ReactivePathListReturn>{
						command: REACTIVE_PATH_LIST_COMMAND.PATH_VIEW,
						pathInfo: itm
					});
				} else {
					//this.baseServices.uiHelper.notify(this.t('network_vis.topology.messages.no_path_found'), DIALOG_TYPES.WARNING);
					this.baseServices.uiHelper.notify(this.i18n.t('paths.view.messages.no_path_links'), DIALOG_TYPES.WARNING);
				}

			}),
			this.createAction('@test_pack', (itm: PathDTO) => {
				this.logger.debug('Test pack ' + itm.id + ' action clicked');

				if (is.existy(itm.links) && is.not.empty(itm.links)) {
					this.baseServices.sharedService.showModal(TestPacketPopup, itm,
						(result) => {
							if (result.isSuccess) this.reload();
						});
					this.close(true);
				} else {
					this.baseServices.uiHelper.notify(this.i18n.t('paths.view.messages.no_path_links'), DIALOG_TYPES.WARNING);
				}
			}),
			//this.createAction('@edit_path', (itm:ProactivePathPolicyDTO)=> {
			//     this.logger.debug('Edit path ' + itm.id + ' action clicked');
			//     this.close(true,<ReactivePathListReturn>{
			//         command: REACTIVE_PATH_LIST_COMMAND.PATH_EDIT,
			//         pathInfo: itm
			//     });
			// }),
			this.createAction('@delete_path', (itm: PathDTO) => {
				this.logger.debug('Delete path ' + itm.id + ' action clicked');
				this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
					if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {

						let request = this.baseServices.apiHelper.genRequest({
							options: <DeleteOptions> {
								id: itm.id,
								isReturnModel: false
							}
						});

						let s =
							this.pathsApi
								.pathDeletePOST(<GenericDeleteRequest>request)
								.subscribe(
									(res) => {
										if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
											this.reload();
											try {
												//this.sharedService.clearAllPathsRequestEvent.next(true);
											} catch (e) {
												this.logger.error(e);
											}
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
		this.logger.info('something changed', e);
	}

	ngOnInit() {
		super.ngOnInit();
		this.startRefreshOperation();
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			//Code here
			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		clearInterval(this.refreshTimeout);
	}

	getDataTableOptions() {
		var dataset = this.prepateData();

		return {
			columns: [
				{
					title: this.ft('state'),
					width: '5%',
					orderable: true,
					type: 'string',
					className: 'dt-center',
					name: 'state'
				},
				//{title: this.ft('source'), width: '30%', orderable: true, type: 'string', className: 'dt-center', name: 'srcHostId,srcDeviceId,srcPortNumber'},
				//{title: this.ft('dest'), width: '30%', orderable: true, type: 'string', className: 'dt-center', name: 'dstHostId,dstDeviceId,dstPortNumber'},

				{
					title: this.ft('protocol'),
					width: '5%',
					orderable: true,
					type: 'string',
					className: 'dt-center',
					name: 'protocol'
				},

				{
					title: this.ft('srcDeviceId'),
					width: '15%',
					orderable: true,
					type: 'string',
					className: 'dt-center',
					name: 'srcDeviceId'
				},
				{
					title: this.ft('srcHostId'),
					width: '15%',
					orderable: true,
					type: 'string',
					className: 'dt-center',
					name: 'srcHostId'
				},
				{
					title: this.ft('srcPort'),
					width: '8%',
					orderable: true,
					type: 'number',
					className: 'dt-center',
					name: 'srcPort'
				},

				{
					title: this.ft('dstDeviceId'),
					width: '15%',
					orderable: true,
					type: 'string',
					className: 'dt-center',
					name: 'dstDeviceId'
				},
				{
					title: this.ft('dstHostId'),
					width: '15%',
					orderable: true,
					type: 'string',
					className: 'dt-center',
					name: 'dstHostId'
				},
				{
					title: this.ft('dstPort'),
					width: '8%',
					orderable: true,
					type: 'number',
					className: 'dt-center',
					name: 'dstPort'
				},

				{
					title: this.ft('links_short'),
					tooltip: this.ft('links'),
					width: '4%',
					orderable: true,
					type: 'number',
					className: 'dt-center',
					name: 'links'
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
			order: [
				[0, "asc"]
			], // set first column as a default sort by asc
			searching: true,
			serverSide: false,
			data: dataset
		};
	}

	// makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {
	//     //debugger;
	//     let request:any;
	//
	//     if (requestOptions.queryOptions) {
	//         /*//use Search function
	//          request = this.baseServices.apiHelper.genRequest(<PathSearchRequest>{
	//          options: <PathSearchOptions> $.extend(requestOptions, {
	//          data: <PathDTO> {
	//
	//          },
	//          })
	//          });
	//
	//          this.pathsApi
	//          .pathSearchPOST(<PathSearchRequest>request)
	//          .subscribe(
	//          (res) => {
	//          executeCallback(<FlowListResponse>res);
	//          }
	//          );
	//          */
	//
	//         delete requestOptions.queryOptions;
	//     }
	//     //else {
	//     //use list function
	//
	//     request = this.baseServices.apiHelper.genRequest(<PathListRequest>{
	//         options: <PathListOptions> $.extend(requestOptions, {
	//             data: <PathDTO> {
	//                 version: 1,
	//                 revision: 1,
	//                 timestamp: this.baseServices.utils.genTimestamp(),
	//                 topologyType: this.data.topologyType,
	//                 topologyId: this.data.topologyId
	//             }
	//         })
	//     });
	//
	//     this.pathsApi
	//         .pathListPOST(<PathListRequest>request)
	//         .subscribe(
	//             (res) => {
	//                 executeCallback(<PathListResponse>res);
	//             },
	//             (error:any) => {
	//                 executeCallback(<PathListResponse>JSON.parse(error._body));
	//             }
	//         )
	//     //}
	//
	//     this.logger.debug("Request:", request);
	//
	//     let executeCallback = (response:PathListResponse) => {
	//         let dataTableData = [];
	//
	//         if (this.baseServices.uiHelper.processResponse(response)) {
	//
	//             this.currentList = response.data.list;
	//
	//             //let appIDList = ["Rest", "CLI", "OVSDB"];
	//
	//             response.data.list.forEach((itm:PathDTO, idx)=> {
	//                 dataTableData.push(
	//                     [
	//                         //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
	//                         this.renderIcon("PATHSTATE",itm.state),
	//                         this.formatHost(itm.srcHostId, itm.srcDeviceId,itm.srcPortNumber),
	//                         this.formatHost(itm.dstHostId, itm.dstDeviceId,itm.dstPortNumber),
	//                         (itm.links ? itm.links.length : '-'),
	//                         this.renderRowActions(idx, true,(action:Action,idx:number,data:PathDTO)=>{
	//                             if (action.id.lastIndexOf("view_path")!=-1) {
	//                                 return data.state == PATHSTATE.INSTALLED;
	//                             }
	//                             return true;
	//                         }),
	//                         itm.version,
	//                         itm.revision
	//                     ]
	//                 );
	//             });
	//
	//         } else {
	//             this.logger.error("Path List DateTable Error", data);
	//         }
	//         callback({
	//             draw: data.draw,
	//             recordsTotal: response.data ? response.data.totalItems : [] || dataTableData.length,
	//             recordsFiltered: response.data ? response.data.totalItems : [] || dataTableData.length,
	//             data: dataTableData
	//         });
	//     }
	// }

	reload(reset: boolean = false) {
		this.logger.debug('Reload Path List!');
		this.loadPathList();
	}

	public startRefreshOperation() {
		this.loadingInPorgress = false;
		this.refreshTimeout = setInterval(() => {
			this.loadPathList();
		}, 10000);
		this.loadPathList();
	}

	public loadPathList() {
		if (!this.loadingInPorgress) {
			this.loadingInPorgress = true;

			let request = this.baseServices.apiHelper.genRequest(<PathListRequest>{
				options: <PathListOptions> {
					startPage: 0,
					pageSize: 0,
					sortOptions: <SortOptions>{
						fieldName: 'id',
						isAscend: true,
					},
					fields: Object.keys(PathDTODef.fields),
					data: <PathDTO> {
						version: 1,
						revision: 1,
						timestamp: this.baseServices.utils.genTimestamp(),
						topologyType: this.data.topologyType,
						topologyId: this.data.topologyId
					}
				}
			});

			this.pathsApi
				.pathListPOST(<PathListRequest>request)
				.finally(() => {
					this.loadingInPorgress = false;
				})
				.subscribe(
					(res: PathListResponse) => {
						try {
							if (this.baseServices.uiHelper.processResponse(res)) {
								this.currentList = res.data.list;
								this.$dataTableRef.clear();
								this.$dataTableRef.rows.add(this.prepateData());
								this.$dataTableRef.draw(false);
							}
						} catch (e) {
							this.logger.error(e);
						}
					},
					(error: any) => {
						try {
							this.baseServices.uiHelper.processResponse(error.body); //JSON parsing is handled in the function now
						} catch (e) {
							this.logger.error(e);
						}
						clearInterval(this.refreshTimeout);
						setTimeout(() => {
							this.startRefreshOperation()
						}, 10000);
					}
				);
		}
	}

	public prepateData() {
		let dataset = [];
		if (this.currentList && this.currentList.length > 0) {
			try {
				this.currentList.forEach((itm: PathDTO, idx) => {
					dataset.push(
						[
							//'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
							this.renderIcon("PATHSTATE", itm.state),
							//this.formatHost(itm.srcHostId, itm.srcDeviceId,itm.srcPortNumber),
							//this.formatHost(itm.dstHostId, itm.dstDeviceId,itm.dstPortNumber),

							this.renderIcon("TRANSPORTPROTOCOL", itm.protocol),

							itm.srcDeviceId || "-",
							itm.srcHostId || "-",
							itm.srcPort || itm.srcPortNumber || "-",

							itm.dstDeviceId || "-",
							itm.dstHostId || "-",
							itm.dstPort || itm.dstPortNumber || "-",

							(itm.links ? itm.links.length : '-'),
							this.renderRowActions(idx, true, (action: Action, idx: number, data: PathDTO) => {
								if (action.id.lastIndexOf("view_path") != -1) {
									return data.state == PATHSTATE.INSTALLED;
								} else if (action.id.lastIndexOf("delete_path") != -1 || action.id.lastIndexOf("edit_path") != -1) {
									return !(is.existy(data.appId) && (data.appId.indexOf("argela.prognet.fwd") != -1 || data.appId.indexOf("argela.prognet.rhop") != -1));
								} else if (action.id.lastIndexOf("test_pack") != -1) {
									return data.sendMeasurePacket;
								}
								return true;
							})
						]
					);
				});

			} catch (e) {

			}
		}
		return dataset;
	}

	// public formatHost(hostId:string, deviceId:string, portnumber:number) {
	//     let info = [];
	//
	//     if (hostId) info.push(hostId);
	//     if (deviceId) info.push('@'+deviceId);
	//     if (portnumber) info.push(':'+portnumber);
	//
	//     return info.join('');
	// }
}

export enum REACTIVE_PATH_LIST_COMMAND {
	PATH_CREATE,
	PATH_VIEW,
	PATH_EDIT
}

export interface ReactivePathListReturn {
	command: REACTIVE_PATH_LIST_COMMAND;
	pathInfo?: PathDTO
}
