import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {NacUserEditPopup} from "../NacUserEditPopup/NacUserEditPopup";
import {NacUserPasswordPopup} from "../NacUserPasswordPopup/NacUserPasswordPopup";
import {NacUserApi} from "../../../swagger/NacUserApi";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {NacUserDTO} from "../../../swagger/NacUserDTO";
import {NacUserListResponse} from "../../../swagger/NacUserListResponse";
import {NacUserStatisticsPopup} from "../NacUserStatisticsPopup/NacUserStatisticsPopup";
import {NacManager} from "../NacManager";
import {RETURNSTATUS} from "../../../swagger/RETURNSTATUS";

@Component({ moduleId: module.id,
    selector: 'NacUserListPage',
    //styles not working there is serious design flaw : https://github.com/angular/angular/issues/5064
    //styles: ['table::shadow img {max-width: 30px;max-height: 30px;}'],
    //styleUrls: ['./nac/NacUserListPage/NacUserListPage.css'],
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class NacUserListPage extends BaseDataTablesPage<NacUserDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(public nacManager: NacManager,
                public usersApi: NacUserApi,
                baseServices: PageServices,
                elementRef: ElementRef,
                public router: Router) {
        super(baseServices, elementRef);
        this.setI18NKey('nac_management.users.list');
        this.setActions([
            this.createAction('@create_user', () => {
                this.baseServices.sharedService.showModal(NacUserEditPopup, {
                        status: NACSTATUS.ACTIVE,
                        profileList: [],
                        securityLevel: 0
                    },
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit_user', (itm: NacUserDTO) => {
                this.baseServices.sharedService.showModal(NacUserEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@set_pwd', (itm: NacUserDTO) => {
                this.baseServices.sharedService.showModal(NacUserPasswordPopup, itm);
            }),
            this.createAction('@device_list', (itm: NacUserDTO) => {
                this.router.navigate(['/nac/devicesofuser', {userId: itm.id, name: itm.username}]);
            }),
            this.createAction('@user_statistics', (itm: NacUserDTO) => {
                this.baseServices.sharedService.showModal(NacUserStatisticsPopup, itm);
            }),
            this.createAction('@delete_user', (itm: NacUserDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request: GenericDeleteRequest = <GenericDeleteRequest>this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.usersApi
                            .userDeletePOST(request)
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

    initDataTable() {
        super.initDataTable();

        if (this.$tableRef) {

            this.$tableRef.on("click", "a.js_status_button", (e) => {
                e.preventDefault();
                e.stopPropagation();

                let el = $(e.currentTarget);
                let dataIdx = el.data('index');
                let data = this.currentList[dataIdx];
                let new_state = data.status == NACSTATUS.ACTIVE ? NACSTATUS.PASSIVE : NACSTATUS.ACTIVE;
                this.nacManager.changeUserStatus(data.username, null, new_state, (res) => {
                    if (res.status == RETURNSTATUS.SUCCESS) this.reload();
                });
            });
        }
    }

    getDataTableOptions() {
        return {
            columns: [
                {
                    title: this.ft('status'),
                    width: '5%',
                    orderable: true,
                    type: 'html',
                    name: 'status',
                    className: 'dt-center'
                },
                {title: this.ft('username'), width: '10%', orderable: true, type: 'string', name: 'username'},
                {title: this.ft('name'), width: '10%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('surname'), width: '10%', orderable: true, type: 'string', name: 'surname'},
                {title: this.ft('email'), width: '15%', orderable: true, type: 'string', name: 'email'},
                {title: this.ft('nacGroup'), width: '10%', orderable: false, type: 'string'},
                {title: this.ft('byodGroup'), width: '10%', orderable: false, type: 'string'},
                {
                    title: this.ft('created'),
                    width: '10%',
                    orderable: true,
                    type: 'date',
                    name: 'created',
                    className: 'dt-center'
                },
                {
                    title: this.ft('modified'),
                    width: '10%',
                    orderable: true,
                    type: 'date',
                    name: 'modified',
                    className: 'dt-center'
                },
                {
                    title: $.t('common.fields.actions'),
                    width: '10%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                },
	            {title: 'phoneNumber', type: 'string', name: 'phoneNumber', visible: false},
                {title: 'userType', type: 'string', name: 'userType', visible: false},
                {title: 'tcno', type: 'string', name: 'tcno', visible: false},
                {title: 'accessTimeStart', type: 'string', name: 'accessTimeStart', visible: false},
                {title: 'accessTimeEnd', type: 'string', name: 'accessTimeEnd', visible: false},
            ],
            "order": [
                [7, "desc"]
            ],
            extraFields: []// set first column as a default sort by asc
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        //debugger;
        let request;

        if (requestOptions.queryOptions) {
            //use Search function
            request = this.baseServices.apiHelper.genRequest({
                options: <SearchOptions>requestOptions
            });

            this.usersApi
                .userSearchPOST(<GenericSearchRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<NacUserListResponse>res);
                    }
                );
        } else {
            //use list function
            request = this.baseServices.apiHelper.genRequest({
                options: <ListOptions>requestOptions
            });

            this.usersApi
                .userListPOST(<GenericListRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<NacUserListResponse>res);
                    }
                );
        }

        let executeCallback = (response: NacUserListResponse) => {
            //debugger;
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: NacUserDTO, idx) => {
                    dataTableData.push(
                        [
                            this.userStatusIcon(itm, idx),
                            itm.username || '',
                            itm.name || '',
                            itm.surname || '',
                            itm.email || '',
                            itm.nacGroup ? itm.nacGroup.name : '',
                            itm.byodNacGroup ? itm.byodNacGroup.name : '',
                            this.renderDateTime(itm.created),
                            this.renderDateTime(itm.modified),
                            this.renderRowActions(idx, true),
                            itm.phoneNumber || '',
                            itm.userType,
                            itm.tcno || '',
                            itm.accessTimeStart || '',
                            itm.accessTimeEnd || ''
                        ]
                    );
                });

            } else {
                this.logger.error('NacUserList DataTables Error:', data);
            }
            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [],
                recordsFiltered: response.data ? response.data.totalItems : [],
                data: dataTableData
            });
        }
    }

    public userStatusIcon(itm: NacUserDTO, idx: number) {
        return '<a href="javascript:;" class="js_status_button" data-index="' + idx + '"><img src="' + (itm.image ? itm.image : "/assets/img/unknown_person.gif") + '" ' +
            'class="user_profile status_' + (itm.status ? itm.status : 'ACTIVE').toString().toLowerCase() + '" ' +
            'style="max-height:30px;max-width:30px" ' +
            'data-status="' + (itm.status ? itm.status : 'ACTIVE').toString().toLowerCase() + '"></a>';
    }
}
