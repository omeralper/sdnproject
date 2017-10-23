import {CREATESHOWENUM} from "./view/TopologyPage";
import {TOPOLOGYSTATUS} from "../../swagger/TOPOLOGYSTATUS";
import {TOPOLOGYTYPE} from "../../swagger/TOPOLOGYTYPE";
import {MVTNREQUESTSTATUS} from "../../swagger/MVTNREQUESTSTATUS";
import {MVTNSTATUS} from "../../swagger/MVTNSTATUS";
import {MvtnSubTopologyDTO} from "../../swagger/MvtnSubTopologyDTO";
import {MVTNTYPE} from "../../swagger/MVTNTYPE";
import {TopologyGatewayDTO} from "../../swagger/TopologyGatewayDTO";
import {LinkDTO} from "../../swagger/LinkDTO";
import {PPPSubPathDTO} from "../../swagger/PPPSubPathDTO";
/**
 * Created by ekinca on 15.11.2016.
 */
export var topoConfig = {
    topologyViewPageUrlForGradient: "gradient", ///topology/view#
    switchHeightAndWidth: 40,
    ipPhoneHeightAndWidth: 30,
    switchXY: -20,
    ipPhoneXY: -15,
    switchRx: 5,
    switchRadius: 20,
    hostRadius: 12,
    bgpRouterRadius: 16,
    hostClickedRadius: 18,
    peripheryStrokeWidth: 2,
    defaultPeripheryColor: "blue",
    defaultSwitchLinkColor: "#25AAE2",
    switchControllerFillColor: "#FFD800",
    defaultHostPeripheryColor: "#1A7599",
    defaultOpenFlowSwitchPeripheryColor: "#1A7599",
    defaultOpenFlowSwitchFillColor: "#25AAE2",
    defaultLegacySwitchPeripheryColor: "#ed2812",
    defaultLegacySwitchFillColor: "#f36a5a",
    switchDownColor: "#F1592A",
    switchStandbyModeStrokeColor: "#999999",
    switchStandbyModeFillColor: "#cccccc",
    PATH_DRAW_COLOR: "magenta", //PathDrawFill topology-styles.css
    HOST_PATH_DRAW_COLOR: "yellow",
    heightCoefficient: 177,
    defaultHostFillColor: '#25AAE2',
    downHostFillColor: '#F1592A',
    blockedHostFillColor: '#FCB040',
    liveHostFillColor: '#8CC63E',
    topologyMaxZoomScale: 10,
    topologyMinZoomScale: 0.18,
    physicalTopologyWebSocketChannelId: 0,
    bandwidthUtilizationSensitivityCoefficient: 1, //increase to multiply sensitivity
    bandwidthUtilizationCoefficient: Number(sessionStorage.getItem("bwUtilizationCoefficient")) || 300,
    text2PositionIP: "3.2em",
    switchUtilizationBarX: "-20",
    switchIpPhoneUtilizationBarX: "-15",
    switchUtilizationBarY: "-30",
    switchUtilizationBarHeight: "5",
    switchUtilizationBarWidth: "20",
    switchUtilizationBarBorderRadius: "2",
    switchUtilizationDefaultBackgroundColor: "greenyellow",
    switchUtilizationFirstPhaseColor: "yellow",
    switchUtilizationSecondPhaseColor: "red",
    clusterEdgeLength: 30,
    defaultClusterPeripheryColor: "#A53C5A",
    defaultClusterFillColor: "#ff4d4d",
    domainDownColor: "red",
    domainStrokeWidth: 3,
    defaultClusterCloudPathColor: '#29C7B5',
    virtualSublinkAlternativePathToColor: "#25AAE2",
    virtualSublinkAlternativePathFromColor: "#66ffcc",
    alarmStatusY: "-1.5em",
    alarmStatusX: "-0.5em"
};

export interface TopologyTabData{
    name?: string;
    id: string;
    status?: any;
    topoType: TOPOLOGYTYPE;
    tabRank: number;
    tabType: CREATESHOWENUM;
}

export interface TopologyData{
    isMappedVersionShown?: boolean;
    type: TOPOLOGYTYPE;
    data?: any;
    tabType: CREATESHOWENUM;
    tabRank: number;
    name?: any;
    vlanTag?: number;
    maximumNumberOfUser?: number;
    bandwidth?: any;
    switchSecurityLevel?: number;
    linkSecurityLevel?: number;
    jitter?: number;
    delay?: number;
    packetLossRate?: number;
    collision?: number;
    ipAddressess?: Array<string>;
    dnsServers?: Array<string>;
    macAddresses?: Array<string>;
    portRanges?: Array<string>;
    tabRequestStatus?: MVTNREQUESTSTATUS;
    virtual?: any; //original virtual data exists here no matter what (isMappedVersion scenarios)
    backup?: any; //redundant
    status?: TOPOLOGYSTATUS | MVTNSTATUS;
    id: any;
    displayedSubTopologyId?: string;
    selectedSubTopologyId?: string;
    subTopologyDTO?: MvtnSubTopologyDTO;
    mvtnType?: MVTNTYPE;
    topologyGateway?: TopologyGatewayDTO;
    alternativeProactivePaths?: Array<PPPSubPathDTO>;
    selectedAlternativeProactivePathIndex?: string;
    alternativeProactivePathPopoverDataReadyFlag?: boolean;
    wanMvtn?: any; //used to transfer data from topologyInfo to MvtnDTO
    isLldpDisabled?: boolean;
    reqId: string;
    energyConsumption?: any;
    mvtnReqStatus?: MVTNREQUESTSTATUS;
}

export var emptyTopologyDataDTO = {
    id: "",
    version: 1,
    revision: 1,
    timestamp: new Date(),
    info: {
        version: 1,
        revision: 1,
        timestamp: new Date(),
        id: "",
        status: TOPOLOGYSTATUS.ACTIVE,
        type: TOPOLOGYTYPE.PHYSICAL,
        name: "PrognetTopology",
        stats: null,
        alarms: [],
        activeSince: new Date(),
        weight: 0,
        maxDepth: 0,
        elementCountPerDepth: []
    },
    switches: [],
    links: [],
    hosts: []
};