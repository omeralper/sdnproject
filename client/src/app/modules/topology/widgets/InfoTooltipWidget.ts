/**
 * Created by ekinca on 23.06.2016.
 */
import {
    Component,
    OnInit,
    OnDestroy,
    OnChanges,
    AfterViewInit,
    ElementRef,
    Input,
    ChangeDetectorRef
} from '@angular/core';
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";
import {DocumentConverter} from "../../DocumentConverter";
import {AddressInfo} from "../../../swagger/AddressInfo";
import {SharedService} from "../../SharedService";
import {DEVICETYPE} from "../../../swagger/DEVICETYPE";
import {NETWORKDEVICETYPE} from "../../../swagger/NETWORKDEVICETYPE";
import {TopologyData} from "../topology.config";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {HostDTO} from "../../../swagger/HostDTO";
import {LinkDTO} from "../../../swagger/LinkDTO";
import {ControllerDTO} from "../../../swagger/ControllerDTO";
import {NetworkDeviceDTO} from "../../../swagger/NetworkDeviceDTO";
import {StatsDetail} from "../../../swagger/StatsDetail";
import {i18nModule} from "../../i18nModule";
import {SECURITYMODE} from "../../../swagger/SECURITYMODE";
import {IconOptions} from "../../UIHelper";
import {HOSTSTATUS} from "../../../swagger/HOSTSTATUS";
import {SwitchPortStatsPopup} from "../switch/SwitchPortStatsPopup/SwitchPortStatsPopup";
import {SwitchFlowsPopup} from "../switch/SwitchFlowsPopup/SwitchFlowsPopup";
import {tplDomain} from "../NetworkElementDefinitions/tplDomain";
import {DomainDTO} from "../../../swagger/DomainDTO";
import {SdnipRouterDTO} from "../../../swagger/SdnipRouterDTO";
import {tplCloud} from "../NetworkElementDefinitions/tplCloud";
import {WanPortInfoDTO} from "../../../swagger/WanPortInfoDTO";
import {CREATESHOWENUM} from "../view/TopologyPage";
import {Router} from "@angular/router";
import {LocalSwitchDTO} from "../../../commons/LocalClasses/LocalSwitchDTO";
import {UserGraphPopup} from "../../statistics/UserGraph/UserGraphPopup";
import {LinkGraphPopup} from "../../statistics/LinkGraph/LinkGraphPopup";
import {SwitchGraphPopup} from "../../statistics/SwitchGraph/SwitchGraphPopup";

//Example infoTooltipData = {mode:tooltipMode.TOPOLOGYELEMENTS, data:d};

export enum tooltipMode {
    MOUSEOUT,
    TOPOLOGYELEMENTS,
    CONTROLLER
}

