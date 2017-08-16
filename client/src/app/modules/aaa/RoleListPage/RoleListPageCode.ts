import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';

import {AAARolesApi} from "../../../swagger/AAARolesApi";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {Action} from "../../../commons/Action";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {RoleDTO} from "../../../swagger/RoleDTO";
import {PageServices} from "../../PageServices";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {RoleEditPopup} from "../RoleEditPopup/RoleEditPopup";
import {AAASTATUS} from "../../../swagger/AAASTATUS";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {RoleListResponse} from "../../../swagger/RoleListResponse";


@Component({ moduleId: module.id,
    selector: 'RoleListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class RoleListPageCode extends BaseDataTablesPage<RoleDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(public rolesApi:AAARolesApi, baseServices:PageServices, elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('user_management.roles.list');

        this.setActions([
            this.createAction('@create_role', ()=> {
                this.logger.debug('Create new role action clicked')
                this.baseServices.sharedService.showModal(RoleEditPopup,{
                    status: AAASTATUS.ACTIVE,
                    permList:[],
                    securityLevel:0
                },
                (result)=>{
                    if (result.isSuccess) this.reload();
                });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit_role', (itm:RoleDTO)=> {
                this.logger.debug('Edit role ' + itm.name + ' action clicked');
                this.baseServices.sharedService.showModal(RoleEditPopup, itm,(result)=>{
                        if (result.isSuccess) this.reload();
                    });
            }),
            this.createAction('@delete_role', (itm:RoleDTO)=> {
                this.logger.debug('Delete role ' + itm.name + ' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.rolesApi
                            .aaaRoleDeletePOST(<GenericDeleteRequest>request)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
                                        this.reload();
                                    }
                                },
                                (error:any) => {
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
                {title: this.ft('name'), width: '30%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('securityLevel'), width: '20%', orderable: true, type: 'num', name: 'securityLevel'},
                {title: this.ft('created'), width: '20%', orderable: true, type: 'date', name: 'created'},
                {title: this.ft('modified'), width: '20%', orderable: true, type: 'date', name: 'modified'},
                {visible:false, name: 'permList'},
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


    makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {
        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>requestOptions
        });
        this.rolesApi
            .aaaRoleSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<RoleListResponse>res);
                }
            );


        var executeCallback = (response:RoleListResponse) => {
            let dataTableData = [];
            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:RoleDTO, idx)=> {
                    dataTableData.push(
                        [
                            itm.name||'',
                            itm.securityLevel||'',
                            this.renderDateTime(itm.created),
                            this.renderDateTime(itm.modified),
                            '',
                            this.renderRowActions(idx, true,(action:Action,idx:number,data:RoleDTO)=>{
                                if (action.id.lastIndexOf("delete_role")!=-1) {
                                    return !this.baseServices.authenticationManager.hasRole(data);
                                }
                                return true;
                            })
                        ]
                    );
                });

            } else {
                this.logger.error("Role DateTable Error", data);
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
