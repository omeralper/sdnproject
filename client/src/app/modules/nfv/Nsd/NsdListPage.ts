/**
 * Created by omeroz on 4/5/2017.
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
import {NsdEditPopup} from "./NsdEditPopup";
import {NetServiceDescListResponse} from "../../../swagger/NetServiceDescListResponse";
import {StartNsdPopup} from "./StartNsdPopup";
import {NetServiceRecordLaunchDTO} from "../../../swagger/NetServiceRecordLaunchDTO";

@Component({
    moduleId: module.id,
    selector: 'NsdListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class NsdListPage extends BaseDataTablesPage<NetServiceDescDTO> implements OnInit, AfterViewInit, OnDestroy {

    constructor(public nfvApi: NFVApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_function_virtualization.network_service_decriptor.list');
        this.isServerSide = false;
        this.setActions([
            this.createAction('@create', () => {
                this.baseServices.sharedService.showModal(NsdEditPopup, {}, (result) => {
                    if (result.isSuccess) this.reload();
                });
            })
        ]);

        this.setRowActions([
            this.createAction('@view', (itm: NetServiceDescDTO) => {
                this.baseServices.sharedService.showModal(NsdEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            // this.createAction('@vnf', (itm: NetServiceDescDTO) => {
            //     // this.baseServices.sharedService.showModal(NsdEditPopup, itm, (result) => {
            //     //     if (result.isSuccess) this.reload();
            //     // });
            // }),
            this.createAction('@start', (itm: NetServiceDescDTO) => {
                this.baseServices.sharedService.showModal(StartNsdPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            // this.createAction('@stop', (itm: NetServiceDescDTO) => {
            //     this.baseServices.uiHelper.confirm(this.t('messages.stop_confirm', {dto: itm}), (selected: Action) => {
            //         if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
            //             let launcherDTO = <NetServiceRecordLaunchDTO>{};
            //
            //             let request = this.baseServices.apiHelper.genRequest({
            //                 data: launcherDTO
            //             });
            //
            //             this.nfvApi
            //                 .nsdSavePOST(request)
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
            this.createAction('@delete', (itm: NetServiceDescDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.nfvApi
                            .nsdDeletePOST(<GenericDeleteRequest>request)
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
                {title: this.ft('name'), width: '20%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('vendor'), width: '20%', orderable: true, type: 'string', name: 'vendor'},
                {
                    title: this.ft('nsdVersion'),
                    width: '20%',
                    orderable: true,
                    type: 'string',
                    name: 'nsdVersion'
                },
                {
                    title: $.t('common.fields.actions'),
                    width: '10%',
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
            .nsdListPOST(request)
            .subscribe(
                (res) => {
                    executeCallback(<NetServiceDescListResponse>res);
                }
            );


        let executeCallback = (response: NetServiceDescListResponse) => {
            let dataTableData = [];
            if (this.baseServices.uiHelper.processResponse(response)) {
                this.currentList = response.data.list;
                response.data.list.forEach((itm: NetServiceDescDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.name || '',
                            itm.vendor || '',
                            itm.nsdVersion || '',
                            this.renderRowActions(idx, true)
                        ]
                    );
                });
            } else {
                this.logger.error("NSD DataTable Error", data);
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