@Component({
    moduleId: module.id,
    selector: 'info-tooltip-widget',
    styleUrls: ['./InfoTooltipWidget.css'],
    templateUrl: './InfoTooltipWidget.html'
})
export class InfoTooltipWidget extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    @Input() infoTooltipData;
    @Input() topologyData: TopologyData;
    TOPOLOGYTYPE = TOPOLOGYTYPE;

    public statsTooltipDiv;

    public info: IInfoData;
    private mouseOutTimeout: any;

    public isShowMore: boolean = false;
    //public isRealtime: boolean = true;


    constructor(public changeDetection: ChangeDetectorRef,
                public elementRef: ElementRef,
                public router: Router,
                public documentConverter: DocumentConverter,
                public sharedService: SharedService,
                baseServices: PageServices) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.topology.node_properties');

        let s = this.sharedService.infoTooltipEvent.subscribe((e) => {
            if (e.mode === tooltipMode.CONTROLLER) {
                this.infoTooltipData = {mode: e.mode, data: e.data};
                this.prepareTooltipData();
            } else {
                this.mouseOutFunction();

            }
        });
        this.subscriptions.push(s);
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        if (e.infoTooltipData && e.infoTooltipData.currentValue) {
            if (e.infoTooltipData.currentValue.mode === tooltipMode.MOUSEOUT) {
                this.mouseOutFunction();
            } else if (e.infoTooltipData.currentValue.mode === tooltipMode.TOPOLOGYELEMENTS) {
                this.prepareTooltipData();
            } else {
                console.log("unknown tooltip mode");
            }
        } else {
            console.log("currentValue is not defined");
        }
    }

    tableFieldMaker(tableFields, d) {
        var tableString = "";
        for (let i = 0; i < tableFields.length; i++) {
            if (tableFields[i] == "id" && d.deviceInfo && d.deviceInfo.type == DEVICETYPE.IP_PHONE) {
                if (d.port && d.port.address && d.port.address.ipv4) {
                    tableString += "<br><span class=tool-info-head>" + $.t("network_vis.topology.node_properties.ip") + ":</span> " + (d as HostDTO).port.address.ipv4;
                } else {
                    tableString += "<br><span class=tool-info-head>" + $.t("network_vis.topology.node_properties.ip") + ":</span> -";
                }
            } else {
                if (d[tableFields[i]])
                    tableString += "<br><span class=tool-info-head>" + $.t("network_vis.topology.node_properties." + tableFields[i]) + ":</span> " + d[tableFields[i]];
            }

        }
        return tableString;
    }

    mouseOutFunction() {
        if (this.statsTooltipDiv) {
            clearTimeout(this.mouseOutTimeout);
            this.mouseOutTimeout = setTimeout(() => {
                this.statsTooltipDiv.stop().animate({opacity: 0}, 1000, () => {
                    this.info = null;
                });
            }, 5000);
        }
    }

    prepareTooltipData() {
        clearTimeout(this.mouseOutTimeout);
        let d = this.infoTooltipData.data;

        if (d && this.statsTooltipDiv) {
            let newInfo;
            if (d.type === "Switch" && d.deviceInfo && d.deviceInfo.type) {

                newInfo = this.renderSwitchTable(<SwitchDTO>d);

            } else if (this.documentConverter.isHost(d.type)) {

                newInfo = this.renderHostTable(<HostDTO>d);

            } else if (d.type === "Link" && d.srcPort && d.destPort) {

                newInfo = this.renderLinkTable(<LinkDTO>d);

            } else if (d.isController) {

                newInfo = this.renderControllerTable(<ControllerDTO>d);

            } else if (this.documentConverter.isNetworkDevice(d.type)) {

                newInfo = this.renderNetworkDeviceTable(<NetworkDeviceDTO>d);

            } else if (this.documentConverter.isDomain(d.type)) {

                newInfo = this.renderDomainTable(d);

            } else if (this.documentConverter.isCloud(d.type)) {

                newInfo = this.renderCloudTable(d);

            } else if (this.documentConverter.isBgpRouter(d.type)) {

                newInfo = this.renderBgpRouterTable(d);
            }

            if (is.existy(newInfo)) {
                this.info = newInfo;
                this.changeDetection.detectChanges();
                this.statsTooltipDiv.stop().css("opacity", 0.9);
                this.baseServices.uiHelper.populateTooltips(this.statsTooltipDiv);
            }
        }
    }

    public renderAddresses(address: AddressInfo, useFirstAvailable: boolean = false) {
        let strBufer = [];
        if (is.existy(address)) {
            //'mac', mac is used in ID field so no need to show here
            let fields = ['ipv4', 'ipv6'];
            for (let idx in fields) {
                let fld = fields[idx];
                if (is.existy(address[fld])) {
                    strBufer.push(address[fld]);
                    if (useFirstAvailable) break;
                }
            }
            ;
        }
        return is.not.empty(strBufer) ? strBufer.join('/') : "";
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            this.statsTooltipDiv = $(".info-tooltip-widget");
            this.statsTooltipDiv.on("mouseover", () => {
                clearTimeout(this.mouseOutTimeout);
            }).on("mouseout", () => {
                this.mouseOutFunction();
            });
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        if (this.statsTooltipDiv) {
            this.statsTooltipDiv
                .off("mouseover")
                .off("mouseout");
        }
        super.ngOnDestroy();
    }

    nodeEditorShowHideFlag() {
        return this.topologyData && this.topologyData.type != TOPOLOGYTYPE.PHYSICAL && !this.topologyData.isMappedVersionShown && (this.topologyData.tabType == CREATESHOWENUM.CREATE || this.topologyData.tabType == CREATESHOWENUM.EDIT);
    }

    public renderSwitchTable(switchDTO: SwitchDTO): IInfoData {
        let infoPanel: InfoPanelBuilder = new InfoPanelBuilder(this);
        let alarmQuery = [switchDTO.name , switchDTO.id];

        infoPanel.setDTO(switchDTO);
        infoPanel.setGraphLink(SwitchGraphPopup);

        infoPanel.setTitle(switchDTO.name || switchDTO.id)
            .setSubTitle(this.renderAddresses(switchDTO.address))
            .setUtilization(switchDTO.utilization || (<any>switchDTO).load)
            .setStatusIcon("SWITCHSTATUS", switchDTO.status)
            .setSwitchModeIcon("SWITCHMODE", switchDTO.mode);

        if (is.existy(switchDTO.address)) {
            alarmQuery.push(switchDTO.address.ipv4, switchDTO.address.ipv6, switchDTO.address.mac);
        }

        //infoPanel.entityRows(["id","managementPort"], switchDTO);
        // if (is.existy(switchDTO.managementPort)) {
        //     infoPanel.entityRow("id", switchDTO.id +":"+switchDTO.managementPort);
        // } else {
        infoPanel.entityRow("id", switchDTO.id);
        // }

        if (switchDTO.deviceInfo) {
            //infoPanel.setTypeIcon(<IconOptions>this.baseServices.uiHelper.getIconOptions("DEVICETYPE", switchDTO.deviceInfo.type));
            infoPanel.setTypeIcon("DEVICETYPE", switchDTO.deviceInfo.type);

            if (switchDTO.deviceInfo.type == DEVICETYPE.VIRTUAL_SWITCH) infoPanel.setMvtnIcon();

            let model = (switchDTO.deviceInfo.model && switchDTO.deviceInfo.model != "None") ? switchDTO.deviceInfo.model : null;
            infoPanel.entityRow("device_vendor", switchDTO.deviceInfo.vendor)
                .entityRow("device_model", model, true)
                .entityRow("device_version", switchDTO.deviceInfo.swVersion, true);

            // let vendorInfo = [];
            // if (is.existy(switchDTO.deviceInfo.vendor)) vendorInfo.push(switchDTO.deviceInfo.vendor);
            // if (is.existy(switchDTO.deviceInfo.model) && switchDTO.deviceInfo.model != "None") vendorInfo.push(switchDTO.deviceInfo.model);
            // if (is.existy(switchDTO.deviceInfo.swVersion)) vendorInfo.push("(v" + switchDTO.deviceInfo.swVersion + ")");
            // if (is.not.empty(vendorInfo)) infoPanel.entityRow("device_model", vendorInfo.join(' '));
        }

        if (switchDTO.securityMode == SECURITYMODE.TLS) {
            infoPanel.setSecurityIcon();
        }

        if (is.existy(switchDTO.supports) && is.existy(switchDTO.supports.openFlow)) {
            infoPanel.entityRow("openflow_version", switchDTO.supports.openFlow);
        }

        infoPanel.entityRowEnum("CONNECTIONMODE", switchDTO.connectionMode, true)
            .entityRowEnum("OFFLINEMODE", switchDTO.offlineMode, true)
            .entityRowEnum("SWITCHMODE", switchDTO.mode, true);

        infoPanel.entityRows(["securityLevel", "activeSince", "powerUsage", "managementPort"], switchDTO, true);

        infoPanel.entityRow("flows", switchDTO.flows, false, () => {
            if (this.topologyData.type == TOPOLOGYTYPE.VIRTUAL) {
                let localSwitchDTO:LocalSwitchDTO = this.baseServices.apiHelper.cloneObject(switchDTO);
                localSwitchDTO.mvtnNetworkId = this.topologyData.id;
                this.sharedService.showModal(SwitchFlowsPopup, localSwitchDTO);
            } else {
                this.sharedService.showModal(SwitchFlowsPopup, switchDTO);
            }
        });

        //infoPanel.entityRow("bandwidth", this.documentConverter.formatBandwidth(switchDTO.bandwidth.current));
        if (is.existy(switchDTO.totalBandwidth)) infoPanel.entityRow("totalBandwidth", this.documentConverter.formatBandwidth(switchDTO.totalBandwidth), true);


        if (is.existy(switchDTO.portInfo)) {
//            entityInfo.push(this.entityRow("portInfo","<span style='color: green'>" + (switchDTO.portInfo.activePorts || 0) + "</span>/<span style='color: orange'>" + (switchDTO.portInfo.passivePorts || 0) + "</span>/" + (switchDTO.portInfo.totalPorts || 0)));
            infoPanel.entityRow("portInfo",
                (switchDTO.portInfo.activePorts || 0) + " / " + (switchDTO.portInfo.passivePorts || 0) + " / " + (switchDTO.portInfo.totalPorts || 0),
                false,
                () => {
                    this.sharedService.showModal(SwitchPortStatsPopup, switchDTO);
                }
            );
        }

        this.addAlarmLink(infoPanel,alarmQuery);

        if (is.existy(switchDTO.stats)) {
            infoPanel.statsRows(switchDTO.stats);
        }

        infoPanel.addModeIcon("isControllerDevice", switchDTO.isControllerDevice)
            .addModeIcon("isMeterEnabled", switchDTO.isMeterEnabled)
            .addModeIcon("powerSaverModeEnabled", switchDTO.powerSaverModeEnabled)
            .addModeIcon("isBlockedForMvtn", switchDTO.isBlockedForMvtn)
            .addModeIcon("isEdgeSwitch", switchDTO.isEdgeSwitch)
            .addModeIcon("dpdk", switchDTO.dpdk);

        return infoPanel.getInfoData();
    }

    public renderHostTable(hostDTO: HostDTO): IInfoData {
        let infoPanel: InfoPanelBuilder = new InfoPanelBuilder(this);
        let alarmQuery = [];

        infoPanel.setDTO(hostDTO);
        infoPanel.setGraphLink(UserGraphPopup);

        alarmQuery.push(hostDTO.id);
        alarmQuery.push(hostDTO.name);
        infoPanel.setTitle(hostDTO.name || hostDTO.id);

        if(is.existy(hostDTO.hostName)) {
            infoPanel.entityRow("name", hostDTO.hostName);
        }
        infoPanel.entityRow("id", hostDTO.id);

        if (is.existy(hostDTO.port)) {
            if (is.existy(hostDTO.port.address)) {
                alarmQuery.push(this.renderAddresses(hostDTO.port.address).split('/'));
                infoPanel.setSubTitle(this.renderAddresses(hostDTO.port.address));
                if (is.existy(hostDTO.port.address.mac)) {
                    alarmQuery.push (hostDTO.port.address.mac);
                    infoPanel.entityRow("mac", hostDTO.port.address.mac);
                }
            }
        }

        infoPanel.setUtilization((<any>hostDTO).load);
        infoPanel.setStatusIcon("HOSTSTATUS", hostDTO.status);

        if (hostDTO.vnfdType) {
            infoPanel.setTypeIcon("HOSTTYPE", hostDTO.vnfdType);
        } else {
            if (hostDTO.type) {
                infoPanel.setTypeIcon("HOSTTYPE", hostDTO.type);
            }
        }

        if (is.not.empty(hostDTO.networks)) {
            infoPanel.setMvtnIcon();
            infoPanel.entityRow("vtn", hostDTO.networks.map((v)=>v.name).join(','));
        }

        if (hostDTO.status == HOSTSTATUS.GRANTED) {
            infoPanel.setSecurityIcon(<IconOptions>{icon: "fa fa-id-card-o", title: this.t("labels.host_granted")});
        }


        if (is.existy(hostDTO.userInfo)) {
            let userInfo = [];
            if (is.existy(hostDTO.userInfo.name)) userInfo.push(hostDTO.userInfo.name);
            if (is.existy(hostDTO.userInfo.surname)) userInfo.push(hostDTO.userInfo.surname);
            if (is.existy(hostDTO.userInfo.userName)) userInfo.push("(" + hostDTO.userInfo.userName + ")");
            if (is.not.empty(userInfo)) infoPanel.entityRow("userInfo", userInfo.join(' '));
        }

        infoPanel.entityRows(["securityLevel", "activeSince", "lastSeen"], hostDTO);

        if (is.existy((<any>hostDTO).bandwidth)) infoPanel.entityRow("totalBandwidth", this.documentConverter.formatBandwidth((<any>hostDTO).bandwidth));

        if (is.existy(hostDTO.port)) {

            infoPanel.entityRow("labels.switch", hostDTO.port.id);
            infoPanel.entityRow("port_number", hostDTO.port.number);
            infoPanel.entityRowEnums("port_states", hostDTO.port.states);
            infoPanel.entityRowEnums("port_configs", hostDTO.port.configs);
            if (is.existy(hostDTO.port.speed)) infoPanel.entityRow("port_speed", this.documentConverter.formatRate(hostDTO.port.speed));
            if (is.existy(hostDTO.port.averageSpeed)) infoPanel.entityRow("port_avg_speed", this.documentConverter.formatRate(hostDTO.port.averageSpeed));

            if (is.existy(hostDTO.port.stats)) {
                infoPanel.statsRows(hostDTO.port.stats);
            }

        }

        this.addAlarmLink(infoPanel,alarmQuery);

        return infoPanel.getInfoData();
    }

    public renderLinkTable(linkDTO: LinkDTO): IInfoData {
        let infoPanel: InfoPanelBuilder = new InfoPanelBuilder(this);
        let downlinkDTO: LinkDTO = ((<any>linkDTO).reverse) || {};
        let alarmQuery = [];

        infoPanel.setDTO(linkDTO);
        infoPanel.setGraphLink(LinkGraphPopup);

        //infoPanel.setTitle(linkDTO.id || (<any>linkDTO).linkId || "");
        infoPanel.entityRows(["id", "queueId"], linkDTO);

        let linkTypeList = [];
        if (is.existy(linkDTO.srcPort)) {
            let portString = linkDTO.srcPort.id + ":" + linkDTO.srcPort.number;
            infoPanel.entityRow("source_port", portString);
            linkTypeList.push(linkDTO.srcPort.linkType);
            infoPanel.setTitle(portString);
            alarmQuery.push(linkDTO.srcPort.id);
        } else {
            infoPanel.setTitle("");
        }

        if (is.existy(linkDTO.destPort)) {
            let portString = linkDTO.destPort.id + ":" + linkDTO.destPort.number;
            infoPanel.entityRow("target_port", portString);
            linkTypeList.push(linkDTO.destPort.linkType);
            infoPanel.setSubTitle(portString);
            alarmQuery.push(linkDTO.destPort.id);
        } else {
            infoPanel.setSubTitle("");
        }

        infoPanel.entityRowEnums("LINKTYPE", linkTypeList);

        let setUtil = (is.existy(downlinkDTO.bandwidthUtilization)) ? (linkDTO.bandwidthUtilization + downlinkDTO.bandwidthUtilization) / 2 : linkDTO.bandwidthUtilization;
        infoPanel.setUtilization((Number(setUtil) * 100).toString());
        infoPanel.setStatusIcon("LINKSTATUS", linkDTO.status || downlinkDTO.status);
        infoPanel.setTypeIcon(<IconOptions>{icon: "fa fa-arrows-h", title: this.t("labels.link")});

        if (linkDTO.topologyId != "DEFAULT") {
            infoPanel.setMvtnIcon();
        }

        // if (linkDTO.??){
        //     infoPanel.setSecurityIcon();
        // }

        infoPanel.entityRows(["signalQuality", "securityLevel"], linkDTO);

        this.addAlarmLink(infoPanel,alarmQuery,' & ');

        infoPanel.addModeIcon("measureDelay", linkDTO.measureDelay)
            .addModeIcon("blocked", linkDTO.blocked)
            .addModeIcon("isWanLink", linkDTO.isWanLink);

        if (is.existy(linkDTO.srcPort)) {
            if (is.existy(downlinkDTO.srcPort)) {
                infoPanel.linkRows(linkDTO, downlinkDTO);
            } else {
                infoPanel.linkRows(linkDTO);
            }
        }

        return infoPanel.getInfoData();
    }

    public renderControllerTable(controllerDTO: ControllerDTO): IInfoData {
        let infoPanel: InfoPanelBuilder = new InfoPanelBuilder(this);
        let alarmQuery = [controllerDTO.id,controllerDTO.name];

        if (is.existy(controllerDTO.name)) {
            infoPanel.setTitle(controllerDTO.name);
            infoPanel.setSubTitle(this.renderAddresses(controllerDTO.address, true));
            infoPanel.entityRow("ip", this.renderAddresses(controllerDTO.address));
        } else if (is.existy(controllerDTO.address)) {
            infoPanel.setTitle(this.renderAddresses(controllerDTO.address, true));
            infoPanel.entityRow("ip", this.renderAddresses(controllerDTO.address));
            alarmQuery.push(controllerDTO.address.ipv4);
            alarmQuery.push(controllerDTO.address.ipv6);
            alarmQuery.push(controllerDTO.address.mac);
        } else {
            infoPanel.setTitle(this.t("labels.controller"));
        }

        infoPanel.setTypeIcon(<IconOptions>{icon: "fa fa-legal", title: this.t("labels.controller")});

        infoPanel.setStatusIcon("CONTROLLERSTATE", controllerDTO.controllerState);

        //if (controllerDTO.securityMode == SECURITYMODE.TLS) {
        infoPanel.setSecurityIcon("SECURITYMODE", controllerDTO.securityMode);
        //}

        //infoPanel.setMvtnIcon();
        infoPanel.entityRowEnum("CONTROLLERSTATE", controllerDTO.controllerState);
        infoPanel.entityRowEnum("SECURITYMODE", controllerDTO.securityMode);

        infoPanel.entityRows(["deviceCount", "openflowVersions"], controllerDTO);

        this.addAlarmLink(infoPanel,alarmQuery);

        return infoPanel.getInfoData();
    }

    public renderNetworkDeviceTable(networkDeviceDTO: NetworkDeviceDTO): IInfoData {
        let infoPanel: InfoPanelBuilder = new InfoPanelBuilder(this);
        let deviceIP, deviceIPs;
        let deviceMac;
        let alarmQuery = [];

        if (is.existy(networkDeviceDTO.port) && is.existy(networkDeviceDTO.port.address)) {
            deviceIP = this.renderAddresses(networkDeviceDTO.port.address, true);
            deviceIPs = this.renderAddresses(networkDeviceDTO.port.address);
            alarmQuery.push(deviceIPs.split('/'));
        } else {
            deviceIP = deviceIPs = networkDeviceDTO.ip;
            alarmQuery.push(deviceIP);
        }

        if (is.existy(networkDeviceDTO.port) && is.existy(networkDeviceDTO.port.address) && is.existy(networkDeviceDTO.port.address.mac)) {
            deviceMac = networkDeviceDTO.port.address.mac;
        } else {
            deviceMac = networkDeviceDTO.mac;
        }

        alarmQuery.push(deviceMac);

        if (is.existy((<any>networkDeviceDTO).name)) {
            infoPanel.setTitle((<any>networkDeviceDTO).name);
            infoPanel.setSubTitle(deviceIP || deviceMac);
            alarmQuery.push((<any>networkDeviceDTO).name);
        } else if (is.existy(deviceIP) || is.existy(deviceMac)) {
            infoPanel.setTitle(deviceIP || deviceMac);
            if (is.existy(deviceIP) && is.existy(deviceMac)) infoPanel.setSubTitle(deviceMac);
        } else {
            let typeName = this.baseServices.uiHelper.getIconTitle("NETWORKDEVICETYPE", networkDeviceDTO.type);
            infoPanel.setTitle(typeName || this.t("labels.network_device"));
            alarmQuery.push(typeName);
        }

        infoPanel.setTypeIcon("NETWORKDEVICETYPE", networkDeviceDTO.type);
        infoPanel.setStatusIcon("NETWORKDEVICESTATUS", networkDeviceDTO.status);

        // if (networkDeviceDTO.securityMode == SECURITYMODE.TLS) {
        //     infoPanel.setSecurityIcon();
        // }

        if (networkDeviceDTO.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY) {
            infoPanel.setMvtnIcon();
        }

        infoPanel.entityRow("ip", deviceIPs);
        infoPanel.entityRow("mac", deviceMac);
        infoPanel.entityRow("vlanid", networkDeviceDTO.vlanid);

        if (is.existy(networkDeviceDTO.port)) {
            //if (is.existy(networkDeviceDTO.port.id)) {
            // if (is.existy(networkDeviceDTO.port.number)) {
            //     infoPanel.entityRow("port", networkDeviceDTO.port.id + ":" + networkDeviceDTO.port.number);
            // } else {
            //     infoPanel.entityRow("port", networkDeviceDTO.port.id);
            // }
            //}

            infoPanel.entityRow("labels.switch", networkDeviceDTO.port.id);
            infoPanel.entityRow("port_number", networkDeviceDTO.port.number);

            infoPanel.entityRowEnums("port_states", networkDeviceDTO.port.states);
            infoPanel.entityRowEnums("port_configs", networkDeviceDTO.port.configs);

            if (is.existy(networkDeviceDTO.port.speed)) infoPanel.entityRow("port_speed", this.documentConverter.formatRate(networkDeviceDTO.port.speed));
            if (is.existy(networkDeviceDTO.port.averageSpeed)) infoPanel.entityRow("port_avg_speed", this.documentConverter.formatRate(networkDeviceDTO.port.averageSpeed));

            if (is.existy(networkDeviceDTO.port.stats)) {
                infoPanel.statsRows(networkDeviceDTO.port.stats);
            }
        }

        this.addAlarmLink(infoPanel,alarmQuery);

        return infoPanel.getInfoData();
    }

    renderDomainTable(domainDTO: DomainDTO) {
        let infoPanel: InfoPanelBuilder = new InfoPanelBuilder(this);

        infoPanel.setTitle(domainDTO.name || domainDTO.id)
            .setStatusIcon("DOMAINSTATUS", domainDTO.status);

        infoPanel.entityRow("id", domainDTO.id);

        infoPanel.entityRows(["securityLevel", "activeSince"], domainDTO, true);

        return infoPanel.getInfoData();
    }

    renderCloudTable(cloudDTO: WanPortInfoDTO) {
        let infoPanel: InfoPanelBuilder = new InfoPanelBuilder(this);

        infoPanel.setTitle(cloudDTO.name || cloudDTO.id);
        // .setStatusIcon("WANSTATUS", cloudDTO.status); //This doesn't work well with the static 18px margin-left from .dashboard-stat2 .display .icon>i.info-icon-status

        infoPanel.entityRow("id", cloudDTO.id);

        infoPanel.entityRows(["securityLevel", "activeSince"], cloudDTO, true);

        return infoPanel.getInfoData();
    }

    renderBgpRouterTable(routerDTO: SdnipRouterDTO) {
        let infoPanel: InfoPanelBuilder = new InfoPanelBuilder(this);

        infoPanel.setTitle(routerDTO.name || routerDTO.id);

        infoPanel.entityRow("id", routerDTO.id);

        infoPanel.entityRows(["securityLevel", "activeSince"], routerDTO, true);

        infoPanel.entityRow("ip", routerDTO.ip);
        infoPanel.entityRow("as_number", routerDTO.asNumber);
        infoPanel.entityRow("neighbour_list", routerDTO);

        return infoPanel.getInfoData();
    }

    public entityClicked(entityInfo?: IEntityInfo) {
        if (is.existy(entityInfo) && is.existy(entityInfo.callback)) {
            entityInfo.callback();
        }
    }

    public toggleDetails() {
        if (is.existy(this.info) && this.info.hasOptionalEntities) {
            this.isShowMore = !this.isShowMore;
            this.changeDetection.detectChanges();
        }
    }

    private addAlarmLink(infoPanel: InfoPanelBuilder, alarmQuery: Array<any>,operator=' | ') {
        let query = alarmQuery.filter( i => (is.existy(i) && is.not.empty(i))).join(operator);
        infoPanel.entityRow("labels.alarms",
            (this.t('labels.click_for_more')),
            false,
            () => {
                //this.sharedService.showModal(SwitchPortStatsPopup, switchDTO);
                this.router.navigate(['/alarms/alarmlist', {type: 'ALARM', query: query }]);
            }
        );
    }

    showGraphs(info) {
        if (is.existy(this.info.statGraphLink) && is.existy(this.info.dto)) {
            this.sharedService.showModal(this.info.statGraphLink, this.info.dto);
        }
    }
}

