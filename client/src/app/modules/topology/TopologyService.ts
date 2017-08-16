/**
 * Created by ekinca on 31.01.2017.
 */
import {Injectable} from "@angular/core";
import {Logger} from "../Logger";
import {SwitchDTO} from "../../swagger/SwitchDTO";
import {HostDTO} from "../../swagger/HostDTO";
import {LinkDTO} from "../../swagger/LinkDTO";
import {LINKSTATUS} from "../../swagger/LINKSTATUS";
import {UIHelper} from "../UIHelper";
import {TopologyDTO} from "../../swagger/TopologyDTO";
import {NetworkDeviceDTO} from "../../swagger/NetworkDeviceDTO";
import {DocumentConverter} from "../DocumentConverter";
import {CREATESHOWENUM} from "./view/TopologyPage";
import {TopologyTabData, TopologyData} from "./topology.config";
import {SessionManager} from "../SessionManager";
import {TOPOLOGYTYPE} from "../../swagger/TOPOLOGYTYPE";
import BaseEvent = d3.BaseEvent;
import {CloudDTO} from "../../swagger/CloudDTO";
import {SUPERTOPOLOGYTYPE} from "../../swagger/SUPERTOPOLOGYTYPE";
import {DomainDTO} from "../../swagger/DomainDTO";
import {NETWORKDEVICETYPE} from "../../swagger/NETWORKDEVICETYPE";
import {TopologyClusterService} from "./TopologyClusterService";
import {tplSwitch} from "./NetworkElementDefinitions/tplSwitch";
import {tplLink} from "./NetworkElementDefinitions/tplLink";
import {tplNetworkDevice} from "./NetworkElementDefinitions/tplNetworkDevice";
import {tplHost} from "./NetworkElementDefinitions/tplHost";
import {tplDomain} from "./NetworkElementDefinitions/tplDomain";
import {tplCloud} from "./NetworkElementDefinitions/tplCloud";
import {SdnipRouterDTO} from "../../swagger/SdnipRouterDTO";
import {tplBgpRouter} from "./NetworkElementDefinitions/tplBgpRouter";
import {WanPortInfoDTO} from "../../swagger/WanPortInfoDTO";

@Injectable()
export class TopologyService {
    physicalTopologyName = "";
    tabList: Array<TopologyTabData> = [];

    constructor(public logger: Logger, public uiHelper: UIHelper, public dc: DocumentConverter, public ss: SessionManager, public topologyClusterService: TopologyClusterService) {}

    getTopologyTablist(): Array<TopologyTabData>{
        this.tabList = this.ss.getItem('tabList', this.tabList );
        this.tabList = ( !this.tabList || !(this.tabList.length > 0) ) ? [] : this.tabList;
        return this.tabList;
    }

    filterPhysicalTopologyForSAY(tabList: Array<TopologyTabData>): Array<TopologyTabData>{
        tabList.filter((tab)=>tab.topoType !== TOPOLOGYTYPE.PHYSICAL);
        return tabList;
    }

    saveTopologyTabListToStorage(tabList?){
        tabList = ( tabList && tabList.length && tabList.length > 0 ) ? tabList : this.tabList;
        this.tabList = tabList;
        // let tab2Str = JSON.stringify(tabList);
        this.ss.setItem('tabList', tabList);
    }

    isTabUnique(tabData: TopologyTabData, tabList?): boolean{//also works for create/refresh check
        let isTabUnique: boolean = true;

        for(let i = 0; i < this.tabList.length; i++){
            if(tabData.id == this.tabList[i].id){
                isTabUnique = false;
                break;
            }
        }
        return isTabUnique;
    }

    pushToTopologyTablist(data: any, tabType?: CREATESHOWENUM): TopologyTabData{
        let tabData: TopologyTabData = {
            name: data.name,
            id: data.id,
            status: "active-link",
            topoType: data.type,
            tabType: tabType || data.tabType,
            tabRank: data.tabRank
        };

        if(this.isTabUnique(tabData)){
            this.tabList.push(tabData);
        }else{
            console.log("ERROR: Tab is not unique");
        }

        this.tabList = this.tabList.sort((a,b)=> a.tabRank - b.tabRank);
        this.saveTopologyTabListToStorage();
        return tabData;
    }

    removeFromTablist(tabData){
        for (let i = 0; i < this.tabList.length; i++) {
            let tab = this.tabList[i];
            if (tab.id == tabData.id) { // && k !== 0) {
                this.tabList.splice(i, 1);
                break;
            }
        }
        this.saveTopologyTabListToStorage();
        return this.tabList;
    }

