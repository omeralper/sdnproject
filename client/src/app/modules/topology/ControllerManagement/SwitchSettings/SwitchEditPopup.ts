/**
 * Created by omeroz on 2/27/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../PageServices";
import {DIALOG_TYPES} from "../../../UIHelper";
import {SwitchDTO, SwitchDTODef} from "../../../../swagger/SwitchDTO";
import {UI_SECURITY_LEVELS} from "../../../../commons/enums/UI_SECURITY_LEVELS";
import {OFFLINEMODE} from "../../../../swagger/OFFLINEMODE";
import {CONNECTIONMODE} from "../../../../swagger/CONNECTIONMODE";
import {ControllerApi} from "../../../../swagger/ControllerApi";
import {ControllerNodeListResponse} from "../../../../swagger/ControllerNodeListResponse";
import {ControllerNodeDTO} from "../../../../swagger/ControllerNodeDTO";
import {ClusterDTO} from "../../../../swagger/ClusterDTO";
import {ClusterApi} from "../../../../swagger/ClusterApi";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {QueryOptions} from "../../../../swagger/QueryOptions";
import {QUERYOP} from "../../../../swagger/QUERYOP";
import {PrognetDeviceApi} from "../../../../swagger/PrognetDeviceApi";
import {PrognetDeviceRequest} from "../../../../swagger/PrognetDeviceRequest";
import {LocationInfo} from "../../../../swagger/LocationInfo";
import {AddressInfo} from "../../../../swagger/AddressInfo";
import {SWITCHMODE} from "../../../../swagger/SWITCHMODE";
import {PkiApi} from "../../../../swagger/PkiApi";
import {CertificateRequestDTO} from "../../../../swagger/CertificateRequestDTO";
import {CERTIFICATETYPE} from "../../../../swagger/CERTIFICATETYPE";
import {CertificateRequest} from "../../../../swagger/CertificateRequest";
import {SwitchRequest} from "../../../../swagger/SwitchRequest";
import {DEVICETYPE} from "../../../../swagger/DEVICETYPE";
import {TopologyApi} from "../../../../swagger/TopologyApi";

declare var saveAs: any;

export enum DEVICEEDITPOPUPMODE {
    TOPOLOGY,
    DEVICEREGISTRY
}

@Component({
    moduleId: module.id,
    selector: 'SwitchEditPopup2',
    templateUrl: 'SwitchEditPopup.html',
    providers: [PkiApi]
})
export class SwitchEditPopup2 extends BasePopupEditPage<SwitchDTO> implements OnInit, AfterViewInit, OnDestroy {
    UI_SECURITY_LEVELS = UI_SECURITY_LEVELS;
    OFFLINEMODE = OFFLINEMODE;
    CONNECTIONMODE = CONNECTIONMODE;
    DEVICEEDITPOPUPMODE = DEVICEEDITPOPUPMODE;
    DEVICETYPE = DEVICETYPE;
    SWITCHMODE = SWITCHMODE;

    controllers: Array<ControllerNodeDTO> = [];
    clusters: Array<ClusterDTO> = [];
    // locationx;
    // locationy;
    selectedCluster;
    public mode;
    ipCheck = "";

    constructor(public controllerApi: ControllerApi,
                public changeDetector: ChangeDetectorRef,
                public prognetDeviceApi: PrognetDeviceApi,
                public clusterApi: ClusterApi,
                public pkiApi: PkiApi,
                public topologyApi: TopologyApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.mode = (this.data as any).mode == DEVICEEDITPOPUPMODE.TOPOLOGY ? DEVICEEDITPOPUPMODE.TOPOLOGY : DEVICEEDITPOPUPMODE.DEVICEREGISTRY;
        this.data = (this.data as any).mode == DEVICEEDITPOPUPMODE.TOPOLOGY ? (this.data as any).switchData : this.data;
        this.isNewItem = !this.data.id;
        this.setI18NKey('network_vis.controller_management.switchSettings.edit');

        this.setFormActions([
            this.createAction('dialogs.actions.ok', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
        this.fetchClusters();
        if (!this.data.location)
            this.data.location = <LocationInfo>{};
        if (!this.data.address)
            this.data.address = <AddressInfo>{};
        if (this.data.deviceType == undefined)
            this.data.deviceType = "OVSDB";
        if (this.data.address && this.data.address.ipv4) {
            this.ipCheck = this.data.address.ipv4;
        }
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            $("[name='dpdk']").bootstrapSwitch('state', !!this.data.dpdk).on('switchChange.bootstrapSwitch', (event, state) => {
                this.data.dpdk = state;
                this.changeDetector.detectChanges();
            });
            $("[name='ssl']").bootstrapSwitch('state', !!this.data.isSSLSupported).on('switchChange.bootstrapSwitch', (event, state) => {
                this.data.isSSLSupported = state;
                this.changeDetector.detectChanges();
            });

            /*$(".deviceType", this.$container)
                .bootstrapSwitch('state', this.data.deviceType == "OVSDB")
                .on('switchChange.bootstrapSwitch', (event, state) => {
                    this.data.deviceType = state ? "OVSDB" : "";
                    this.changeDetector.detectChanges();
                });*/



            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    fetchClusters() {
        let request = this.baseServices.apiHelper.genFullListRequest();
        this.clusterApi
            .clusterSearchPOST(request)
            .subscribe((res: ControllerNodeListResponse) => {
                if (this.baseServices.uiHelper.processResponse(res)) {
                    this.clusters = res.data.list;
                    this.changeDetector.detectChanges();
                    this.clusters[0] && this.clusterSelected(this.clusters[0].id);
                    this.selectedCluster = this.clusters[0];
                }
            });
    }

    clusterSelected(clusterId) {
        this.fetchControllers(clusterId);
    }

    fetchControllers(clusterId) {
        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>{
                queryOptions: <QueryOptions> {
                    operator: QUERYOP.VALUE,
                    fieldValue: clusterId,
                    fieldName: "clusterId"
                },
                // pageSize:10,
                startPage: 0
            }
        });
        this.controllerApi
            .controllerSearchPOST(request)
            .subscribe((res: ControllerNodeListResponse) => {
                if (this.baseServices.uiHelper.processResponse(res)) {
                    this.controllers = res.data.list;
                    this.changeDetector.detectChanges();

                    $('.slaves', this.$container)
                        .select2()
                        .val(this.data.slaveControllerIds)
                        .trigger('change');
                }
            });
    }

    setIp(e) {
        this.data.address.ipv4 = e;
    }

    setMac(e) {
        this.data.address.mac = e;
    }

    save() {
        //INFO: Geçici olarak iptal edilmiştir. Ekranda olmayan componentler için validation hatası veriliyor -Yildiray
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        if (this.mode == DEVICEEDITPOPUPMODE.DEVICEREGISTRY) {
            if (this.ipCheck !== this.data.address.ipv4) {
                let cert: CertificateRequestDTO = <CertificateRequestDTO>{};

                cert.nodeType = CERTIFICATETYPE.SWITCH;
                cert.name = this.data.name;
                cert.address = this.data.address;

                let requestCert = this.baseServices.apiHelper.genRequest({
                    data: <CertificateRequestDTO> cert
                });

                this.pkiApi
                    .pkiNodeCertCreatePOST(<CertificateRequest>requestCert)
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
                                saveAs(blob, "switch_" + this.data.name + ".zip");
                            }
                        },
                        (error: any) => {
                            this.baseServices.uiHelper.processResponse(error._body);
                        }
                    );
            }

            this.data = this.baseServices.apiHelper.genDTO(this.data);

            if (this.data.deviceType == "CLI") {
                $("[name='dpdk']").bootstrapSwitch('toggleState', false);
                this.data.dpdk = false;
            }

            if (!this.data.id && this.data.deviceType == "NETCONF") {
                delete this.data.datapathId;
            }

            this.data.mode = SWITCHMODE.ACTIVE;
            this.data.slaveControllerIds = $('.slaves', this.$container).select2().val();
            this.data = this.baseServices.apiHelper.genDTO(this.data);
            this.data.mode = SWITCHMODE.ACTIVE;
            this.data.slaveControllerIds = $('.slaves', this.$container).select2().val();

            // this.data.location.x = this.locationx;
            // this.data.location.y = this.locationy;

            let request = this.baseServices.apiHelper.genRequest({
                data: this.baseServices.apiHelper.genDTO(<SwitchDTO>this.baseServices.utils.optimizeDTO(SwitchDTODef, this.data))
            });
            request.data.timestamp = new Date();

            this.prognetDeviceApi
                .deviceSavePOST(<PrognetDeviceRequest>request)
                .subscribe(
                    (res) => {
                        if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
                            this.close(true);
                        }
                    },
                    (error: any) => {
                        this.baseServices.uiHelper.processResponse(error._body);
                    }
                );
        } else {
            let request = this.baseServices.apiHelper.genRequest({
                data: this.baseServices.apiHelper.genDTO(<SwitchDTO>this.baseServices.utils.optimizeDTO(SwitchDTODef, this.data))
            });
            request.data.timestamp = new Date();

            this.topologyApi
                .topologySwitchSavePOST(<SwitchRequest>request)
                .subscribe(
                    (res) => {
                        if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
                            //debugger;
                            this.close(true, this.data);
                        }
                    },
                    (error: any) => {
                        this.baseServices.uiHelper.processResponse(error.body); //JSON parsing is handled in the function now
                    }
                );
        }

    }
}