interface IInfoData {
    title: string;
    subTitle?: string;
    icons?: IIconList;

    modeIcons?: Array<IconOptions>;
    utilization?: string;

    hasOptionalEntities: boolean;
    entityInfo?: Array<IEntityInfo>;
    dualStatsInfo?: Array<IStatInfo>;
    singleStatsInfo?: Array<IStatInfo>;
    statGraphLink?:any;
    dto?:any;
}

interface IIconList {
    typeIcon: IconOptions;
    statusIcon?: IconOptions;
    securityIcon?: IconOptions;
    mvtnIcon?: IconOptions;
    switchModeIcon?: IconOptions;
}

interface IEntityInfo {
    name: string;
    value: string;
    isOptional?: boolean;
    callback?: () => void;
}

interface IStatInfo {
    icon: IconOptions;
    source: IStatItem;
    target?: IStatItem;
}

interface IStatItem {
    sent: string;
    recv?: string;
}

class InfoPanelBuilder {
    private info: IInfoData;

    constructor(private parent: InfoTooltipWidget) {
        this.info = <IInfoData>{
            hasOptionalEntities: false,
            icons: <IIconList>{},
            modeIcons: [],
            title: ''
        };
    }

    setTitle(title: string): InfoPanelBuilder {
        this.info.title = this.parent.baseServices.uiHelper.renderText(title, "-", 23);
        return this;
    }

