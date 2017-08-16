/**
 * Created by omeroz on 06.09.2016.
 */

import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {Action} from "../../../commons/Action";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {ListOptions} from "../../../swagger/ListOptions";
import {PageServices} from "../../PageServices";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {AAAServerDTO} from "../../../swagger/AAAServerDTO";
import {AAAServerApi} from "../../../swagger/AAAServerApi";
import {AAAServerListResponse} from "../../../swagger/AAAServerListResponse";
import {AAAServerEditPopup} from "../AAAServerEditPopup/AAAServerEditPopup";


@Component({ moduleId: module.id,
    selector: 'AAAServerListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class AAAServerListPage extends BaseDataTablesPage<AAAServerDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(public aaaServerApi:AAAServerApi,
                baseServices:PageServices,
                elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('nac_management.server.list');

        this.setActions([
            this.createAction('@create_aaaServer', ()=> {
                this.logger.debug('Create new AAA Server action clicked')
                this.baseServices.sharedService.showModal(AAAServerEditPopup,{},
                    (result)=>{
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit_aaaServer', (itm:AAAServerDTO)=> {
                this.logger.debug('Edit AAA Server ' + itm.name + ' action clicked');
                this.baseServices.sharedService.showModal(AAAServerEditPopup, itm,(result)=>{
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@delete_aaaServer', (itm:AAAServerDTO)=> {
                this.logger.debug('Delete AAA Server ' + itm.name + ' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.aaaServerApi
                            .serverDeletePOST(<GenericDeleteRequest>request)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
                                        this.reload();
                                    }
                                },
                                (error:any) => {
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
                {title: '', width: '5%', orderable: true, type: 'date', name: 'created',visible:false},
                {title: this.ft('name'), width: '15%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('userName'), width: '15%', orderable: true, type: 'string', name: 'userName'},
                {title: this.ft('address'), width: '15%', orderable: false, type: 'string', name: 'address'},
                {title: this.ft('protocol'), width: '10%', orderable: true, type: 'string', name: 'protocol'},
                {title: this.ft('deadTime'), width: '10%', orderable: true, type: 'number', name: 'deadTime'},
                {title: this.ft('retransmission'), width: '15%', orderable: true, type: 'string', name: 'retransmission'},
                {title: this.ft('port'), width: '5%', orderable: true, type: 'number', name: 'port'},
                {title: '', width: '5%', orderable: true, type: 'string', name: 'secretKey',visible:false},
                {title: '', width: '5%', orderable: true, type: 'string', name: 'ldapUseSSL',visible:false},
                {
                    title: $.t('common.fields.actions'),
                    width: '10%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            "order": [
                [0, "desc"]
            ], // set first column as a default sort by asc
            argExtraFields: ["usingDB"]
        };
    }


    makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {
        let request;
        if (requestOptions.queryOptions) {
            //use Search function
            request = this.baseServices.apiHelper.genRequest({
                options: <SearchOptions>requestOptions
            });

            this.aaaServerApi
                .serverSearchPOST(<GenericSearchRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<AAAServerListResponse>res);
                    }
                );
        } else {

            //use list function
            request = this.baseServices.apiHelper.genRequest({
                options: <ListOptions>requestOptions
            });

            this.aaaServerApi
                .serverListPOST(<GenericListRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<AAAServerListResponse>res);
                    }
                );
        }

        this.logger.debug("Request:", request);

        let executeCallback = (response:AAAServerListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:AAAServerDTO, idx)=> {
                    dataTableData.push(
                        [
                            itm.created || new Date('01.01.1970'),
                            itm.name || '',
                            itm.userName || '',
                            itm.address && itm.address.ipv4 ? itm.address.ipv4 : '',
                            itm.protocol || '',
                            itm.deadTime || '',
                            itm.retransmission || '',
                            itm.port || '',
                            itm.secretKey || '',
                            itm.ldapUseSSL || '',
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error("AAA Server DataTable Error", data);
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