    convert(data) {
        this.logger.debug("Document converter now has data: \n", data);
        let topology: TopologyDTO = data;

        let d3TopologyJSON = {
            "nodes": [],
            "links": [],
            "controllers": topology.controllers
        };

        //switches
        if ((topology != null) && (topology.switches != null)) {
            topology.switches.forEach((sw: SwitchDTO) => {
                sw = new tplSwitch(sw);
                sw["_children"] = [];
                sw["children"] = [];
                sw["type"] = "Switch";

                if(is.existy(sw.location) && is.existy(sw.location.x) && is.not.empty(sw.location.x) && is.existy(sw.location.y) && is.not.empty(sw.location.y)){
                    sw["x"] = parseFloat(sw.location.x);
                    sw["y"] = parseFloat(sw.location.y);
                    sw["fixed"] = true;
                }
                return d3TopologyJSON.nodes.push(sw);
            });
        }

        //networkdevices
        if( topology && topology.networkdevices && topology.networkdevices.length > 0){
            topology.networkdevices.forEach((gw: NetworkDeviceDTO) => {
                gw["_children"] = [];
                gw["children"] = [];
                let flag = localStorage.getItem("showNetworkDevicesFlag");
                gw["opacity"] = flag == "true" || gw.type == NETWORKDEVICETYPE.ACCESS_POINT  ? 1 : 0;
                gw = new tplNetworkDevice(gw);
                // if(is.existy(gw.location) && is.existy(gw.location.x) && is.not.empty(gw.location.x) && is.existy(gw.location.y) && is.not.empty(gw.location.y)){
                //     gw["x"] = parseFloat(gw.location.x);
                //     gw["y"] = parseFloat(gw.location.y);
                //     gw["fixed"] = true;
                // }
                return d3TopologyJSON.nodes.push(gw);
            });
        }

        //clusters
        if(topology != null && topology.domains && topology.domains.length > 0){
            topology.domains.forEach((cluster: DomainDTO)=>{
                cluster.type = SUPERTOPOLOGYTYPE.DOMAIN;
                cluster.name = cluster.name ? cluster.name : cluster.id;
                if(cluster.location && cluster.location.x && cluster.location.y){ // x and y should not be 0 (falsy)
                    cluster["x"] = parseFloat(cluster.location.x);
                    cluster["y"] = parseFloat(cluster.location.y);
                    cluster["fixed"] = true;
                }
                cluster = new tplDomain(cluster);
                return d3TopologyJSON.nodes.push(cluster);
            });
        }

        //bgprouters
        if( topology && topology.routers && topology.routers.length > 0){
            topology.routers.forEach((bgpRouter: SdnipRouterDTO, i) => {
                //BUG
                // if (indexOfSwitchNode === -1) {
                //     this.logger.debug("bgprouter does not have a cluster");
                //     this.logger.debug(bgpRouter);
                // }
                bgpRouter = new tplBgpRouter(bgpRouter);
                d3TopologyJSON.nodes.push(bgpRouter);
            });
        }

        //clouds
        if(topology != null && topology.ports && topology.ports.length > 0){
            topology.ports.forEach((cloud: WanPortInfoDTO)=>{
                cloud["type"] = SUPERTOPOLOGYTYPE.PORT;
                // if(cloud.location && cloud.location.x && cloud.location.y){ // x and y should not be 0 (falsy)
                //     cloud["x"] = parseFloat(cloud.location.x);
                //     cloud["y"] = parseFloat(cloud.location.y);
                //     cloud["fixed"] = true;
                // }
                cloud = new tplCloud(cloud);
                return d3TopologyJSON.nodes.push(cloud);
            });
        }


        //takes hwAddress name of every node
        let hwAddresses = [];
        if(d3TopologyJSON.nodes){
            d3TopologyJSON.nodes.forEach((v: any, k) => {
                hwAddresses.push(v.id);
            });
        }

        //hosts
        if( topology && topology.hosts && topology.hosts.length > 0){
            topology.hosts.forEach((host: HostDTO) => {
                let indexOfSwitchNode;
                indexOfSwitchNode = hwAddresses.indexOf(host.port.id);

                //BUG
                if (indexOfSwitchNode === -1) {
                    this.logger.debug("host does not have a switch");
                    this.logger.debug(host);
                } else {
                    d3TopologyJSON.nodes[indexOfSwitchNode].children.push(host);
                }
                host = new tplHost(host);
                d3TopologyJSON.nodes.push(host);
            });
        }

        if (topology && (topology.links != null)) {
            //sort the links
            let linkHashMap = {};// insert src_dst ids here and increment the count everytime a same src_dst occurs. Then, when calculating the linkOrder; decrement them (assuming they have different ports (possible bug if they send same port same link)).
            topology.links.forEach((link: LinkDTO, i) => {
                let linkHash = this.getLinkHash(link);

                if(linkHashMap[linkHash] == 0 || linkHashMap[linkHash] > 0){ //this is with src_dst_port_port so this must be index for all links, they must be unique
                    linkHashMap[linkHash]= "duplicate link found!";
                }else{
                    linkHashMap[linkHash] = i;
                }

                if(linkHashMap["src" + link.srcPort.id + "_dst" + link.destPort.id] == 0 || linkHashMap["src" + link.srcPort.id + "_dst" + link.destPort.id] > 0){ //this is with src_dst so different link comibnations with different ports might occur, they might not be unique hence value can be greater than zero
                    ++linkHashMap["src" + link.srcPort.id + "_dst" + link.destPort.id];
                }else{
                    linkHashMap["src" + link.srcPort.id + "_dst" + link.destPort.id] = 0;
                }
            });

            topology.links.forEach((link: LinkDTO, i) => {
                //TODO this won't work with self links
                let sourceIndex = hwAddresses.indexOf(link.srcPort.id);
                let targetIndex = hwAddresses.indexOf(link.destPort.id);

                link["type"] = "Link";
                link["index"] = i;
                link["linkId"] = i + 1;
                link["source"] = sourceIndex;
                link["target"] = targetIndex;

                //link Flags
                if (link.srcPort.id === link.destPort.id) {
                    link["selfLink"] = true;
                }

                if (link.status === LINKSTATUS.DOWN) {
                    link["isDown"] = true;
                }

                if(linkHashMap["src" + link.srcPort.id + "_dst" + link.destPort.id] >= 0){ // if same link different port hash, assign linkorder and decrement the hash value
                    link["linkOrder"] = linkHashMap["src" + link.srcPort.id + "_dst" + link.destPort.id];
                    --linkHashMap["src" + link.srcPort.id + "_dst" + link.destPort.id];
                }

                //if some duplication is present
                let reverseIndex = linkHashMap[("src" + link.destPort.id + "_dst" + link.srcPort.id + "_" + link.destPort.number + "_" + link.srcPort.number)];
                if (reverseIndex > -1) {
                    //if found its inverse
                    if (link["explored"] != true) {
                        link["reverse"] = topology.links[reverseIndex];
                        topology.links[reverseIndex]["explored"] = true;
                        link["reverse"] = new tplLink(link["reverse"]);

                        link = new tplLink(link);
                        return d3TopologyJSON.links.push(link);
                    }
                } else {
                    //single link -.-
                    link = new tplLink(link);
                    if (link["explored"] != true) return d3TopologyJSON.links.push(link);
                }
            });

            //host links
            if(topology && topology.hosts && topology.hosts.length > 0){
                for (let h = 0; h < topology.hosts.length; h++) {
                    let sourceOfHost = this.dc.getNodeById(topology.hosts[h].port.id, d3TopologyJSON.nodes);
                    let targetHost = this.dc.getNodeById(topology.hosts[h].id, d3TopologyJSON.nodes);
                    let hostLink = {
                        linktype: "hostlink",
                        source: sourceOfHost,
                        target: targetHost,
                        topologyId: "",
                        srcPort: sourceOfHost as any,
                        destPort: targetHost as any,
                        securityLevel: 1,
                        status: LINKSTATUS.LIVE,
                        version: 1,
                        revision: 1,
                        timestamp: new Date(),
                        id: ""
                    };
                    if (this.dc.isNotNullOrUndefined(sourceOfHost)) {
                        hostLink = new tplLink(hostLink);
                        d3TopologyJSON.links.push(hostLink);
                    }
                }
            }

            // //BGP router links
            if(topology && topology.routers && topology.routers.length > 0){
                topology.routers.forEach((bgpRouter: SdnipRouterDTO, b)=>{
                    let sourceOfBgpRouter = this.dc.getNodeById(topology.routers[b].deviceId, d3TopologyJSON.nodes);
                    let targetBgpRouter = this.dc.getNodeById(topology.routers[b].id, d3TopologyJSON.nodes);
                    let bgpRouterLink = {
                        linktype: "hostlink",
                        source: sourceOfBgpRouter,
                        target: targetBgpRouter,
                        topologyId: "",
                        srcPort: sourceOfBgpRouter as any,
                        destPort: targetBgpRouter as any,
                        securityLevel: 1,
                        status: LINKSTATUS.LIVE,
                        version: 1,
                        revision: 1,
                        timestamp: new Date(),
                        id: ""
                    };
                    if (this.dc.isNotNullOrUndefined(sourceOfBgpRouter)) {
                        bgpRouterLink = new tplLink(bgpRouterLink);
                        d3TopologyJSON.links.push(bgpRouterLink);
                    }
                });
            }
        }
        this.logger.debug("Document converter is returning data: \n", d3TopologyJSON);
        topology = null;
        d3TopologyJSON = this.dc.isLinkTargetValid(d3TopologyJSON);
        //add cluster property
        this.topologyClusterService.addClusterProperty(d3TopologyJSON.nodes, d3TopologyJSON.links);
        return d3TopologyJSON;
    }