    setSubTitle(subTitle: string): InfoPanelBuilder {
        this.info.subTitle = this.parent.baseServices.uiHelper.renderText(subTitle, "-", 100);
        return this;
    }

    setUtilization(utilization: string): InfoPanelBuilder {
        this.info.utilization = utilization;
        return this;
    }

    private resolveIcon(iconData: string | IconOptions, typeValue?: any): IconOptions {
        if (is.string(iconData)) {
            return is.existy(typeValue) ? <IconOptions>this.parent.baseServices.uiHelper.getIconOptions(iconData, typeValue) : null
        } else {
            return <IconOptions>iconData;
        }
    }

    setTypeIcon(iconData: string | IconOptions, typeValue?: any): InfoPanelBuilder {
        this.info.icons.typeIcon = this.resolveIcon(iconData, typeValue);
        return this;
    }

    setStatusIcon(iconData: string | IconOptions, typeValue?: any): InfoPanelBuilder {
        this.info.icons.statusIcon = this.resolveIcon(iconData, typeValue);
        return this;
    }

    setSwitchModeIcon(iconData: string | IconOptions, typeValue?: any): InfoPanelBuilder {
        this.info.icons.switchModeIcon = this.resolveIcon(iconData, typeValue);
        return this;
    }

    setMvtnIcon(iconData?: string | IconOptions, typeValue?: any): InfoPanelBuilder {
        if (is.existy(iconData)) {
            this.info.icons.mvtnIcon = this.resolveIcon(iconData, typeValue);
        } else {
            this.info.icons.mvtnIcon = {
                icon: "fa fa-share-alt-square font-yellow-gold",
                title: this.parent.t("labels.virtual")
            };
        }
        return this;
    }

