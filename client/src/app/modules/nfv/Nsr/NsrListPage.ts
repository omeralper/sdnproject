/**
 * Created by omeroz on 4/6/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {NetServiceDescDTO} from "../../../swagger/NetServiceDescDTO";
import {NFVApi} from "../../../swagger/NFVApi";
import {NetServiceRecordDTO} from "../../../swagger/NetServiceRecordDTO";
import {NetServiceRecordLaunchRequest} from "../../../swagger/NetServiceRecordLaunchRequest";
import {NetServiceRecordListResponse} from "../../../swagger/NetServiceRecordListResponse";
import {NetServiceRecordLaunchDTO} from "../../../swagger/NetServiceRecordLaunchDTO";
import {GenericIdRequest} from "../../../swagger/GenericIdRequest";
import {NsrViewPopup} from "./NsrViewPopup";

@Component({
    moduleId: module.id,
    selector: 'NsrListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class NsrListPage extends BaseDataTablesPage<NetServiceRecordDTO> implements OnInit, AfterViewInit, OnDestroy {

    constructor(public nfvApi: NFVApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_function_virtualization.network_service_record.list');
	    this.isServerSide = false;
        // this.setActions([
        //
        // ]);

        this.setRowActions([
            // this.createAction('@start', (itm: NetServiceDescDTO) => {
            //     this.baseServices.uiHelper.confirm(this.t('messages.start_confirm', {dto: itm}), (selected: Action) => {
            //         if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
            //             let request = <NetServiceRecordLaunchRequest>this.baseServices.apiHelper.genRequest({
            //                 data: <NetServiceRecordLaunchDTO> {},
            //                 nsdId: ""
            //             });
            //
            //             this.nfvApi
            //                 .nsrSavePOST(request)
            //                 .subscribe(
            //                     (res) => {
            //                         if (this.baseServices.uiHelper.processResponse(res, this.t('messages.start_success', {dto: itm}))) {
            //                             this.reload();
            //                         }
            //                     },
            //                     (error: any) => {
            //                         this.baseServices.uiHelper.processResponse(error._body);
            //                     }
            //                 );
            //         }
            //     })
            // }),
            // this.createAction('@stop', (itm: NetServiceDescDTO) => {
            //     this.baseServices.uiHelper.confirm(this.t('messages.stop_confirm', {dto: itm}), (selected: Action) => {
            //         if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
            //             let request = <NetServiceRecordLaunchRequest>this.baseServices.apiHelper.genRequest({
            //                 data: <NetServiceRecordLaunchDTO> {},
            //                 nsdId:""
            //             });
            //
            //             this.nfvApi
            //                 .nsrSavePOST(request)
            //                 .subscribe(
            //                     (res) => {
            //                         if (this.baseServices.uiHelper.processResponse(res, this.t('messages.stop_success', {dto: itm}))) {
            //                             this.reload();
            //                         }
            //                     },
            //                     (error: any) => {
            //                         this.baseServices.uiHelper.processResponse(error._body);
            //                     }
            //                 );
            //         }
            //     })
            // }),
	        this.createAction('@view', (itm: NetServiceDescDTO) => {
		        this.baseServices.sharedService.showModal(NsrViewPopup, itm, (result) => {
			        if (result.isSuccess) this.reload();
		        });
	        }),
            this.createAction('@delete', (itm: NetServiceDescDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            id: itm.id
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

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
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

    getDataTableOptions() {
        return {
            columns: [
                {title: this.ft('name'), width: '25%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('state'), width: '20%', orderable: true, type: 'string', name: 'state'},
                {title: this.ft('task'), width: '25%', orderable: true, type: 'string', name: 'task'},
                {title: this.ft('timestamp'), width: '15%', orderable: true, type: 'string', name: 'timestamp'},
                {
                    title: $.t('common.fields.actions'),
                    width: '15%',
                    name: 'actions',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell',
                    bound: false
                }
            ],
            "order": [
                [0, "asc"]
            ],
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions> requestOptions
        });

        this.nfvApi
            .nsrListPOST(request)
            .subscribe(
                (res) => {
                    executeCallback(<NetServiceRecordListResponse>res);
                }
            );


        let executeCallback = (response: NetServiceRecordListResponse) => {
            let dataTableData = [];
            if (this.baseServices.uiHelper.processResponse(response)) {
                this.currentList = response.data.list;
                response.data.list.forEach((itm: NetServiceRecordDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.name,
                            itm.state,
                            itm.task,
	                        this.renderDateTime(itm.timestamp),
                            this.renderRowActions(idx, true)
                        ]
                    );
                });
            } else {
                this.logger.error("NSR DataTable Error", data);
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
