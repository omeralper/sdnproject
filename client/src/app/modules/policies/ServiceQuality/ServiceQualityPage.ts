/**
 * Created by ekinca on 8.08.2016.
 */
import {Component, EventEmitter, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, Inject} from '@angular/core';

import * as lib from '../../../swagger/api.d';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {UserDTO} from "../../../swagger/UserDTO";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {ServiceQualityEditPopup} from "./ServiceQualityEditPopup";
import {ServiceActionListResponse} from "../../../swagger/ServiceActionListResponse";
import {ServiceActionDTO} from "../../../swagger/ServiceActionDTO";
import {RESERVEDPATH} from "../../../swagger/RESERVEDPATH";
import {NTOPROUTE} from "../../../swagger/NTOPROUTE";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {QUERYOP} from "../../../swagger/QUERYOP";

@Component({
    moduleId: module.id,
    selector: 'ServiceQualityPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html'
})
export class ServiceQualityPage extends BaseDataTablesPage<ServiceActionDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public policyApi: PolicyApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.service_quality.list');

        this.setActions([
            this.createAction('@create_service_quality_policy', () => {
                this.logger.debug('Create new service quality policy action clicked')
                this.baseServices.sharedService.showModal(ServiceQualityEditPopup, {},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);


        this.setRowActions([
            /*            this.createAction('@view_user', (itm:UserDTO)=> {
             this.logger.debug('View user '+itm.username+' action clicked');
             }),*/
            this.createAction('@edit_service_quality_policy', (itm: UserDTO) => {
                this.logger.debug('Edit user ' + itm.username + ' action clicked');
                this.baseServices.sharedService.showModal(ServiceQualityEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            //this.createAction('@set_pwd', (itm:UserDTO)=> {
            //    this.logger.debug('Change password of user '+itm.username+' action clicked');
            //    this.baseServices.sharedService.showModal(PasswordPopup, itm,(result)=>{
            //        if (result.isSuccess) this.reload();
            //    });
            //}),
            this.createAction('@delete_service_quality_policy', (itm: UserDTO) => {
                this.logger.debug('Delete user ' + itm.username + ' action clicked');
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
                            .policyServiceActionDeletePOST(<GenericDeleteRequest>request)
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
                    title: '<input type="checkbox" class="group-checkable icheck">',
                    type: 'html',
                    name: 'id',
                    visible: false
                },
                {title: this.ft('cat_name'), width: '15%', orderable: true, type: 'string', name: 'policyName'},
                {title: this.ft('class'), width: '15%', orderable: true, type: 'string', name: 'servicePolicyClass'},
                {
                    title: this.ft('bandwidth'),
                    width: '10%',
                    orderable: true,
                    type: 'num',
                    name: 'bandwidth',
                    className: 'dt-center dt-right'
                },
                {width: '10%', orderable: false, type: 'string', name: 'maxBandwidthUnit', visible: false},
                {
                    title: this.ft('priority'),
                    width: '5%',
                    orderable: true,
                    type: 'num',
                    name: 'priority',
                    className: 'dt-center'
                },
                {title: this.ft('mvtnId'), width: '8%', orderable: true, type: 'num', name: 'mvtnId'},
                {
                    title: this.ft('required_devices'),
                    width: '13.5%',
                    orderable: true,
                    type: 'string',
                    name: 'includedDevices'
                },
                {
                    title: this.ft('blocked_devices'),
                    width: '13.5%',
                    orderable: true,
                    type: 'string',
                    name: 'excludedDevices'
                },
                {
                    title: this.ft('rules'),
                    width: '7%',
                    orderable: false,
                    type: 'html',
                    name: 'changeHeaders',
                    className: "dt-center noclip no-auto-tooltip"
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
                [0, "asc"]
            ] // set first column as a default sort by asc
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {

        if (!requestOptions.queryOptions) requestOptions.queryOptions = {operator: QUERYOP.NOOP};

        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions> requestOptions
        });

        for (var s = 0; s < request.options.fields.length; s++) {
            if (request.options.fields[s] == "servicePolicyClass") {
                request.options.fields.splice(s, 1);
            }
        }

        this.policyApi
            .policyServiceActionSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<ServiceActionListResponse>res);
                }
            );

        this.logger.debug("Request:", request);
        let executeCallback = (response: ServiceActionListResponse) => {
            let dataTableData = [];

            if (response && response.data && response.data.list && this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: ServiceActionDTO, idx) => {
                    var className = "";
                    if (itm.servicePolicyClass && itm.servicePolicyClass.serviceClassName) {
                        className = itm.servicePolicyClass.serviceClassName || "";
                    }

                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            '',//id
                            itm.policyName || '',
                            className,
                            itm.maxBandwidth ? itm.maxBandwidth + " " + itm.maxBandwidthUnit : "",
                            '',//bw unit
                            itm.priority,
                            itm.mvtnName ? itm.mvtnName : '-',
                            itm.includedDevices.join(',</br>') || '',
                            itm.excludedDevices.join(',</br>') || '',
                            this.handleRuleIcons(itm),
                            this.renderRowActions(idx, true, (action: Action, idx: number, data: UserDTO) => {
                                // if (action.id.lastIndexOf("delete_user")!=-1) {
                                //     return this.baseServices.authenticationManager.getCurrentUser().id != data.id;
                                // }
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
                recordsTotal: response.data ? response.data ? response.data.totalItems : [] : [],
                recordsFiltered: response.data ? response.data ? response.data.totalItems : [] : [],
                data: dataTableData
            });
        }
    }

    handleRuleIcons(itm: ServiceActionDTO) {
        let result = ['<div class="action_badges">'];
        let badge = (title, isDisabled = false) => {
            let i18n = this.t("badges." + title);
            if (isDisabled) {
                result.push('<span class="badge badge-danger" rel="tooltip" title="', i18n.title, '">', i18n.badge, '</span>');
            } else {
                result.push('<span class="badge badge-primary" rel="tooltip" title="', i18n.title, '" >', i18n.badge, '</span>');
            }
        };
        let empty = () => {
            result.push('<span class="badge badge-default">&nbsp;</span>');
        };

        if (itm.changeHeaders && is.existy(itm.changeHeaders.dhcpMark)) {
            badge('dhspMark');
        } else {
            empty();
        }

        if (itm.changeHeaders && (itm.changeHeaders.srcIp || itm.changeHeaders.dstIp || itm.changeHeaders.srcMac || itm.changeHeaders.dstMac)) {
            badge('IP');
        } else {
            empty();
        }

        if (itm.changeHeaders && is.existy(itm.changeHeaders.vlanId)) {
            badge('vlanId');
        } else {
            empty();
        }

        if (itm.routingServices) {
            badge('routingServices');
        } else {
            empty();
        }

        if (itm.reservedPath == RESERVEDPATH.ACTIVE) {
            badge('reservedPath');
        } else if (itm.reservedPath == RESERVEDPATH.DEACTIVE) {
            badge('reservedPath', true);
        } else {
            empty();
        }

        if (itm.ntopRoute == NTOPROUTE.ACTIVE) {
            badge('ntopRoute');
        } else {
            empty();
        }
        result.push('</div>');

        return result.join('');
    }

}