    setSecurityIcon(iconData?: string | IconOptions, typeValue?: any): InfoPanelBuilder {
        if (is.existy(iconData)) {
            this.info.icons.securityIcon = this.resolveIcon(iconData, typeValue);
        } else {
            this.info.icons.securityIcon = {
                icon: "fa fa-lock font-blue-sharp",
                title: this.parent.baseServices.i18n.t("enums.SECURITYMODE.TLS.title")
            };
        }
        return this;
    }

    entityRow(name, value, isOptional: boolean = false, callback?: () => void): InfoPanelBuilder {

        if (is.existy(value) && is.not.empty(value)) {
            let entityInfo = this.info.entityInfo || (this.info.entityInfo = []);
            this.info.hasOptionalEntities = this.info.hasOptionalEntities || isOptional;
            entityInfo.push({
                name: this.parent.t(name),
                value: this.parent.baseServices.uiHelper.renderText(value, "-", 35),
                isOptional: isOptional,
                callback: callback
            });
        }
        return this;
    }

    entityRows(tableFields, dto, isOptional: (boolean | Array<boolean>) = false): InfoPanelBuilder {
        let checkIsOptional;
        if (is.array(isOptional)) {
            checkIsOptional = (idx) => isOptional[idx];
        } else {
            checkIsOptional = (idx) => isOptional;
        }

        for (let i = 0; i < tableFields.length; i++) {
            if (tableFields[i] == "id" && dto.deviceInfo && dto.deviceInfo.type == DEVICETYPE.IP_PHONE) {
                if (dto.port && dto.port.address && dto.port.address.ipv4) {
                    this.entityRow("ip", (dto as HostDTO).port.address.ipv4, checkIsOptional(i));
                } else {
                    //this.entityRow("ip", "-");
                }
            } else {
                if (is.existy(dto[tableFields[i]])) {
                    this.entityRow(tableFields[i], dto[tableFields[i]], checkIsOptional(i));
                }
            }
        }
        return this;
    }

