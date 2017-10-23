import {Injectable} from "@angular/core";
import {HOSTTYPE, HOSTTYPEDef} from "../swagger/HOSTTYPE";
import {SwitchDTO} from "../swagger/SwitchDTO";
import {PathCalculations} from "./PathCalculations";
import {TOPOLOGYTYPE} from "../swagger/TOPOLOGYTYPE";
import {HostDTO} from "../swagger/HostDTO";
import {LinkDTO} from "../swagger/LinkDTO";
import {UIHelper} from "./UIHelper";
import {TopologyEventDTO} from "../swagger/TopologyEventDTO";
import {ControllerDTO} from "../swagger/ControllerDTO";
import {CONTROLLERSTATE} from "../swagger/CONTROLLERSTATE";
import {TOPOLOGYEVENTTYPE} from "../swagger/TOPOLOGYEVENTTYPE";
import {NETWORKDEVICETYPE, NETWORKDEVICETYPEDef} from "../swagger/NETWORKDEVICETYPE";
import {DEVICETYPEDef} from "../swagger/DEVICETYPE";
import {SUPERTOPOLOGYTYPE} from "../swagger/SUPERTOPOLOGYTYPE";
import {tplLink} from "./topology/NetworkElementDefinitions/tplLink";
import {tplSwitch} from "./topology/NetworkElementDefinitions/tplSwitch";
import {tplHost} from "./topology/NetworkElementDefinitions/tplHost";
import {tplNetworkDevice} from "./topology/NetworkElementDefinitions/tplNetworkDevice";
import {LINKSTATUS} from "../swagger/LINKSTATUS";
import {ROUTERTYPEDef} from "../swagger/ROUTERTYPE";
import {tplCloud} from "app/modules/topology/NetworkElementDefinitions/tplCloud";
import {tplDomain} from "./topology/NetworkElementDefinitions/tplDomain";
import {PortDetail} from "../swagger/PortDetail";
/**
 * Created by ekinca on 18.11.2015.
 */
@Injectable()
export class DocumentConverter {
    public physicalTopologyName = "";

    constructor(public uiHelper: UIHelper) {
    }

    isLinkTargetValid(topology){ //checks if link targets are indexOf nodes but with O(n) time

        let mapNodes = {};
        let newLinks = [];
        let linkSource, nodeSource, linkTarget, nodeTarget, source, target;

        for(let i = 0; i < topology.nodes.length; i++){
            mapNodes[topology.nodes[i].id] = 5;
        }

        for(let j = 0; j < topology.links.length; j++){

            linkSource = topology.links[j].source;
            if(typeof linkSource == "number" && linkSource == -1){
                source = -1;
                target = -1;
                console.log("LINK SOURCE IS NOT VALID");
            }else if( typeof linkSource == "number" && linkSource != -1){
                nodeSource = topology.nodes[linkSource].id;
                source = mapNodes[nodeSource];
            }else if(typeof linkSource != "number"){ //if object
                source = mapNodes[linkSource.id];
            }else{
                source = -1;
                target = -1;
                console.log("type mismatch");
            }

            linkTarget = topology.links[j].target;
            if(typeof linkTarget == "number" && linkTarget == -1){
                source = -1;
                target = -1;
                console.log("LINK TARGET IS NOT VALID");
            }else if( typeof linkTarget == "number" && linkTarget != -1){
                nodeTarget = topology.nodes[linkTarget].id;
                target = mapNodes[nodeTarget];
            }else if(typeof linkTarget != "number"){ //if object
                target = mapNodes[linkTarget.id];
            }else{
                source = -1;
                target = -1;
                console.log("type mismatch");
            }

            if( ( source != 5) || ( target != 5) ){
                console.log(topology.links[j], "error");
            }else{
                newLinks.push(topology.links[j]);
            }
        }
        topology.links = newLinks;
        return topology;
    }

    getNodeById(id, nodeDefinitions:Array<any> | object) {
        if (is.array(nodeDefinitions)) {
            let nodeList = <Array<any>>nodeDefinitions;
            for (let i = 0; i < nodeList.length; i++) {
                if (id === nodeList[i].id) {
                    return nodeList[i];
                }
            }
        } else {
            let nodeData = nodeDefinitions[id];
            if (is.existy(nodeData)) return nodeData.node;
        }
        console.log("couldnt find node.");
    }

    formatBytes(bytes, decimals?) {
        return this.uiHelper.formatBytes(bytes, decimals);
    }

    formatPackets(packets) {
        return this.uiHelper.formatPackets(packets);
    }

    formatBandwidth(bw) {
        return this.uiHelper.formatBandwidth(bw);
    }

    formatRate(bw) {
        return this.uiHelper.formatRate(bw);
    }

    static isTruthy(obj): boolean{
        return obj !== null && typeof obj !== "undefined" && obj !== "";
    }

    isNotNullOrUndefinedOrEmptyString(obj) {
        if (obj !== null && typeof obj !== "undefined" && obj !== "") return true;
        return false;
    }

    isNotNullOrUndefined(obj) {
        if (obj !== null && typeof obj !== "undefined") return true;
        return false;
    }

