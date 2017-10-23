/**
 * Created by omeroz on 2/13/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {Action} from "../../../commons/Action";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {PageServices} from "../../PageServices";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {AAASTATUS} from "../../../swagger/AAASTATUS";
import {AppDTO} from "../../../swagger/AppDTO";
import {AppsApi} from "../../../swagger/AppsApi";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {AppListResponse} from "../../../swagger/AppListResponse";
import {ThirdPartyEditPopup} from "./ThirdPartyEditPopup";
import {CallReportsPopUp, CALLREPORTSTYPE} from "./CallReportsPopUp";


@Component({ moduleId: module.id,
    selector: 'RoleListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class ThirdPartyList extends BaseDataTablesPage<AppDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(public appsApi: AppsApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('user_management.third_party.list');

        this.setActions([
            this.createAction('@create', () => {
                this.baseServices.sharedService.showModal(ThirdPartyEditPopup, {
                        userList: [],
                        roleList: [],
                        type: 1
                    },
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit', (itm: AppDTO) => {
                this.baseServices.sharedService.showModal(ThirdPartyEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@reports', (itm: AppDTO) => {
                this.baseServices.sharedService.showModal(CallReportsPopUp, {data: itm, type: CALLREPORTSTYPE.APP},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            }),
            this.createAction('@delete', (itm: AppDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.appsApi
                            .aaaAppDeletePOST(<GenericDeleteRequest>request)
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
        if (super.ngAfterViewInit()) {
            //Code here
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
                {title: this.ft('status'), width: '5%', orderable: true, type: 'string', name: 'status',className: 'dt-center'},
                {title: this.ft('name'), width: '10%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('roleList'), width: '30%', orderable: false, type: 'string', name: 'roleList'},
                {visible: false, type: 'string', name: 'userCount'},
                {title: this.ft('userCount'), width: '20%', orderable: true, type: 'num', name: 'maxUserCount'},
                {
                    title: $.t('common.fields.actions'),
                    width: '15%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            order: [
                [1, "asc"]
            ],
            searching: false,
            argExtraFields: 'maxPolicyPriority'
        };
    }


    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>requestOptions
        });

        this.appsApi
            .aaaAppSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<AppListResponse>res);
                }
            );

        let executeCallback = (response: AppListResponse) => {
            let dataTableData = [];
            if (this.baseServices.uiHelper.processResponse(response)) {
                this.currentList = response.data.list;
                response.data.list.forEach((itm: AppDTO, idx) => {
                    dataTableData.push(
                        [
                            this.renderIcon('AAASTATUS', itm.status),
                            itm.name || '',
                            itm.roleList.map(role => role.name).join(', ') || '',
                            '',
                            itm.userCount + '/' + itm.maxUserCount,
                            this.renderRowActions(idx, true, (action: Action, idx: number, data: AppDTO) => {
                                return !(data.type == 0 && action.id.lastIndexOf("delete") != -1)
                            })
                        ]
                    );
                });
            } else {
                this.logger.error("3th Party DateTable Error", data);
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