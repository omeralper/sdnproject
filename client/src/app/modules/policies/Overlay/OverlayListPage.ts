/**
 * Created by omeroz on 2/1/2017.
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
import {AccessPolicyDTO} from "../../../swagger/AccessPolicyDTO";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {AccessPolicyListResponse} from "../../../swagger/AccessPolicyListResponse";
import {OverlayEditPopup} from "./OverlayEditPopup";


@Component({
	moduleId: module.id,
    selector: 'OverlayListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class OverlayListPage extends BaseDataTablesPage<AccessPolicyDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(public policyApi: PolicyApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.overlay.list');
		this.isServerSide = false;
        this.setActions([
            this.createAction('@create', () => {
                this.baseServices.sharedService.showModal(OverlayEditPopup, {},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit', (itm: AccessPolicyDTO) => {
                this.baseServices.sharedService.showModal(OverlayEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@delete', (itm: AccessPolicyDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.policyApi
                            .overlayPolicyDeletePOST(<GenericDeleteRequest>request)
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
                {orderable: true, type: 'date', name: 'creationTime', visible: false},
                {title: this.ft('policyName'), width: '15%', orderable: true, type: 'string', name: 'policyName'},
                {
                    title: this.ft('accessPolicyAction'),
                    width: '5%',
                    orderable: true,
                    type: 'string',
                    name: 'accessPolicyAction'
                },
                {title: this.ft('priority'), width: '5%', orderable: true, type: 'string', name: 'priority'},
                {
                    title: this.ft('serviceAction'),
                    width: '15%',
                    orderable: true,
                    type: 'string',
                    name: 'serviceAction.policyName'
                },
                {title: this.ft('details'), width: '35%', type: 'string', name: 'packetHeaderCriteria'},
                {title: this.ft('updateTime'), width: '10%', orderable: true, type: 'string', name: 'updateTime'},
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
            ],
        };
    }


    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let request;
        if (requestOptions.queryOptions) {
            request = this.baseServices.apiHelper.genRequest({
                options: <SearchOptions>requestOptions
            });
            this.policyApi
                .overlayPolicySearchPOST(<GenericSearchRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<AccessPolicyListResponse>res);
                    }
                );
        } else {
            request = this.baseServices.apiHelper.genRequest({
                options: <ListOptions>requestOptions
            });
            this.policyApi
                .overlayPolicyListPOST(<GenericListRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<AccessPolicyListResponse>res);
                    }
                );
        }

        let executeCallback = (response: AccessPolicyListResponse) => {
            let dataTableData = [];
            if (this.baseServices.uiHelper.processResponse(response)) {
                this.currentList = response.data.list;
                response.data.list.forEach((itm: AccessPolicyDTO, idx) => {
                    let mac = itm.packetHeaderCriteria && itm.packetHeaderCriteria.macAddresses ?
                        "MAC: " + itm.packetHeaderCriteria.macAddresses.src + "-->" + itm.packetHeaderCriteria.macAddresses.dest + "</br>" : "";
                    let ip = itm.packetHeaderCriteria && itm.packetHeaderCriteria.ipAddressess ?
                        "IP: " + itm.packetHeaderCriteria.ipAddressess.src + "-->" + itm.packetHeaderCriteria.ipAddressess.dest+ "</br>" : "";
                    let port = itm.packetHeaderCriteria && itm.packetHeaderCriteria.portRanges ?
                        "PORT: " + itm.packetHeaderCriteria.portRanges.src + "-->" + itm.packetHeaderCriteria.portRanges.dest+ "</br>" : "";
                    let protocol = itm.packetHeaderCriteria && itm.packetHeaderCriteria.protocols ?
                        "PROTOCOL: " + itm.packetHeaderCriteria.protocols.join(',') : "";
                    dataTableData.push(
                        [
                            itm.creationTime || new Date(),
                            itm.policyName || '',
                            // itm.accessPolicyAction || '',
                            this.renderIcon('ACCESSACTIONTYPE', itm.accessPolicyAction),
                            itm.priority || '',
                            itm.serviceAction ? itm.serviceAction.policyName : '-',
                            mac + ip + port + protocol,
                            this.renderDateTime(itm.updateTime),
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error("Overlay DataTable Error", data);
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