    getLinkHash(link: LinkDTO): string{
        let srcPort = link.srcPort && DocumentConverter.isTruthy(link.srcPort.number) ? link.srcPort.number : "?";
        let dstPort = link.destPort && DocumentConverter.isTruthy(link.destPort.number) ? link.destPort.number : "?";
        return "src" + link.srcPort.id + "_dst" + link.destPort.id + "_" + srcPort + "_" + dstPort;
    }
    checkSwitchChangeInLinkSourceTargets(oldSwitchDto: SwitchDTO, newSwitchDto: SwitchDTO, topologyData): TopologyData {
        if (oldSwitchDto.id != newSwitchDto.id && !topologyData.isMappedVersionShown) { //isMappedVersionCheck just to be safe
            for (let i = 0; i < topologyData.data.links.length; i++) {
                if (oldSwitchDto.id == topologyData.data.links[i].source.id) {
                    topologyData.data.links[i].srcPort = newSwitchDto;
                    topologyData.data.links[i].source.id = newSwitchDto.id;
                    topologyData.data.links[i].source.portInfo.totalPorts = newSwitchDto.portInfo.totalPorts;
                    topologyData.data.links[i].source.mvtnPortInfo = newSwitchDto.mvtnPortInfo;
                    topologyData.data.links[i].source.deviceProfile = newSwitchDto.deviceProfile;
                    topologyData.data.links[i].reverse.destPort = newSwitchDto;
                } else if (oldSwitchDto.id == topologyData.data.links[i].target.id) {
                    topologyData.data.links[i].destPort = newSwitchDto;
                    topologyData.data.links[i].target.id = newSwitchDto.id;
                    topologyData.data.links[i].target.portInfo.totalPorts = newSwitchDto.portInfo.totalPorts;
                    topologyData.data.links[i].target.mvtnPortInfo = newSwitchDto.mvtnPortInfo;
                    topologyData.data.links[i].target.deviceProfile = newSwitchDto.deviceProfile;
                    topologyData.data.links[i].reverse.srcPort = newSwitchDto;
                }
            }
        }
        return topologyData;
    }

