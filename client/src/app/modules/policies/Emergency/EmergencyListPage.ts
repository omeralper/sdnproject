/**
 * Created by barangu on 6/30/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {Action} from "../../../commons/Action";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {EmergencyPolicyDTO} from "../../../swagger/EmergencyPolicyDTO";
import {EmergencyPolicyApi} from "../../../swagger/EmergencyPolicyApi";
import {EmergencyPolicyListResponse} from "../../../swagger/EmergencyPolicyListResponse";
import {PageServices} from "../../PageServices";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {EmergencyEditPopup} from "./EmergencyEditPopup";



@Component({
    moduleId: module.id,
    selector: 'EmergencyListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [EmergencyPolicyApi]
})
export class EmergencyListPage extends BaseDataTablesPage<EmergencyPolicyDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public emergencyPolicyApi: EmergencyPolicyApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.emergency.list');

        this.setActions([
            this.createAction('@create', () => {
                this.baseServices.sharedService.showModal(EmergencyEditPopup, {},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);


        this.setRowActions([

            this.createAction('@edit', (itm: EmergencyPolicyDTO) => {
                this.baseServices.sharedService.showModal(EmergencyEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),

            this.createAction('@delete', (itm: EmergencyPolicyDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.emergencyPolicyApi
                            .emergencyPolicyDeletePOST(<GenericDeleteRequest>request)
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
                });
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
                {title: this.ft('policyName'), width: '40%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('capacityLoss'), width: '20%', orderable: true, type: 'number', name: 'deviceLossRatio', className: 'dt-center'},
                {title: this.ft('trafficThreshold'), width: '20%', orderable: true, type: 'number', name: 'trafficThreshold', className: 'dt-center'},
                {title: this.ft('routeTransfer'), width: '20%', orderable: false, type: 'string', name: 'disableDomain', className: 'dt-center'},
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
            argExtraFields: ["vnfToStart", "vnfToShutdown"]
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {

        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions> requestOptions
        });

        this.emergencyPolicyApi
            .emergencyPolicySearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<EmergencyPolicyListResponse>res);
                }
            );


        let executeCallback = (response: EmergencyPolicyListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: EmergencyPolicyDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.name || '',
                            "%"+itm.deviceLossRatio || '',
                            "%"+itm.trafficThreshold || '',
                            this.renderIcon("BOOLEAN", itm.disableDomain),
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error('Emergency Datatables Error:', data);
            }
            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [],
                recordsFiltered: response.data ? response.data.totalItems : [],
                data: dataTableData
            });
        };
    }
}