    isNodeUnique(node, nodeList) {
        for (let i = 0; i < nodeList.length; i++) {
            if (node.id == nodeList[i].id) {
                return false;
            }
        }
        return true;
    }

    isGatewayOrNetworkDeviceLink(d){
        if( (d.source.type == NETWORKDEVICETYPE.GATEWAY || d.target.type == NETWORKDEVICETYPE.GATEWAY) ){
            return true;
        }else if(d.source.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY || d.target.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY){
            return false;
        }else if(d.source.type == NETWORKDEVICETYPE.ACCESS_POINT || d.target.type == NETWORKDEVICETYPE.ACCESS_POINT){
            return false;
        }else if( this.isNetworkDevice(d.source.type) || this.isNetworkDevice(d.target.type) ){
            return true;
        }

        return false;
    }

    linkType(d) {
        if (this.isNotNullOrUndefinedOrEmptyString(d.srcPort)) { // the reason that they are not enum is that DOM classes doesn't play well with all caps enum names.
            if (this.isHost(d.source.type) || this.isHost(d.target.type) || d.linktype === "hostlink") {
                return "hostlink";
            } else if(d.source.type == NETWORKDEVICETYPE.GATEWAY || d.target.type == NETWORKDEVICETYPE.GATEWAY){
                return "gatewaylink";
            }else if(d.source.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY || d.target.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY){
                return "virtualgatewaylink";
            }else if(d.source.type == NETWORKDEVICETYPE.ACCESS_POINT || d.target.type == NETWORKDEVICETYPE.ACCESS_POINT){
                return "accesspointlink";
            }else if( this.isNetworkDevice(d.source.type) || this.isNetworkDevice(d.target.type) ){
                return "networkdevicelink";
            }else{
                return "switchlink";
            }
        } else {
            return "hostlink";
        }
    }

    isHost(type): boolean {
        return is.existy(type) && is.not.empty(type) && is.existy(HOSTTYPEDef.map[type]);
    }

    static isVNFHost(host: tplHost): boolean{
        return DocumentConverter.isTruthy(host.vnfdType);
    }

    isNetworkDevice(type): boolean {
        return this.isNotNullOrUndefinedOrEmptyString(type) && this.isNotNullOrUndefined(NETWORKDEVICETYPEDef.map[type]);
    }

    isBgpRouter(type): boolean{
        return this.isNotNullOrUndefinedOrEmptyString(type) && this.isNotNullOrUndefined(ROUTERTYPEDef.map[type]);
    }

    isSwitch(type): boolean {
      return type == "Switch" || ( this.isNotNullOrUndefinedOrEmptyString(type) && this.isNotNullOrUndefined(DEVICETYPEDef.map[type]) );
    }

    isDomain(type): boolean {
        return type === SUPERTOPOLOGYTYPE.DOMAIN;
    }

    isCloud(type): boolean {
        return type === SUPERTOPOLOGYTYPE.PORT;
    }

    isLinkBetweenClusterOrCloud(d: any/*LinkDTO*/): boolean{
        return ( (this.isDomain(d.source.type) && this.isDomain(d.target.type))  // source target cluster
        || (this.isDomain(d.source.type) && this.isCloud(d.target.type)) // source cluster target cloud
        || (this.isCloud(d.source.type) && this.isDomain(d.target.type)) // source cloud target cluster
        || (this.isCloud(d.source.type) && this.isCloud(d.target.type)) );
    }

    static getNodeIndex(nodeList, node): number {
        if (node.id !== null && typeof node.id !== "undefined" && node.id != "") {
            for (let i = 0; i < nodeList.length; i++) {
                if (nodeList[i].id === node.id || nodeList[i].id.toString().toUpperCase() === node.id.toString().toUpperCase()) {
                    return i;
                }
            }
        } else if (( !(node.id !== null && typeof node.id !== "undefined") || node.id == "") && (node.hid !== null && typeof node.hid !== "undefined" && node.hid != "")) {
            for (let i = 0; i < nodeList.length; i++) {
                if (nodeList[i].hid === node.hid) {
                    return i;
                }
            }
        } else {
            console.log("I DON'T HAVE A VALID ID SO IGNORING THIS NODE");
            return -1;
        }
    }

    findLinkIndexByNodeIds(linkList, nodeIds, nodeList?): Array<number> {
        let result = [];
        if (nodeIds.length === 1) {
            for (let i = 0; i < linkList.length; i++) {
                if (this.isNotNullOrUndefined(linkList[i].source.id)) {
                    if (linkList[i].source.id == nodeIds[0] || linkList[i].target.id == nodeIds[0]) {
                        result.push(i);
                    }
                } else {
                    if (nodeList[linkList[i].source].id == nodeIds[0]) {
                        result.push(linkList[i].source);
                    } else if (nodeList[linkList[i].target].id == nodeIds[0]) {
                        result.push(linkList[i].target);
                    }
                }
            }
        } else if (nodeIds.length > 1) {
            for (let i = 0; i < linkList.length; i++) {
                if (this.isNotNullOrUndefinedOrEmptyString(linkList[i].srcPort) && this.isNotNullOrUndefinedOrEmptyString(linkList[i].destPort)) {
                    if ((linkList[i].srcPort.id == nodeIds[0] && linkList[i].destPort.id == nodeIds[1]) || linkList[i].srcPort.id == nodeIds[1] && linkList[i].destPort.id == nodeIds[0]) {
                        result.push(i);
                    }
                }
            }
        }
        return result;
    }

