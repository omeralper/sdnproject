/**
 * Created by omeroz on 2/27/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {Headers} from "@angular/http";
import {BaseDataTablesPage} from "../../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../../../PageServices";
import {ControllerNodeDTO} from "../../../../../swagger/ControllerNodeDTO";
import {PrognetDeviceListResponse} from "../../../../../swagger/PrognetDeviceListResponse";
import {SwitchEditPopup2} from "../../SwitchSettings/SwitchEditPopup";
import {Action} from "../../../../../commons/Action";
import {SearchOptions} from "../../../../../swagger/SearchOptions";
import {GenericSearchRequest} from "../../../../../swagger/GenericSearchRequest";
import {ControllerApi} from "../../../../../swagger/ControllerApi";
import {SwitchDTO} from "../../../../../swagger/SwitchDTO";
import {DIALOG_TYPES} from "../../../../UIHelper";
import {ControllerSettingsService, ClusterViewParam} from "../ControllerSettingsService";
import {LinkSwitch} from "./LinkSwitch";
import {PrognetDeviceApi} from "../../../../../swagger/PrognetDeviceApi";
import {Subscription} from "rxjs";
import {QUERYOP} from "../../../../../swagger/QUERYOP";
import {QueryOptions} from "../../../../../swagger/QueryOptions";


@Component({
    moduleId: module.id,
    selector: 'ControllerSwitchList',
    templateUrl: '../../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class ControllerSwitchList extends BaseDataTablesPage<SwitchDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    controller: ControllerNodeDTO = <ControllerNodeDTO>{};
    subscription: Subscription;

    constructor(public prognetDeviceApi: PrognetDeviceApi,
                public controllerApi: ControllerApi,
                public controllerSettingsService: ControllerSettingsService,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.controller_management.controllerSettings.switches');
        this.isServerSide = false;
        this.setRowActions([
            this.createAction('@edit', (itm: SwitchDTO) => {
                this.baseServices.sharedService.showModal(SwitchEditPopup2, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@unlink', (itm: SwitchDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.unlink_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            data: itm
                        });

                        let header = new Headers();
                        header.append('X-NODE_ID', this.controller.nmNodeId);

                        this.prognetDeviceApi
                            .controllerDeviceUnassignPOST(request, true, header)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res)) {
                                        this.baseServices.uiHelper.notify(this.t('messages.unlink_success', {dto: itm}), DIALOG_TYPES.SUCCESS);
                                    }
                                },
                                (error: any) => {
                                    this.baseServices.uiHelper.processResponse(error._body);
                                }
                            );
                    }
                });
            })
        ]);

        this.setActions([
            this.createAction('@link', () => {
                this.baseServices.sharedService.showModal(LinkSwitch, this.controller,
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngOnInit() {
        super.ngOnInit();
        this.subscription = this.controllerSettingsService.viewSelected.subscribe((param: ClusterViewParam) => {
            this.controller = param.data;
            this.reload();
        });
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        super.ngOnDestroy();
    }

    getDataTableOptions() {
        return {
            columns: [
                {
                    title: this.ft('status'),
                    width: '8%',
                    orderable: true,
                    type: 'string',
                    name: 'status',
                    className: 'dt-center',
                },
                {
                    title: this.ft('type'),
                    width: '7%',
                    orderable: true,
                    type: 'string',
                    name: 'type'
                },
                {title: this.ft('name'), width: '30%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('controller'), width: '30%', orderable: true, type: 'string', name: 'controller'},
                {title: this.ft('mac'), width: '15%', orderable: true, type: 'string', name: 'mac'},
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
                [1, "desc"]
            ],
            extraFields: []
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        if (this.isFirstTime) {
            return super.makeDataTableRequest(requestOptions, data, callback);
        }

        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>{
                queryOptions: <QueryOptions> {
                    operator: QUERYOP.VALUE,
                    fieldValue: this.controller.id,
                    fieldName: "id"
                },
                pageSize: 10,
                startPage: 0
            }
        });

        let header = new Headers();
        header.append('X-NODE_ID', this.controller.nmNodeId);

        this.controllerApi
            .controllerDeviceSearchPOST(<GenericSearchRequest>request, true, header)
            .subscribe(
                (res) => {
                    executeCallback(<PrognetDeviceListResponse>res);
                }
            );

        let executeCallback = (response: PrognetDeviceListResponse) => {
            let dataTableData = [];
            if (this.baseServices.uiHelper.processResponse(response)) {
                this.currentList = response.data.list;
                response.data.list.forEach((itm: SwitchDTO, idx) => {
                    dataTableData.push(
                        [
                            this.renderIcon('SWITCHSTATUS', itm.status),
                            itm.deviceType || '',
                            itm.name || '',
                            [].concat(itm.controllerId, itm.slaveControllerIds).join(',') || '',
                            itm.address.mac || '',
                            this.renderRowActions(idx, true),
                        ]
                    );
                });
            } else {
                this.logger.error('Task List DataTable Error:', data);
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
