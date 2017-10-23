import {AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {Action} from "../../../commons/Action";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {PageServices} from "../../PageServices";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {NacProfileEditPopup} from "../NacProfileEditPopup/NacProfileEditPopup";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {NacGroupApi} from "../../../swagger/NacGroupApi";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {NacGroupDTO} from "../../../swagger/NacGroupDTO";
import {NacGroupListResponse} from "../../../swagger/NacGroupListResponse";
import {NACENTITYTYPE} from "../../../swagger/NACENTITYTYPE";


@Component({
    moduleId: module.id,
    selector: 'NacProfileListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class NacProfileListPage extends BaseDataTablesPage<NacGroupDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public groupApi: NacGroupApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('nac_management.profiles.list');

        this.setActions([
            this.createAction('@create_profile', () => {
                this.baseServices.sharedService.showModal(NacProfileEditPopup, {
                        status: NACSTATUS.ACTIVE,
                        securityLevel: 0
                    },
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit_profile', (itm: NacGroupDTO) => {
                this.baseServices.sharedService.showModal(NacProfileEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            // this.createAction('@list_group', (itm:NacGroupDTO)=> {
            //     this.logger.debug('List group ' + itm.name + ' action clicked');
            //     this.baseServices.sharedService.showModal(NacGroupDevicesListPopup, itm);
            // }),
            this.createAction('@delete_profile', (itm: NacGroupDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.groupApi
                            .groupDeletePOST(<GenericDeleteRequest>request)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
                                        this.reload();
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
                {
                    title: this.ft('status'),
                    width: '5%',
                    orderable: true,
                    type: 'string',
                    name: 'status',
                    className: "dt-center"
                },
                {
                    title: this.ft('groupType'),
                    width: '5%',
                    orderable: true,
                    type: 'string',
                    name: 'groupType',
                    className: "dt-center"
                },
                {title: this.ft('name'), width: '15%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('accessPolicy'), width: '15%', orderable: false, type: 'string', name: 'accessPolicy'},
                {title: this.ft('aaaServer'), width: '15%', orderable: false, type: 'string', name: 'aaaServer'},
                {title: this.ft('mvtnId'), width: '10%', orderable: false, type: 'number', name: 'mvtnId'},
                {
                    title: this.ft('userNumber_short'),
                    tooltip: this.ft('userNumber'),
                    width: '5%',
                    orderable: true,
                    type: 'number',
                    name: 'userNumber',
                    className: "dt-center"
                },
                {
                    title: this.ft('allowAutoBYOD'),
                    width: '5%',
                    orderable: true,
                    type: 'string',
                    name: 'allowAutoBYOD',
                    className: "dt-center"
                },
                {
                    title: this.ft('priority'),
                    width: '6%',
                    orderable: true,
                    type: 'number',
                    name: 'priority',
                    className: "dt-center"
                },
                {
                    title: this.ft('created'),
                    width: '10%',
                    orderable: true,
                    type: 'date',
                    name: 'created',
                    className: "dt-center"
                },
                {
                    title: this.ft('modified'),
                    width: '10%',
                    orderable: true,
                    type: 'date',
                    name: 'modified',
                    className: "dt-center"
                },
                {
                    title: $.t('common.fields.actions'),
                    width: '8%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            "order": [
                [2, "asc"]
            ], // set first column as a default sort by asc
            "argExtraFields": ["onlineUserNumber"]
        };
    }


    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let request;
        // if (requestOptions.queryOptions) {
        //use Search function
        request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>requestOptions
        });

        this.groupApi
            .groupSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<NacGroupListResponse>res);
                }
            );
        // } else {
        //     //use list function
        //     request = this.baseServices.apiHelper.genRequest({
        //         options: <ListOptions>requestOptions
        //     });
        //
        //     this.groupApi
        //         .groupListPOST(<GenericListRequest>request)
        //         .subscribe(
        //             (res) => {
        //                 executeCallback(<NacGroupListResponse>res);
        //             }
        //         );
        // }

        this.logger.debug("Request:", request);

        let executeCallback = (response: NacGroupListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: NacGroupDTO, idx) => {
                    //    this.currentList.forEach((itm:NacGroupDTO, idx)=> {
                    dataTableData.push(
                        [
                            this.renderIcon('NACSTATUS', itm.status),
                            this.renderIcon('NACENTITYTYPE', itm.groupType),
                            itm.name || '',
                            itm.accessPolicy ? itm.accessPolicy.profileName || '' : '',
                            itm.aaaServer ? itm.aaaServer.name : '',
                            itm.mvtnName ? itm.mvtnName || '' : '-',
                            [(itm.onlineUserNumber || 0), (itm.userNumber || 0)].join('/'),
                            this.renderIcon('BOOLEAN', itm.allowAutoBYOD),
                            is.existy(itm.priority) ? itm.priority : '',
                            this.renderDateTime(itm.created),
                            this.renderDateTime(itm.modified),
                            this.renderRowActions(idx, true),
                            itm.version,
                            itm.revision
                        ]
                    );
                });

            } else {
                this.logger.error("Profile DateTable Error", data);
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
