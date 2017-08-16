/**
 * Created by barangu on 09.02.2017.
 */

import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {PolicyApi} from "../../../swagger/PolicyApi";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {EndUserApplicationDTO} from "../../../swagger/EndUserApplicationDTO";
import {PageServices} from "../../PageServices";
import {NacUserAppEditPopup} from "../NacUserAppEditPopup/NacUserAppEditPopup";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {Action} from "../../../commons/Action";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {EndUserApplicationListResponse} from "../../../swagger/EndUserApplicationListResponse";



@Component({
    moduleId: module.id,
    selector: 'NacUserAppListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [PolicyApi]
})
export class NacUserAppListPage extends BaseDataTablesPage<EndUserApplicationDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public policyApi: PolicyApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('nac_management.nac_user_app.list');

        this.setActions([
            this.createAction('@create_nac_user_app', () => {
                this.baseServices.sharedService.showModal(NacUserAppEditPopup, {},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);


        this.setRowActions([

            this.createAction('@edit_nac_user_app', (itm: EndUserApplicationDTO) => {
                this.baseServices.sharedService.showModal(NacUserAppEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),

            this.createAction('@delete_nac_user_app', (itm: EndUserApplicationDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.policyApi
                            .endUserAppDeletePOST(<GenericDeleteRequest>request)
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
                {title: this.ft('nac_app_name'), width: '30%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('ports'), width: '55%', orderable: false, type: 'num', name: 'addresses'},
                {title: this.ft('priority'), width: '15%', orderable: true, type: 'num', name: 'priority'},
                {
                    title: $.t('common.fields.actions'),
                    width: '15%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            "order": [
                [0, "asc"]
            ],
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {

        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions> requestOptions
        });

        this.policyApi
            .endUserAppSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<EndUserApplicationListResponse>res);
                }
            );


        let executeCallback = (response: EndUserApplicationListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: EndUserApplicationDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.name || '',
	                        itm.addresses && itm.addresses.join(',') || '',
                            itm.priority || '0',
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error('End User Application Datatables Error:', data);
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