    private statRow(name: string, source: StatsDetail, target?: StatsDetail): IStatInfo {
        let nameData = this.parent.t(name, {returnObjectTrees: true});

        let genStat = (stat) => {
            switch (name) {
                case "labels.stat_fields.speed":
                    if(is.existy(stat.rates) && stat.rates.sent > -1 && stat.rates.received > -1){
                        return {
                            sent: this.parent.documentConverter.formatRate(stat.rates.sent),
                            recv: this.parent.documentConverter.formatRate(stat.rates.received)
                        }
                    }else if(is.existy(stat.rates) && stat.rates.sent > -1 && !(stat.rates.received > -1)){ // dont have received
                        return{
                            sent: this.parent.documentConverter.formatRate(stat.rates.sent)
                        }
                    }
                    return null;
                case "labels.stat_fields.bytes":
                    if(is.existy(stat.bytes) && stat.bytes.sent > -1 && stat.bytes.received > -1){
                        return {
                            sent: this.parent.documentConverter.formatBytes(stat.bytes.sent),
                            recv: this.parent.documentConverter.formatBytes(stat.bytes.received)
                        }
                    }else if(is.existy(stat.bytes) && stat.bytes.sent > -1 && !(stat.bytes.received > -1)){ // dont have received
                        return{
                            sent: this.parent.documentConverter.formatBytes(stat.bytes.sent)
                        }
                    }
                    return null;
                case "labels.stat_fields.packets":
                    if(is.existy(stat.packets) && stat.packets.sent > -1 && stat.packets.received > -1){
                        return {
                            sent: this.parent.documentConverter.formatPackets(stat.packets.sent),
                            recv: this.parent.documentConverter.formatPackets(stat.packets.received)
                        }
                    }else if(is.existy(stat.packets) && stat.packets.sent > -1 && !(stat.packets.received > -1)){ // dont have received
                        return{
                            sent: this.parent.documentConverter.formatPackets(stat.packets.sent)
                        }
                    }
                    return null;
                case "labels.stat_fields.errors":
                    if(is.existy(stat.packetErrors) && stat.packetErrors.sent > -1 && stat.packetErrors.received > -1){
                        return {
                            sent: this.parent.documentConverter.formatPackets(stat.packetErrors.sent),
                            recv: this.parent.documentConverter.formatPackets(stat.packetErrors.received)
                        }
                    }else if(is.existy(stat.packetErrors) && stat.packetErrors.sent > -1 && !(stat.packetErrors.received > -1)){ // dont have received
                        return{
                            sent: this.parent.documentConverter.formatPackets(stat.packetErrors.sent)
                        }
                    }
                    return null;
                case "labels.stat_fields.drops":
                    if(is.existy(stat.packetDrops) && stat.packetDrops.sent > -1 && stat.packetDrops.received > -1){
                        return {
                            sent: this.parent.documentConverter.formatPackets(stat.packetDrops.sent),
                            recv: this.parent.documentConverter.formatPackets(stat.packetDrops.received)
                        }
                    }else if(is.existy(stat.packetDrops) && stat.packetDrops.sent > -1 && !(stat.packetDrops.received > -1)){ // dont have received
                        return{
                            sent: this.parent.documentConverter.formatPackets(stat.packetDrops.sent)
                        }
                    }
                    return null;
                case "labels.stat_fields.collisions":
                    return is.existy(stat.collisions) ? {sent: source.collisions.toString()} : null;
            }
        };

        if (is.existy(source) && is.existy(target)) {
            return {
                icon: <IconOptions>nameData,
                source: genStat(source),
                target: genStat(target)
            }
        } else if (is.existy(source)) {
            return {
                icon: <IconOptions>nameData,
                source: genStat(source)
            }
        }
        return null;
    }

