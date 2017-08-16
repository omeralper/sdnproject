/**
 * Created by omeroz on 2/27/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {PageServices} from "../../../PageServices";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {SwitchDTO} from "../../../../swagger/SwitchDTO";
import {SwitchEditPopup2} from "./SwitchEditPopup";
import {DeleteOptions} from "../../../../swagger/DeleteOptions";
import {Action} from "../../../../commons/Action";
import {GenericDeleteRequest} from "../../../../swagger/GenericDeleteRequest";
import {PrognetDeviceApi} from "../../../../swagger/PrognetDeviceApi";
import {PrognetDeviceListResponse} from "../../../../swagger/PrognetDeviceListResponse";
import {SwitchPortStatsPopup} from "../../switch/SwitchPortStatsPopup/SwitchPortStatsPopup";
import {CertificateRequest} from "../../../../swagger/CertificateRequest";
import {CertificateRequestDTO} from "../../../../swagger/CertificateRequestDTO";
import {CERTIFICATETYPE} from "../../../../swagger/CERTIFICATETYPE";
import {PkiApi} from "../../../../swagger/PkiApi";
declare var saveAs: any;

@Component({
    moduleId: module.id,
    selector: 'SwitchList',
    templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [PkiApi]
})
export class SwitchList extends BaseDataTablesPage<SwitchDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(public prognetDeviceApi: PrognetDeviceApi, public pkiApi: PkiApi,
                baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.controller_management.switchSettings.list');

        this.setRowActions([
            this.createAction('@tls', (itm: SwitchDTO) => {

                this.baseServices.uiHelper.confirm($.t('common.messages.switch_certificate_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {

                        let cert: CertificateRequestDTO = <CertificateRequestDTO> {};

                        cert.nodeType = CERTIFICATETYPE.SWITCH;
                        cert.name = itm.name;
                        cert.address = itm.address;

                        let request = this.baseServices.apiHelper.genRequest({
                            data: <CertificateRequestDTO> cert
                        });

                        this.pkiApi
                            .pkiNodeCertCreatePOST(<CertificateRequest>request)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res, $.t('common.messages.switch_certificate_download'))) {
                                        let zipStr = window.atob(res.data.zipFile);
                                        var byteNumbers = new Array(zipStr.length);
                                        for (var i = 0; i < zipStr.length; i++) {
                                            byteNumbers[i] = zipStr.charCodeAt(i);
                                        }
                                        let zipByt = new Uint8Array(byteNumbers);
                                        var blob = new Blob([zipByt], {type: "application/zip"});
                                        saveAs(blob, "switch_" + itm.name + ".zip");
                                    }
                                },
                                (error: any) => {
                                    this.baseServices.uiHelper.processResponse(error._body);
                                }
                            );
                    }
                })
            }),
            this.createAction('@edit', (itm: SwitchDTO) => {
                this.baseServices.sharedService.showModal(SwitchEditPopup2, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@info', (itm: SwitchDTO) => {
                this.baseServices.sharedService.showModal(SwitchPortStatsPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@delete', (itm: SwitchDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });
                        this.prognetDeviceApi
                            .deviceDeletePOST(<GenericDeleteRequest>request)
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

        this.setActions([
            this.createAction('@create', () => {
                this.baseServices.sharedService.showModal(SwitchEditPopup2, {address: {}, location: {}},
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
                {
                    title: this.ft('type'),
                    width: '5%',
                    orderable: true,
                    type: 'html',
                    name: 'type',
                    className: 'dt-center'
                },
                {title: this.ft('name'), width: '20%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('ipv4'), width: '15%', orderable: true, type: 'string', name: 'ipv4'},
                {title: this.ft('mac'), width: '20%', orderable: true, type: 'string', name: 'mac'},
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
        };
    }


    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let request;
        request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>requestOptions
        });

        this.prognetDeviceApi
            .deviceSearchPOST(<GenericSearchRequest>request)
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
                            itm.status,
                            itm.deviceType,
                            itm.name,
                            itm.address.ipv4 || '',
                            itm.address.mac || '',
                            this.renderRowActions(idx, true, (action, idx, data: SwitchDTO) => {
                                if (action.id.lastIndexOf("info") != -1) {
                                    return data.deviceType == "OVSDB";
                                }
                                return true;
                            })
                        ]
                    );
                });

            } else {
                this.logger.error("Switch Datatable Error", data);
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
