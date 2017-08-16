/**
 * Created by yildirayme on 09.05.2016.
 */
import {Component, ElementRef, OnInit, AfterViewInit, OnDestroy} from "@angular/core";
import {BasePopupDataTablesPage} from "../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {MODAL_SIZE} from "../../ModalComponent";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {SharedService} from "../../SharedService";
import {ProactivePathPolicyApi} from "../../../swagger/ProactivePathPolicyApi";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {ListOptions} from "../../../swagger/ListOptions";
import {ProactivePathPolicyListResponse} from "../../../swagger/ProactivePathPolicyListResponse";
import {ProactivePathPolicyDTO} from "../../../swagger/ProactivePathPolicyDTO";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {DIALOG_TYPES} from "../../UIHelper";


// Root Component
@Component({ moduleId: module.id,
    selector: 'PathListPopup',
    templateUrl: '../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html',
    providers: [ProactivePathPolicyApi]
})
export class ProactivePathListPopup extends BasePopupDataTablesPage<any,ProactivePathPolicyDTO> implements OnInit, AfterViewInit, OnDestroy {
    public loadingInPorgress;
    //public refreshTimeout;

    constructor(public pathsApi: ProactivePathPolicyApi, baseServices: PageServices, elementRef: ElementRef, public sharedService: SharedService) {
        super(baseServices, elementRef);
        this.modalSize = MODAL_SIZE.FULL;

        //populate i18n fields but exclude title, because we are going to define it here
        this.setI18NKey('policy_management.preliminary_path_policies.list');

        this.setPopupActions([
            this.createAction('@create_preliminary_path_policy', () => {
                this.logger.debug('Add new path clicked');
                this.close(true, <ProactivePathListReturn>{
                    command: PROACTIVE_PATH_LIST_COMMAND.PATH_CREATE
                });
            })
        ]);

        this.setRowActions([
            this.createAction('@view_preliminary_path_policy', (itm: ProactivePathPolicyDTO) => {
                this.logger.debug('View path ' + itm.id + ' action clicked');

                if (is.existy(itm.subPathList) && is.not.empty(itm.subPathList)) {
                    this.close(true, <ProactivePathListReturn>{
                        command: PROACTIVE_PATH_LIST_COMMAND.PATH_VIEW,
                        pathInfo: itm
                    });
                } else {
                    //this.baseServices.uiHelper.notify(this.i18n.t('network_vis.topology.messages.no_path_found'), DIALOG_TYPES.WARNING);
                    this.baseServices.uiHelper.notify(this.i18n.t('paths.view.messages.no_path_links'), DIALOG_TYPES.WARNING);
                }

            }),
            this.createAction('@edit_preliminary_path_policy', (itm: ProactivePathPolicyDTO) => {
                this.logger.debug('Edit path ' + itm.id + ' action clicked');
                this.close(true, <ProactivePathListReturn>{
                    command: PROACTIVE_PATH_LIST_COMMAND.PATH_EDIT,
                    pathInfo: itm
                });
            }),
            this.createAction('@delete_preliminary_path_policy', (itm: ProactivePathPolicyDTO) => {
                this.logger.debug('Delete path ' + itm.id + ' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.pathsApi
                            .proactiveDeletePOST(<GenericDeleteRequest>request)
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
        //this.startRefreshOperation();
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
        //clearInterval(this.refreshTimeout);
    }

    getDataTableOptions() {
        //var dataset = this.prepateData();

        return {
            columns: [
                {title: this.ft('status'), width: '5%', orderable: true, type: 'string', name: 'status', className:'dt-center'},
                {visible:false, orderable: true, type: 'string', name: 'intentId'},
                {title: this.ft('name'), width: '10%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('mvtn_name_short'), tooltip: this.ft('mvtn_name'), width: '5%', orderable: true, type: 'string', name: 'mvtnName'},
                {title: this.ft('source_host'), width: '15%', orderable: true, type: 'num', name: 'fromId'},
                {title: this.ft('target_host'), width: '15%', orderable: true, type: 'num', name: 'toId'},
                {title: this.ft('priority'), width: '5%', orderable: true, type: 'num', name: 'priority', className:'dt-center'},
                {title: this.ft('service_quality_policy_short'), tooltip: this.ft('service_quality_policy'), width: '10%', orderable: true, type: 'num', name: 'serviceAction'},
                {title: this.ft('start_date_short'), tooltip: this.ft('start_date'),width: '12.5%', orderable: true, type: 'num', name: 'startTime', className:'dt-center'},
                {title: this.ft('end_date_short'), tooltip: this.ft('end_date'),width: '12.5%', orderable: true, type: 'num', name: 'stopTime', className:'dt-center'},
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
            argExtraFields: ['mvtnId'],
            searching: true,//true
            //serverSide: false,
            //data: dataset
        };
    }

    // reload(reset: boolean = false) {
    //     this.logger.debug('Reload Path List!');
    //     this.loadPathList();
    // }

    // public startRefreshOperation() {
    //     this.loadingInPorgress = false;
    //     this.refreshTimeout = setInterval(()=> {
    //         this.loadPathList();
    //     }, 10000);
    //     this.loadPathList();
    // }

    // public loadPathList() {
    //     if (!this.loadingInPorgress) {
    //         this.loadingInPorgress = true;
    //
    //         let request = this.baseServices.apiHelper.genRequest({
    //             options: <ListOptions>{
    //                 startPage: 0,
    //                 pageSize: 0,
    //                 sortOptions: {fieldName: 'name', isAscend: true},
    //                 fields: null
    //             }
    //         });
    //
    //         this.pathsApi
    //             .proactiveListPOST(<GenericListRequest>request)
    //             .finally(() => {
    //                 this.loadingInPorgress = false;
    //             })
    //             .subscribe(
    //                 (res: ProactivePathPolicyListResponse) => {
    //                     try {
    //                         if (this.baseServices.uiHelper.processResponse(res)) {
    //                             this.currentList = res.data.list;
    //                             this.$dataTableRef.clear();
    //                             this.$dataTableRef.rows.add(this.prepateData());
    //                             this.$dataTableRef.draw(false);
    //                         }
    //                     } catch (e) {
    //                         this.logger.error(e);
    //                     }
    //                 },
    //                 (error: any) => {
    //                     try {
    //                         this.baseServices.uiHelper.processResponse(error.body); //JSON parsing is handled in the function now
    //                     } catch (e) {
    //                         this.logger.error(e);
    //                     }
    //                     clearInterval(this.refreshTimeout);
    //                     setTimeout(() => {
    //                         this.startRefreshOperation()
    //                     }, 10000);
    //                 }
    //             );
    //     }
    // }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        //debugger;

        if (!this.loadingInPorgress) {
            this.loadingInPorgress = true;

            let request: any;

            //if (requestOptions.queryOptions) {
                //use Search function
                request = this.baseServices.apiHelper.genRequest(<GenericSearchRequest>{
                    options: <SearchOptions> requestOptions
                });

                this.pathsApi
                    .proactiveSearchPOST(<GenericSearchRequest>request)
                    .finally(() => {
                        this.loadingInPorgress = false;
                    })
                    .subscribe(
                        (res) => {
                            executeCallback(<ProactivePathPolicyListResponse>res);
                        },
                        (error: any) => {
                            executeCallback(<ProactivePathPolicyListResponse>JSON.parse(error._body));
                        }
                    );

            //}
            // INFO list service is not working
            // else {
            //     //use list function
            //     request = this.baseServices.apiHelper.genRequest({
            //         options: <ListOptions>requestOptions
            //     });
            //
            //     this.pathsApi
            //         .proactiveListPOST(<GenericListRequest>request)
            //         .finally(() => {
            //             this.loadingInPorgress = false;
            //         })
            //         .subscribe(
            //             (res) => {
            //                 executeCallback(<ProactivePathPolicyListResponse>res);
            //             },
            //             (error: any) => {
            //                 executeCallback(<ProactivePathPolicyListResponse>JSON.parse(error._body));
            //             }
            //         );
            // }
        }

        let executeCallback = (response: ProactivePathPolicyListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                dataTableData = this.prepateData();

            } else {
                this.logger.error("Path List DateTable Error", data);
            }
            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [] || dataTableData.length,
                recordsFiltered: response.data ? response.data.totalItems : [] || dataTableData.length,
                data: dataTableData
            });
        }
    }

    public prepateData() {
        let dataset = [];
        if (this.currentList && this.currentList.length > 0) {
            try {
                this.currentList.forEach((itm: ProactivePathPolicyDTO, idx) => {
                    dataset.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            this.renderIcon("PPPSTATUS", itm.status) || '',
                            itm.intentId || '',
                            itm.name || '',
                            itm.mvtnName || '-',
                            itm.fromId,
                            itm.toId,
                            itm.priority,
                            ( (itm.serviceAction && itm.serviceAction.policyName) ? itm.serviceAction.policyName : "" ),
                            this.baseServices.uiHelper.renderDateTime(itm.startTime) ,
                            this.baseServices.uiHelper.renderDateTime(itm.stopTime) ,
                            this.renderRowActions(idx,true)
                        ]
                    );
                });

            } catch (e) {

            }
        }
        return dataset;
    }

}

export enum PROACTIVE_PATH_LIST_COMMAND {
    PATH_CREATE,
    PATH_VIEW,
    PATH_EDIT
}

export interface ProactivePathListReturn {
    command: PROACTIVE_PATH_LIST_COMMAND;
    pathInfo?: ProactivePathPolicyDTO
}