    isEmptyTopology(allTopologyData) {
        if ($.isEmptyObject(allTopologyData)) {
            return allTopologyData = {
                type: TOPOLOGYTYPE.PHYSICAL,
                data: {nodes: [], links: []},
                backup: "",
                name: "Main",
                label: "Main"
            }
        } else {
            return allTopologyData;
        }
    }

    getTopologyNameOfEvent(eventData, allTopologyData) {
        let topologyId = eventData.topologyId; // id olcak ama mvtnli olmayan

        if (topologyId && topologyId.length > 0) {
            return topologyId;
        } else if( (eventData && eventData.data && eventData.data.id && eventData.data.id == "SUPER") || eventData.revision == 999333){
            return "SUPER";
        } else if (topologyId == "" || topologyId == "DEFAULT" || topologyId == "default" || topologyId == "0" || topologyId == "PrognetTopology" || topologyId == "Prognet") {//return physical
            //return allTopologyData[Object.keys(allTopologyData)[0]].name; //TODO do a for loop to find physical
            return this.physicalTopologyName;
        } else {
            return false;
        }
    }

    addNewSwitch(data, allTopologyData) {
        var newSwitchData = data.value;
        this.isEmptyTopology(allTopologyData);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        var addNewSwitchProcess = (currentTopologyId)=> {
            //topoid check if no then id/name is main
            if (this.isNodeUnique(newSwitchData, allTopologyData[currentTopologyId].data.nodes)) {
                //newSwitchData["type"] = "Switch";
                newSwitchData = new tplSwitch(newSwitchData);
                allTopologyData[currentTopologyId].data.nodes.push(newSwitchData);
            } else {
                console.log("ID IS NOT UNIQUE");
            }
        }

        if (currentTopologyName == "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    addNewSwitchProcess(key);
                }
            }
        } else {
            addNewSwitchProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    updateSwitch(data, allTopologyData, update_options: any = {status: true, stats: true, flows: true, controllerId:true}) {
        var newSwitchData: SwitchDTO = data.value;
        console.log('Update Switch Data', data);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        var updateSwitchProcess = (currentTopologyId)=> {
            var sw = PathCalculations.topologyFindSwitchDTOById(newSwitchData.id, allTopologyData[currentTopologyId].data);
            if (!this.isNotNullOrUndefinedOrEmptyString(sw)) {
                console.log("NODE SWITCH WITH THAT ID (" + newSwitchData.id + ") COULDN'T BE FOUND");
                return false;
            } else {
                if (update_options.status) sw.status = newSwitchData.status;
                if (update_options.stats) sw.stats = newSwitchData.stats;
                if (update_options.flows) sw.flows = newSwitchData.flows;
                if (update_options.controllerId) sw.controllerId = newSwitchData.controllerId;
                if (this.isNotNullOrUndefinedOrEmptyString(newSwitchData.utilization) && newSwitchData.utilization != sw.utilization) sw.utilization = newSwitchData.utilization;
            }
        }

        if (currentTopologyName == "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    updateSwitchProcess(key);
                }
            }
        } else {
            updateSwitchProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    updateSwitchPort(data, allTopologyData) {
        var newSwitchData = data.value;
        console.log('Update Switch Port', data);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        var updateSwitchPortProcess = (currentTopologyId)=> {
            var sw = PathCalculations.topologyFindSwitchDTOById(newSwitchData.id, allTopologyData[currentTopologyId].data);
            if (!this.isNotNullOrUndefinedOrEmptyString(sw)) {
                console.log("NODE SWITCH WITH THAT ID (" + newSwitchData.id + ") COULDN'T BE FOUND");
                return false;
            } else {
                sw.portInfo = newSwitchData.portInfo;
            }
        }

        if (currentTopologyName == "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    updateSwitchPortProcess(key);
                }
            }
        } else {
            updateSwitchPortProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    removeSwitch(data, allTopologyData) {
        this.isEmptyTopology(allTopologyData);
        var newSwitchData = data.value;
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);
        console.log('Remove Sw Data', data);

        var removeSwitchProcess = (currentTopologyId)=> {
            var swIndex = DocumentConverter.getNodeIndex(allTopologyData[currentTopologyId].data.nodes, newSwitchData);
            //remove the links and hosts before removing the switch itself
            allTopologyData[currentTopologyId].data.links = this.removeAllLinksFromNode(allTopologyData[currentTopologyId].data.nodes[swIndex], allTopologyData[currentTopologyId].data.links, allTopologyData[currentTopologyId].data.nodes);
            if (allTopologyData[currentTopologyId].data.links === false) {
                return false;
            }

            allTopologyData = this.removeHostsOfaSwitch(allTopologyData[currentTopologyId].data.nodes[swIndex], allTopologyData, currentTopologyId);

            allTopologyData[currentTopologyId].data.nodes.splice(swIndex, 1);
        }

        if (currentTopologyName == "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    removeSwitchProcess(key);
                }
            }
        } else {
            removeSwitchProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    removeHostsOfaSwitch(sw, allTopologyData, currentTopologyId) {
        if(sw && sw.children && sw.children.length > 0){
            for (let i = 0; i < sw.children.length; i++) {
                this.removeHost({value:sw.children[i], topologyId: currentTopologyId}, allTopologyData);
            }
        }else{console.log("NO CHILDREN FOR THIS SWITCH");}
        return allTopologyData;
    }

    removeAllLinksFromNode(node, links, nodeList) {
        var linksToRemove = this.findLinkIndexByNodeIds(links, [node.id], nodeList);
        for (let i = 0; i < linksToRemove.length; i++) {
            if (linksToRemove[i] < 0) {
                return false;
            }
            delete links[linksToRemove[i]];
        }
        links = links.filter(function(n){ return n != undefined });
        return links;
    }

    addNewHost(data, allTopologyData) {
        this.isEmptyTopology(allTopologyData);
        console.log('New Host Data', data);
        let newHostData = data.value;
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        let addNewHostProcess = (currentTopologyId)=> {
            if (this.isNodeUnique(newHostData, allTopologyData[currentTopologyId].data.nodes)) {

                let swId = this.isBgpRouter(newHostData) ? newHostData.deviceId : newHostData.port.id;

                let sw = PathCalculations.topologyFindSwitchDTOById(swId, allTopologyData[currentTopologyId].data);
                if (!this.isNotNullOrUndefinedOrEmptyString(sw)) {
                    console.log("-----THIS HOST HAS NO RELEVANT SWITCH IN THIS TOPOLOGY.. IGNORING---");
                } else {
                    if(!this.isNotNullOrUndefinedOrEmptyString(newHostData.type)){
                        newHostData.type = HOSTTYPE.UNKNOWN;
                    }
                    newHostData = new tplHost(newHostData);
                    allTopologyData[currentTopologyId].data.nodes.push(newHostData);

                    if (!this.isNotNullOrUndefinedOrEmptyString(sw.children)) {
                        sw.children = [];
                    }

                    sw.children.push(newHostData);
                    allTopologyData[currentTopologyId].data.links.push(new tplLink({
                        source: sw,//DocumentConverter.getNodeIndex(allTopologyData[currentTopologyName].data.nodes, sw),
                        target: newHostData,//DocumentConverter.getNodeIndex(allTopologyData[currentTopologyName].data.nodes, newHostData),
                        linktype: "hostlink", // TODO BGPROUTER LINK IF
                        topologyId: "",
                        srcPort: sw,
                        destPort: newHostData,
                        securityLevel: 1,
                        status: LINKSTATUS.LIVE,
                        version: 1,
                        revision: 1,
                        timestamp: new Date(),
                        id: ""
                    }));
                }

            } else {
                console.log("ID IS NOT UNIQUE");
            }
        }

        if (currentTopologyName === "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    addNewHostProcess(key);
                }
            }
        } else {
            addNewHostProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    addNewGateway(data, allTopologyData) {
        var newGatewayData = data.value;
        this.isEmptyTopology(allTopologyData);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        var addNewGatewayDataProcess = (currentTopologyId)=> {
            //topoid check if no then id/name is main
            if (this.isNodeUnique(newGatewayData, allTopologyData[currentTopologyId].data.nodes)) {
                newGatewayData = new tplNetworkDevice(newGatewayData);
                allTopologyData[currentTopologyId].data.nodes.push(newGatewayData);
            } else {
                console.log("ID IS NOT UNIQUE");
            }
        }

        if (currentTopologyName == "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    addNewGatewayDataProcess(key);
                }
            }
        } else {
            addNewGatewayDataProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    addNewCloud(data, allTopologyData) {
        var newCloudData = data.value;
        this.isEmptyTopology(allTopologyData);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        var addNewCloudDataProcess = (currentTopologyId)=> {
            //topoid check if no then id/name is main
            if (this.isNodeUnique(newCloudData, allTopologyData[currentTopologyId].data.nodes)) {
                newCloudData = new tplCloud(newCloudData);
                allTopologyData[currentTopologyId].data.nodes.push(newCloudData);
            } else {
                console.log("ID IS NOT UNIQUE");
            }
        }

        if (currentTopologyName == "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    addNewCloudDataProcess(key);
                }
            }
        } else {
            addNewCloudDataProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    addNewDomain(data, allTopologyData) {
        var newDomainData = data.value;
        this.isEmptyTopology(allTopologyData);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        var addNewDomainDataProcess = (currentTopologyId)=> {
            //topoid check if no then id/name is main
            if (this.isNodeUnique(newDomainData, allTopologyData[currentTopologyId].data.nodes)) {
                newDomainData = new tplDomain(newDomainData);
                allTopologyData[currentTopologyId].data.nodes.push(newDomainData);
            } else {
                console.log("ID IS NOT UNIQUE");
            }
        }

        if (currentTopologyName == "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    addNewDomainDataProcess(key);
                }
            }
        } else {
            addNewDomainDataProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    removeDomain(data, allTopologyData){
        return this.removeSwitch(data, allTopologyData);
    }

    removeHost(data, allTopologyData) {
        var newHostData = data.value;
        this.isEmptyTopology(allTopologyData);
        console.log('Remove Host Data', data);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        var removeHostProcess = (currentTopologyId)=> {
            let swId = this.isBgpRouter(newHostData) ? newHostData.deviceId : (newHostData.port && newHostData.port.id ? newHostData.port.id : null);
            if(newHostData.port && newHostData.port.id){
                var sw = PathCalculations.topologyFindSwitchDTOById(newHostData.port.id, allTopologyData[currentTopologyId].data);
                if (sw && sw.children && sw.children.length > 0) {
                    let childIndex = DocumentConverter.getNodeIndex(sw.children, newHostData);
                    if (this.isNotNullOrUndefined(childIndex) && childIndex > -1) {
                        sw.children.splice(childIndex, 1);//remove from data
                    } else {
                        console.log("could not find the host inside parents children list");
                    }
                    let linkIndexOfNodeId = this.findLinkIndexByNodeIds(allTopologyData[currentTopologyId].data.links, [newHostData.id], allTopologyData[currentTopologyId].data.nodes);
                    if (this.isNotNullOrUndefined(linkIndexOfNodeId) && linkIndexOfNodeId.length > 0) {
                        allTopologyData[currentTopologyId].data.links.splice(linkIndexOfNodeId[0], 1);
                    } else {
                        console.log("No related link could be found for host");
                    }

                    //if(newSwitchData.deviceInfo.type == DEVICETYPE.PHISICAL_SWITCH){ currentTopologyId = this.allTopologyData[ Object.keys(this.allTopologyData)[0]].name };
                    let hostIndex = DocumentConverter.getNodeIndex(allTopologyData[currentTopologyId].data.nodes, newHostData);
                    if (!this.isNotNullOrUndefined(hostIndex) || hostIndex < 0) {
                        console.log("HOST COULD NOT BE FOUND");
                    } else {
                        allTopologyData[currentTopologyId].data.nodes.splice(hostIndex, 1);
                    }
                } else {
                    console.log("Switch does not have any children");
                }
            }else{
                console.log("HOST DOESNT HAVE PORT FIELD HENCE COULDN'T FIND ID")
            }
        }

        if (currentTopologyName === "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    removeHostProcess(key);
                }
            }
        } else {
            removeHostProcess(currentTopologyName);
        }


        return allTopologyData;
    }

    removeGateway(data, allTopologyData) {
        var newGatewayData = data.value;
        this.isEmptyTopology(allTopologyData);
        console.log('Remove NetworkDevice Data', data);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        var removeGatewayProcess = (currentTopologyId)=> {
            var gwIndex = DocumentConverter.getNodeIndex(allTopologyData[currentTopologyId].data.nodes, newGatewayData);
            //remove the links and hosts before removing the switch itself
            allTopologyData[currentTopologyId].data.links = this.removeAllLinksFromNode(allTopologyData[currentTopologyId].data.nodes[gwIndex], allTopologyData[currentTopologyId].data.links, allTopologyData[currentTopologyId].data.nodes);
            if (allTopologyData[currentTopologyId].data.links === false) {
                return false;
            }

            allTopologyData = this.removeHostsOfaSwitch(allTopologyData[currentTopologyId].data.nodes[gwIndex], allTopologyData, currentTopologyId);

            allTopologyData[currentTopologyId].data.nodes.splice(gwIndex, 1);
        }

        if (currentTopologyName === "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    removeGatewayProcess(key);
                }
            }
        } else {
            removeGatewayProcess(currentTopologyName);
        }


        return allTopologyData;
    }

    removeCloud(data, allTopologyData){
        return this.removeSwitch(data, allTopologyData);
    }

    updateHostStatus(data, allTopologyData) {
        var newHostData: HostDTO = data.value;
        this.isEmptyTopology(allTopologyData);
        console.log('Update Host Data', data);

        var updateHostProcess = (currentTopologyId)=> {
            var host: HostDTO = PathCalculations.topologyFindSwitchDTOById(newHostData.id, allTopologyData[currentTopologyId].data);
            if (!this.isNotNullOrUndefinedOrEmptyString(host)) {
                console.log("NODE HOST WITH THAT ID (" + newHostData.id + ") COULDN'T BE FOUND",data);
                return false;
            } else {
                if(newHostData.status) host.status = newHostData.status;
                if(newHostData.name) host.name = newHostData.name;
                if(newHostData.port && host.port){
                    if(newHostData.port.address && host.port.address){
                        if(newHostData.port.address.ipv4 && host.port.address.ipv4){
                            host.port.address.ipv4 = newHostData.port.address.ipv4;
                        }
                    }else if(newHostData.port.address && !host.port.address){
                        host.port.address = {};
                        host.port.address.ipv4 = newHostData.port.address.ipv4;
                    }
                }else if(newHostData.port && !host.port){
                    host.port = newHostData.port;
                }
            }
        }

        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        if (currentTopologyName === "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    updateHostProcess(key);
                }
            }
        } else {
            updateHostProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    updateGatewayStatus(data, allTopologyData) {
        var newGatewayData: HostDTO = data.value;
        this.isEmptyTopology(allTopologyData);
        console.log('Update Host Data', data);

        var updateGatewayProcess = (currentTopologyId)=> {
            var host = PathCalculations.topologyFindSwitchDTOById(newGatewayData.id, allTopologyData[currentTopologyId].data);
            if (!this.isNotNullOrUndefinedOrEmptyString(host)) {
                console.log("NODE HOST WITH THAT ID (" + newGatewayData.id + ") COULDN'T BE FOUND",data);
                return false;
            } else {
                if(newGatewayData.status) host.status = newGatewayData.status;
                if(newGatewayData.port && host.port){
                    if(newGatewayData.port.address && host.port.address){
                        if(newGatewayData.port.address.ipv4 && host.port.address.ipv4){
                            host.port.address.ipv4 = newGatewayData.port.address.ipv4;
                        }
                    }else if(newGatewayData.port.address && !host.port.address){
                        host.port.address = {};
                        host.port.address.ipv4 = newGatewayData.port.address.ipv4;
                    }
                }else if(newGatewayData.port && !host.port){
                    host.port = newGatewayData.port;
                }
            }
        }

        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        if (currentTopologyName === "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    updateGatewayProcess(key);
                }
            }
        } else {
            updateGatewayProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    findExactLink(linkArray: Array<LinkDTO>, src: PortDetail, dst: PortDetail): number{
        for(let i = 0; i < linkArray.length; ++i){
            if(linkArray[i].srcPort.id == src.id && linkArray[i].srcPort.number == src.number &&
                linkArray[i].destPort.id == dst.id && linkArray[i].destPort.number == dst.number){
                return i;
            }
        }
        return -1;
    }

    findReverseLink(linkArray: Array<tplLink>, src: PortDetail, dst: PortDetail): number{
        for(let i = 0; i < linkArray.length; ++i){
            if(linkArray[i].srcPort.id == dst.id && linkArray[i].srcPort.number == dst.number &&
                linkArray[i].destPort.id == src.id && linkArray[i].destPort.number == src.number && !linkArray[i].reverse){ //found an unexplored link
                return i;
            }
        }
        return -1;
    }

    addNewLink(newLinkData, allTopologyData): any {
        this.isEmptyTopology(allTopologyData);
        let currentTopologyName = this.getTopologyNameOfEvent(newLinkData, allTopologyData);
        console.log('New Link Data', newLinkData);

        let addLinkProccess = (currentTopologyId)=> {

            let dataSource = DocumentConverter.getNodeIndex(allTopologyData[currentTopologyId].data.nodes, newLinkData.value.srcPort);
            let dataTarget = DocumentConverter.getNodeIndex(allTopologyData[currentTopologyId].data.nodes, newLinkData.value.destPort);

            //let isLinkAlreadyExisting: Array<number> = this.findLinkIndexByNodeIds(allTopologyData[currentTopologyId].data.links, [newLinkData.value.srcPort.id, newLinkData.value.destPort.id], allTopologyData[currentTopologyName].data.nodes);
            let isLinkAlreadyExisting: number = this.findExactLink(allTopologyData[currentTopologyId].data.links, newLinkData.value.srcPort, newLinkData.value.destPort);
            let isReverseLinkExists: number = this.findReverseLink(allTopologyData[currentTopologyId].data.links, newLinkData.value.srcPort, newLinkData.value.destPort); // if not found (<0), add reverse

            if (this.isNotNullOrUndefined(dataSource) && dataSource > -1 &&
                this.isNotNullOrUndefined(dataTarget) && dataTarget > -1 &&
                isLinkAlreadyExisting < 0 && isReverseLinkExists < 0) { // if new link
                // needToUpdateBool = this.addLinkDataToLinkArray(newLinkData.value, dataSource, dataTarget, allTopologyData[currentTopologyId].data.links);
                console.log("adding new link");
                newLinkData.value['source'] = allTopologyData[currentTopologyId].data.nodes[dataSource];
                newLinkData.value['target'] = allTopologyData[currentTopologyId].data.nodes[dataTarget];
                newLinkData.value['type'] = "Link";

                if (dataSource === dataTarget) {
                    newLinkData.value["selfLink"] = true;
                }
                newLinkData = new tplLink(newLinkData.value);
                allTopologyData[currentTopologyId].data.links.push(newLinkData);
            } else if (this.isNotNullOrUndefined(dataSource) && dataSource > -1 &&
                this.isNotNullOrUndefined(dataTarget) && dataTarget > -1 &&
                isLinkAlreadyExisting > -1) { // if link exists (if its down)
                allTopologyData[currentTopologyId].data.links[isLinkAlreadyExisting].isDown = false;
            } else if (this.isNotNullOrUndefined(dataSource) && dataSource > -1 &&
                this.isNotNullOrUndefined(dataTarget) && dataTarget > -1 &&
                isReverseLinkExists > -1 && isLinkAlreadyExisting < 0) { // if link reverse exists
                allTopologyData[currentTopologyId].data.links[isReverseLinkExists].reverse = new tplLink(newLinkData.value);
            } else {
                console.log(newLinkData);
                console.log("COULDNT FIND LINK SOURCE/TARGET");
            }
        }

        if (currentTopologyName === "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    addLinkProccess(key);

                    //if (needToUpdateBool) {
                    //    return allTopologyData;
                    //}
                }
            }
        } else {
            addLinkProccess(currentTopologyName);
        }
        return allTopologyData;
    }

    // addLinkDataToLinkArray(newLinkData: LinkDTO, sourceIndex, targetIndex, linkArray: Array<LinkDTO>) {
    //
    //     // for (let i = 0; i < linkArray.length; i++) {
    //     //     let pointer = linkArray[i];
    //     //     if (this.isNotNullOrUndefinedOrEmptyString(pointer.srcPort)) {
    //     //         if (pointer.srcPort.id == newLinkData.srcPort.id && pointer.destPort.id == newLinkData.destPort.id) {
    //     //             console.log("same link already exists");
    //     //             return false;
    //     //         } else if (pointer.srcPort.id == newLinkData.destPort.id && pointer.destPort.id == newLinkData.srcPort.id) {
    //     //             console.log("assigning reverse to already existing link");
    //     //             pointer["reverse"] = newLinkData;
    //     //             return false;
    //     //         }
    //     //     }
    //     // }
    //
    //     console.log("adding new link");
    //     newLinkData['source'] = sourceIndex;
    //     newLinkData['target'] = targetIndex;
    //     newLinkData['type'] = "Link";
    //
    //     if (sourceIndex === targetIndex) {
    //         newLinkData["selfLink"] = true;
    //     }
    //     newLinkData = new tplLink(newLinkData);
    //     linkArray.push(newLinkData);
    //     return true;
    //
    // }

    removeLink(newLinkData, allTopologyData) {
        let currentTopologyName = this.getTopologyNameOfEvent(newLinkData, allTopologyData);

        var removeLinkProcess = (currentTopologyId)=> {
            var linkIndex = this.findLinkIndexByNodeIds(allTopologyData[currentTopologyId].data.links, [newLinkData.value.srcPort.id, newLinkData.value.destPort.id], allTopologyData[currentTopologyId].data.nodes);
            if (linkIndex[0] < 0) {
                return false;
            }

            if (newLinkData.value.required === true) {
                if( allTopologyData[currentTopologyId] && allTopologyData[currentTopologyId].data && allTopologyData[currentTopologyId].data.links && allTopologyData[currentTopologyId].data.links[linkIndex[0]]){
                    allTopologyData[currentTopologyId].data.links[linkIndex[0]].isDown = true;
                }
            } else {
                allTopologyData[currentTopologyId].data.links = this.removeLinkByIndexArray(linkIndex, allTopologyData[currentTopologyId].data.links);
            }
        }

        this.isEmptyTopology(allTopologyData);
        console.log('Remove Link Data', newLinkData);
        if (currentTopologyName === "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    removeLinkProcess(key);
                }
            }
        } else {//VIRTUAL
            removeLinkProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    updateLink(data, allTopologyData) {
        let newLinkData: LinkDTO = data.value;
        this.isEmptyTopology(allTopologyData);
        console.log('Update Link Data', data);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        let updateLinkStats = (currentLink, newLinkData)=>{
            if(currentLink.status != newLinkData.status){
                currentLink.status = newLinkData.status;
                currentLink.needsRender = true;
            }
            if(newLinkData.delay){currentLink.delay = newLinkData.delay}
            if(newLinkData.jitter){currentLink.jitter = newLinkData.jitter}
            if(newLinkData.loss){currentLink.loss = newLinkData.loss}
            currentLink.isDown = newLinkData.status == LINKSTATUS.DOWN;
            if(newLinkData.required){currentLink.required = newLinkData.required;}
        };

        let updateLinksProcess = (currentTopologyId)=> {
            for (let i = 0; i < allTopologyData[currentTopologyId].data.links.length; i++) {
                let currentLink = allTopologyData[currentTopologyId].data.links[i];
                if(currentLink.srcPort && currentLink.destPort){
                    if ( (currentLink.srcPort.id == newLinkData.srcPort.id && currentLink.destPort.id == newLinkData.destPort.id)) {
                        updateLinkStats(currentLink, newLinkData);
                    } else if( currentLink.srcPort.id == newLinkData.destPort.id && currentLink.destPort.id == newLinkData.srcPort.id ){ //reverse
                        if(currentLink["reverse"]){
                            updateLinkStats(currentLink["reverse"], newLinkData);
                        }
                    } else {}
                }else{
                  console.log("host link");
                }
            }
        };

        if (currentTopologyName === "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    updateLinksProcess(key);
                }
            }
        } else {//VIRTUAL
            updateLinksProcess(currentTopologyName);
        }

        return allTopologyData;
    }

    removeLinkByIndexArray(indexes, links) {
        if (indexes.length > 0) {
            console.log("splicing from links");
            for (let i = 0; i < indexes.length; i++) {
                links.splice(indexes[i], 1);
            }
        } else {
            console.log("array empty/duplicate link data in topology");
        }
        return links;
    }

    returnNested(obj, path) {
        var args = path.split(".");

        for (var i = 0; i < args.length; i++) {
            if (!obj || !obj.hasOwnProperty(args[i]) || !this.isNotNullOrUndefined(obj)) {
                return false;
            }
            obj = obj[args[i]];
        }
        return obj;
    }

    updateStats(data, allTopologyData) {
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);
        let statsData = data.value;
        for (let i = 0; i < statsData.switches.length; i++) {

            let currentSwitchIndex = DocumentConverter.getNodeIndex(allTopologyData[currentTopologyName].data.nodes, statsData.switches[i]);
            if (currentSwitchIndex < 0) {
                return false
            }

            let currentSwitch = allTopologyData[currentTopologyName].data.nodes[currentSwitchIndex];
            if (currentSwitch && currentSwitch.stats) {
                currentSwitch.stats = statsData.switches[i]["stats"];
            }
        }

        for (let j = 0; j < statsData.links.length; j++) {
            let currentLink = this.findLinkIndexByNodeIds(allTopologyData[currentTopologyName].data.links, [statsData.links[j].srcPort.id, statsData.links[j].destPort.id], allTopologyData[currentTopologyName].data.nodes);
            if (currentLink[0] < 0) {
                return false
            }

            if (typeof allTopologyData[currentTopologyName].data.links[currentLink[0]] == "undefined") {
                //console.log("wrong stat data", allTopologyData, statsData, j);
            } else {
                let linkToBeUpdated = allTopologyData[currentTopologyName].data.links[currentLink[0]];
                linkToBeUpdated = this.portStatUpdate(allTopologyData[currentTopologyName].data.links[currentLink[0]], statsData.links[j]);
                if(linkToBeUpdated.srcPort.id == statsData.links[j].srcPort.id && linkToBeUpdated.destPort.id == statsData.links[j].destPort.id){
                    if(statsData.links[j].delay){linkToBeUpdated.delay = statsData.links[j].delay}
                    if(statsData.links[j].jitter){linkToBeUpdated.jitter = statsData.links[j].jitter}
                    if(statsData.links[j].loss){linkToBeUpdated.loss = statsData.links[j].loss}
                }else if(linkToBeUpdated.srcPort.id == statsData.links[j].destPort.id && linkToBeUpdated.destPort.id == statsData.links[j].srcPort.id){//reverse
                    if(linkToBeUpdated["reverse"]){
                        if(statsData.links[j].delay){linkToBeUpdated["reverse"].delay = statsData.links[j].delay}
                        if(statsData.links[j].jitter){linkToBeUpdated["reverse"].jitter = statsData.links[j].jitter}
                        if(statsData.links[j].loss){linkToBeUpdated["reverse"].loss = statsData.links[j].loss}
                    }
                }
            }

        }
        return allTopologyData
    }

    portStatUpdate(linkToBeUpdated, incomingLink) {
        if (linkToBeUpdated.srcPort.id == incomingLink.srcPort.id && linkToBeUpdated.srcPort.stats) {
            linkToBeUpdated.srcPort.stats = incomingLink.srcPort.stats;
            linkToBeUpdated.destPort.stats = incomingLink.destPort.stats;
            linkToBeUpdated["bandwidthUtilization"] = incomingLink["bandwidthUtilization"];
        } else {
            if (linkToBeUpdated["reverse"] && linkToBeUpdated["reverse"].destPort && linkToBeUpdated["reverse"].destPort.id == incomingLink.destPort.id) {
                linkToBeUpdated["reverse"].destPort["stats"] = incomingLink.destPort.stats;
                linkToBeUpdated["reverse"].srcPort["stats"] = incomingLink.srcPort.stats;
                linkToBeUpdated["reverse"]["bandwidthUtilization"] = incomingLink["bandwidthUtilization"];
            } else {
                console.log("the stats field is null or undefined or no link could be found");
            }
        }
        return linkToBeUpdated;
    }

    updateController(data: TopologyEventDTO, allTopologyData: any) {
        let newControllerData: ControllerDTO = <ControllerDTO>data.value;
        console.log('Update controller Data', data);
        let currentTopologyName = this.getTopologyNameOfEvent(data, allTopologyData);

        var updateControllerProcess = (currentTopologyId)=> {
            let topologyData = allTopologyData[currentTopologyId];
            if (topologyData) {
                for(let i in topologyData.data.controllers){
                    let controllerRef = topologyData.data.controllers[i];
                    if (controllerRef.id == newControllerData.id){
                        //controllerRef.controllerState = newControllerData.controllerState; TODO backendci arkadaşlar böyle bir field göndermediği için eventin tipinden anlıyoruz
                        if(data.type === TOPOLOGYEVENTTYPE.CONTROLLER_DEACTIVATED){
                            controllerRef.controllerState = CONTROLLERSTATE.INACTIVE;
                        }else{
                            controllerRef.controllerState = CONTROLLERSTATE.ACTIVE;
                        }
                    }
                }
            }
        }

        if (currentTopologyName == "PrognetTopology") {
            for (let key in allTopologyData) {
                if (allTopologyData[key].type === TOPOLOGYTYPE.PHYSICAL || allTopologyData[key].isMappedVersionShown) {
                    updateControllerProcess(key);
                }
            }
        } else {
            updateControllerProcess(currentTopologyName);
        }

        return allTopologyData;
    }
}