    private statRow2(name: string, source: any, target?: any, unit: any = ""): IStatInfo {
        let nameData = this.parent.t(name, {returnObjectTrees: true});

        if (is.existy(source) && is.existy(target)) {
            return {
                icon: <IconOptions>nameData,
                source: {sent: source + unit},
                target: {sent: target + unit}
            }
        } else if (is.existy(source)) {
            return {
                icon: <IconOptions>nameData,
                source: {sent: source + unit}
            }
        }
        return null;
    }

    statsRows(source: StatsDetail, target?: StatsDetail): InfoPanelBuilder {
        let statsInfo = [
            this.statRow("labels.stat_fields.speed", source, target),
            this.statRow("labels.stat_fields.bytes", source, target),
            this.statRow("labels.stat_fields.packets", source, target),
            this.statRow("labels.stat_fields.errors", source, target),
            this.statRow("labels.stat_fields.drops", source, target),
            this.statRow("labels.stat_fields.collisions", source, target)
        ].filter((val) => is.existy(val) && (is.existy(val.source) || is.existy(val.target)));

        if (is.existy(target)) {
            this.info.dualStatsInfo = statsInfo;
        } else {
            this.info.singleStatsInfo = statsInfo;
        }

        return this;
    }

    linkRows(source: LinkDTO, target?: LinkDTO): InfoPanelBuilder {
        let statsInfo;
        let utilFunction = (val) => {
            if(!DocumentConverter.isTruthy(val)) return "0 %";
            return this.parent.t("labels.utilization_value", {utilization: Math.round(val * 100)});
        };

        if (is.existy(source) && is.existy(source.srcPort)) {

            if (is.existy(target) && is.existy(target.srcPort)) {
                statsInfo = [
                    this.statRow("labels.stat_fields.speed", source.srcPort.stats, target.srcPort.stats),
                    this.statRow("labels.stat_fields.bytes", source.srcPort.stats, target.srcPort.stats),
                    this.statRow("labels.stat_fields.packets", source.srcPort.stats, target.srcPort.stats),
                    this.statRow("labels.stat_fields.errors", source.srcPort.stats, target.srcPort.stats),
                    this.statRow("labels.stat_fields.drops", source.srcPort.stats, target.srcPort.stats),
                    //this.statRow("labels.stat_fields.collisions", source.srcPort.stats, target.srcPort.stats),
                    this.statRow2("labels.stat_fields.bandwidth", this.parent.documentConverter.formatBandwidth(source.bandwidth), this.parent.documentConverter.formatBandwidth(target.bandwidth)),
                    this.statRow2("labels.stat_fields.utilization", utilFunction(source.bandwidthUtilization), utilFunction(target.bandwidthUtilization)),
                    this.statRow2("labels.stat_fields.collisions", source.collision, target.collision),
                    this.statRow2("labels.stat_fields.loss", source.loss, target.loss, " %"),
                    this.statRow2("labels.stat_fields.delay", source.delay, target.delay, " ms"),
                    this.statRow2("labels.stat_fields.jitter", source.jitter, target.jitter, " ms")
                ]
            } else {
                statsInfo = [
                    this.statRow("labels.stat_fields.speed", source.srcPort.stats),
                    this.statRow("labels.stat_fields.bytes", source.srcPort.stats),
                    this.statRow("labels.stat_fields.packets", source.srcPort.stats),
                    this.statRow("labels.stat_fields.errors", source.srcPort.stats),
                    this.statRow("labels.stat_fields.drops", source.srcPort.stats),
                    //this.statRow("labels.stat_fields.collisions", source.srcPort.stats),
                    this.statRow2("labels.stat_fields.bandwidth", this.parent.documentConverter.formatBandwidth(source.bandwidth)),
                    this.statRow2("labels.stat_fields.utilization", utilFunction(source.bandwidthUtilization)),
                    this.statRow2("labels.stat_fields.collisions", source.collision),
                    this.statRow2("labels.stat_fields.loss", source.loss, null, " %"),
                    this.statRow2("labels.stat_fields.delay", source.delay, null, " ms"),
                    this.statRow2("labels.stat_fields.jitter", source.jitter, null, " ms")
                ]
            }
        }

        statsInfo = statsInfo.filter((val) => is.existy(val) && (is.existy(val.source) || is.existy(val.target)));

        if (is.existy(target)) {
            this.info.dualStatsInfo = statsInfo;
        } else {
            this.info.singleStatsInfo = statsInfo;
        }

        return this;
    }