    stringBooleanReverser(field: string): string {
        if (field === "true") {
            return "false";
        } else {
            return "true";
        }
    }

    parseAlarmStatus(d: DomainDTO){
        let arr = [0,0,0,0];
        if(d.alarms){
            if(d.alarms.activeAlarmCountMap){
                if(d.alarms.activeAlarmCountMap["FATAL"]){
                    arr[0] = d.alarms.activeAlarmCountMap["FATAL"];
                }

                if(d.alarms.activeAlarmCountMap["CRITICAL"]){
                    arr[1] = d.alarms.activeAlarmCountMap["CRITICAL"];
                }

                if(d.alarms.activeAlarmCountMap["MAJOR"]){
                    arr[2] = d.alarms.activeAlarmCountMap["MAJOR"];
                }

                if(d.alarms.activeAlarmCountMap["MINOR"]){
                    arr[3] = d.alarms.activeAlarmCountMap["MINOR"];
                }
            }
        }

        return arr;
    }

    getNodeType(d){
        if (this.dc.isHost(d.type)) { //host types come as computer, phone..
            return "hostnode";
        } else if(d.type === NETWORKDEVICETYPE.GATEWAY){
            return "gatewaynode";
        } else if(d.type === NETWORKDEVICETYPE.ACCESS_POINT){
            return "accesspointnode";
        } else if(this.dc.isNetworkDevice(d.type)){ // *GATEWAY and ACCESS_POINT are also network devices but they have some special animation cases*
            return "networkdevicenode";
        } else if(d.type === SUPERTOPOLOGYTYPE.DOMAIN){
            return "domainnode";
        } else if(d.type == "bgpRouter"){
         return "bgprouternode";
         } else{
            return d.type ? ( d.type.toString().toLowerCase().replace(/_/g , "") + "node" ) : console.log("NODE TYPE IS NOT DEFINED");
        }
    }
}
