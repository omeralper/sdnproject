import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';

import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {AAAUsersApi} from "../../../swagger/AAAUsersApi";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {UserListResponse} from "../../../swagger/UserListResponse";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {UserDTO} from "../../../swagger/UserDTO";
import {PageServices} from "../../PageServices";
import {AAASTATUS} from "../../../swagger/AAASTATUS";
import {UserEditPopup} from "../UserEditPopup/UserEditPopup";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {PasswordPopup} from "../PasswordPopup/PasswordPopup";
import {AppDTO} from "../../../swagger/AppDTO";
import {CallReportsPopUp, CALLREPORTSTYPE} from "../ThirdParty/CallReportsPopUp";
import {SessionManager} from "../../SessionManager";


@Component({ moduleId: module.id,
    selector: 'UserListPage',
    //styles not working there is serious design flaw : https://github.com/angular/angular/issues/5064
    //styles: ['table::shadow img {max-width: 30px;max-height: 30px;}'],
    //styleUrls: ['./aaa/UserListPage/UserListPageStyle.css'],
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [],

})
export class UserListPageCode extends BaseDataTablesPage<UserDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public usersApi: AAAUsersApi,
                public sessionManager: SessionManager,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('user_management.users.list');

        this.setActions([
            this.createAction('@create_user', () => {
                this.logger.debug('Create new user action clicked')
                this.baseServices.sharedService.showModal(UserEditPopup, {
                        status: AAASTATUS.ACTIVE,
                        roleList: [],
                        securityLevel: 0
                    },
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit_user', (itm: UserDTO) => {
                this.logger.debug('Edit user ' + itm.username + ' action clicked');
                this.baseServices.sharedService.showModal(UserEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@reports', (itm: AppDTO) => {
                this.baseServices.sharedService.showModal(CallReportsPopUp, {data: itm, type: CALLREPORTSTYPE.USER},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            }),
            this.createAction('@set_pwd', (itm: UserDTO) => {
                this.logger.debug('Change password of user ' + itm.username + ' action clicked');
                this.baseServices.sharedService.showModal(PasswordPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@delete_user', (itm: UserDTO) => {
                this.logger.debug('Delete user ' + itm.username + ' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.usersApi
                            .aaaUserDeletePOST(<GenericDeleteRequest>request)
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
                {
                    title: this.ft('status'),
                    width: '5%',
                    orderable: true,
                    type: 'html',
                    name: 'status',
                    className: 'dt-center'
                },
                {title: this.ft('username'), width: '15%', orderable: true, type: 'string', name: 'username'},
                {title: this.ft('name'), width: '17%', orderable: true, type: 'num', name: 'name'},
                {title: this.ft('surname'), width: '17%', orderable: true, type: 'num', name: 'surname'},
                {title: this.ft('email'), width: '16%', orderable: true, type: 'num', name: 'email'},
                {title: this.ft('created'), width: '10%', orderable: true, type: 'date', name: 'created'},
                {title: this.ft('modified'), width: '10%', orderable: true, type: 'date', name: 'modified'},
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
                [1, "asc"]
            ],
            searching: false,
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>requestOptions
        });

        this.usersApi
            .aaaUserSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<UserListResponse>res);
                }
            );

        var executeCallback = (response: UserListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: UserDTO, idx) => {
                    dataTableData.push(
                        [
                            this.userStatusIcon(itm,idx) ,
                            itm.username || '',
                            itm.name || '',
                            itm.surname || '',
                            itm.email || '',
                            this.renderDateTime(itm.created),
                            this.renderDateTime(itm.modified),
                            this.renderRowActions(idx, true, (action: Action, idx: number, data: UserDTO) => {
                                if (action.id.lastIndexOf("delete_user") != -1) {
                                    return this.baseServices.authenticationManager.getCurrentUser().userDTO.id != data.id;
                                } else if (action.id.lastIndexOf("set_pwd") != -1) {
                                    if (!this.sessionManager.isLdapEnabled) {
                                        if (this.baseServices.authenticationManager.getCurrentUser().userDTO.id == data.id) {
                                            return this.baseServices.permManager.userHasPermissions('users:change_pwd');
                                        } else {
                                            return this.baseServices.permManager.userHasPermissions('users:set_pwd');
                                        }
                                    }
                                    return false;
                                }
                                return true;
                            })
                        ]
                    );
                });

            } else {
                this.logger.error('UserList DataTables Error:', data);
            }
            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [],
                recordsFiltered: response.data ? response.data.totalItems : [],
                data: dataTableData
            });
        }
    }

    public userStatusIcon(itm: UserDTO, idx: number) {
        // '' + (itm.image ? itm.image : "<img src=") + '' +
        // '"/assets/img/unknown_person.gif" class="user_profile status_' + itm.status.toString().toLowerCase() + '" ' +
        // 'style="max-height:30px;max-width:30px" ' +
        // 'data-status="' + itm.status.toString().toLowerCase() + '">'

        return '<a href="javascript:;" class="js_status_button" data-index="' + idx + '"><img src="' + (itm.image ? itm.image : "/assets/img/unknown_person.gif") + '" ' +
            'class="user_profile status_' + (itm.status ? itm.status : 'ACTIVE').toString().toLowerCase() + '" ' +
            'style="max-height:30px;max-width:30px" ' +
            'data-status="' + (itm.status ? itm.status : 'ACTIVE').toString().toLowerCase() + '"></a>';
    }

}
