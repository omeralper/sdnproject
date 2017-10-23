/**
 * Created by omeroz on 25.08.2016.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {NacDeviceDTO} from "../../../swagger/NacDeviceDTO";
import {NacDeviceApi} from "../../../swagger/NacDeviceApi";
import {HOSTTYPE} from "../../../swagger/HOSTTYPE";
import {NacDeviceEditPopup} from "../NacDeviceEditPopup/NacDeviceEditPopup";
import {BasePopupDataTablesPage} from "../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {NacDeviceListResponse} from "../../../swagger/NacDeviceListResponse";
import {QueryOptions} from "../../../swagger/QueryOptions";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {Action} from "../../../commons/Action";
import {NacGroupDTO} from "../../../swagger/NacGroupDTO";
import {PageServices} from "../../PageServices";
import {MODAL_SIZE} from "../../ModalComponent";

// Root Component
@Component({ moduleId: module.id,
    selector: 'NacDeviceListPopup',
    templateUrl: '../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html',
    providers: [NacDeviceApi]
})

export class NacGroupDevicesListPopup extends BasePopupDataTablesPage<NacGroupDTO,NacDeviceDTO> implements OnInit, AfterViewInit, OnDestroy {

    constructor(public devicesApi: NacDeviceApi,
                baseServices: PageServices,
                elementRef: ElementRef,
                public changeDetector: ChangeDetectorRef) {
        super(baseServices, elementRef);

        this.modalSize = MODAL_SIZE.LARGE;
        this.setI18NKey('nac_management.devices.list');
        this.logger.debug('Data received:', this.data);
        this.data.status = this.data.status || NACSTATUS.ACTIVE;
        this.setPopupActions([
            this.createAction('@create_device', () => {
                this.logger.debug('Create new device action clicked')
                this.baseServices.sharedService.showModal(NacDeviceEditPopup, {
                        status: NACSTATUS.ACTIVE,
                        securityLevel: 0,
                        type: HOSTTYPE.UNKNOWN
                    },
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);
        this.setRowActions([
            this.createAction('@edit_device', (itm: NacDeviceDTO) => {
                this.logger.debug('Edit device ' + itm.name + ' action clicked');
                this.baseServices.sharedService.showModal(NacDeviceEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),

            this.createAction('@delete_device', (itm: NacDeviceDTO) => {
                this.logger.debug('Delete device ' + itm.name + ' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.devicesApi
                            .deviceDeletePOST(<GenericDeleteRequest>request)
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

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
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

    save() {

    }

    getDataTableOptions() {
        return {
            columns: [
                //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
                {title: this.ft('status'), width: '10%', orderable: true, type: 'string', name: 'status'},
                // {title: this.ft('type'), width: '10%', orderable: true, type: 'string', name: 'type', className: 'dt-center'},
                {title: this.ft('name'), width: '20%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('mac'), width: '20%', orderable: true, type: 'string', name: 'mac'},
                {title: this.ft('ipv4'), width: '20%', orderable: true, type: 'string', name: 'ipv4'},
                {title: this.ft('securityLevel'), width: '10%', orderable: true, type: 'num', name: 'securityLevel'},
                {
                    name: 'actions',
                    title: $.t('common.fields.actions'),
                    width: '10%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell',
                }
            ],
            "order": [
                [1, "asc"]
            ], // set first column as a default sort by asc
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {

        let request: GenericSearchRequest = this.baseServices.apiHelper.genRequest({
            options: <GenericSearchRequest> $.extend(requestOptions, {
                queryOptions: <QueryOptions> {
                    operator: QUERYOP.VALUE,
                    fieldName: 'nacGroup.id',
                    fieldValue: this.data.id
                }
            })
        });

        if (requestOptions.queryOptions) {
            //use Search function
            request = this.baseServices.apiHelper.genRequest({
                options: <SearchOptions>requestOptions
            });

            this.devicesApi
                .deviceSearchPOST(<GenericSearchRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<NacDeviceListResponse>res);
                    }
                );
        } else {

            //use list function
            request = this.baseServices.apiHelper.genRequest({
                options: <ListOptions>requestOptions
            });

            this.devicesApi
                .deviceListPOST(<GenericListRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<NacDeviceListResponse>res);
                    }
                );
        }

        this.logger.debug("Request:", request);

        let executeCallback = (response: NacDeviceListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: NacDeviceDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.status || '-',
                            itm.name || '-',
                            itm.securityLevel || '-',
                            this.renderDateTime(itm.created) || '-',
                            this.renderDateTime(itm.modified) || '-',
                            this.renderRowActions(idx, true),
                            itm.version,
                            itm.revision
                        ]
                    );
                });

            } else {
                this.logger.error("Device DateTable Error", data);
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