    getInfoData(): IInfoData {
        return this.info;
    }

    entityRowEnum(type: string, value: any, isOptional: boolean = false, callback?: () => void): InfoPanelBuilder {
        if (is.existy(value)) {
            let trans = this.parent.baseServices.uiHelper.getIconOptions(type, value);
            if (is.existy(trans)) {
                if (is.string(trans)) {
                    this.entityRow(type, trans, isOptional, callback);
                } else if (is.existy((<IconOptions>trans).title)) {
                    this.entityRow(type, (<IconOptions>trans).title, isOptional, callback);
                }
            }
        }
        return this;
    }

    addModeIcon(name: string, boolValue: boolean): InfoPanelBuilder {
        if (is.existy(boolValue) && boolValue) {
            this.info.modeIcons.push(this.parent.t("icons." + name, {returnObjectTrees: true}));
        }
        return this;
    }

    entityRowEnums(type: string, states: Array<any>, isOptional: boolean = false, callback?: () => void) {
        if (is.existy(states) && is.not.empty(states)) {
            let result = [];
            for (let idx in states) {
                let value = states[idx];
                let trans = this.parent.baseServices.uiHelper.getIconOptions(type, value);
                if (is.existy(trans)) {
                    if (is.string(trans)) {
                        result.push(trans);
                    } else if (is.existy((<IconOptions>trans).title)) {
                        result.push((<IconOptions>trans).title);
                    }
                }
            }
            this.entityRow(type, result.join("/"), isOptional, callback);
        }
        return this;
    }

    setDTO(dto: any) {
        this.info.dto = dto;
    }

    setGraphLink(graphLink: any) {
        this.info.statGraphLink = graphLink;
    }
}