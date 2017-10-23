import {Injectable} from "@angular/core";
import {topoConfig} from "./topology.config";
import {DocumentConverter} from "../DocumentConverter";
import {HOSTSTATUS} from "../../swagger/HOSTSTATUS";
import {DEVICETYPE} from "../../swagger/DEVICETYPE";
import {NETWORKDEVICETYPE} from "../../swagger/NETWORKDEVICETYPE";
import {UIHelper, BROWSERTYPE, IconOptions} from "../UIHelper";
import {HOSTTYPE} from "../../swagger/HOSTTYPE";
import {TOPOLOGYTYPE} from "../../swagger/TOPOLOGYTYPE";
import {SwitchDTO} from "../../swagger/SwitchDTO";
import {SWITCHSTATUS} from "../../swagger/SWITCHSTATUS";
import {HostDTO} from "../../swagger/HostDTO";
import {DomainDTO} from "../../swagger/DomainDTO";
/**
 * Created by ekinca on 02.02.2016.
 */
@Injectable()
export class D3attributes {

    constructor(public documentConverter: DocumentConverter, public uiHelper: UIHelper) {}





    fillColor(d) {
        if (this.documentConverter.isDomain(d.type)) {
            if (d.status == "DOWN") {
                return topoConfig.domainDownColor;
            } else if(d.colorCode){
                return d.colorCode;
            } else {
                return topoConfig.defaultClusterFillColor;
            }
        } else {
            if ((d.colorCode !== null && typeof d.colorCode !== "undefined" && d.colorCode != "")) {
                if (d.colorCode.length > 0) {
                    return d.colorCode;
                }
            } else {
                return "black";
            }
        }
    }

    strokeColor(d) {
        // NODE periphery
        if (d.type !== "Link") {
            if ((d.colorCode !== null && typeof d.colorCode !== "undefined" && d.colorCode != "")) {
                if (d.colorCode.length > 0) {
                    return d.colorCode;
                }
            } else {
                if (d.status === "DOWN") {
                    return "#99381B";
                } else {
                    if(this.documentConverter.isDomain(d.type)){ // cluster
                        return topoConfig.defaultClusterPeripheryColor;
                    }else{
                        return "black";
                    }
                }
            }
        }
    }

    lineColor(d) {
        if (!d.blocked) { // if it has a colorCode
            if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(d.colorCode)) {
                if (d.colorCode == topoConfig.PATH_DRAW_COLOR) {
                    // return topoConfig.PATH_DRAW_COLOR; should be different for switch and host
                } else {
                    return d.colorCode;
                }
            }

            if(d.isDown === true){
                return "gray";
            }

            if(d.selfLink === true){ //if selflink even if it's not blocked
                return "red";
            }

            if(((this.documentConverter.isNetworkDevice(d.source.type)) && d.target.type == "Switch") || (d.source.type == "Switch" && (this.documentConverter.isNetworkDevice(d.target.type)) )){
                return "";
            }

            if( this.documentConverter.isLinkBetweenClusterOrCloud(d) ){
                return topoConfig.defaultClusterCloudPathColor;
            }

            if (!(d.target.type == "Switch" && d.source.type == "Switch")  ) { // if host
                return "blue";
            }

        } else {
            return "red";
        }
    }

    strokeDash(d) {
        if (d.blocked || (d.isMvtnLinkUsed) || d.selfLink || d.isDown) {
            return "15, 5";
        }
    }

    strokeOpacity(d) {
        if (d.blocked || d.selfLink || d.isDown) {
            return "0.5";
        }
    }

    opacityOfElements(d){
        if( d.opacity >= 0 || parseInt(d.opacity, 10) ){
            return d.opacity;
        }
    }

    radiusCalculator(d) {
        if (this.documentConverter.isNetworkDevice(d.type)) {
            return topoConfig.switchRadius;
        } else if (this.isHost(d.type)) {
            return topoConfig.hostRadius;
        } else {
            return 10;
        }
    }

    widthHeightCalculator(d: SwitchDTO): number{
        if (d.deviceInfo && d.deviceInfo.type === DEVICETYPE.IP_PHONE){
            return topoConfig.ipPhoneHeightAndWidth;
        }
    }

    rectElementXY(d: SwitchDTO){
        if (d.deviceInfo && d.deviceInfo.type === DEVICETYPE.IP_PHONE){
            return topoConfig.ipPhoneXY;
        }
    }

    isHost(type):any {
        return this.documentConverter.isHost(type);
    }

    closedLinkArc(d) {
        let lineData, r;
        lineData = [];
        if (d.selfLink === true) {
            r = 30;
            lineData.push({
                "x": d.source.x,
                "y": d.source.y
            });
            lineData.push({
                "x": d.source.x - r,
                "y": d.source.y + r
            });
            lineData.push({
                "x": d.source.x - 2 * r,
                "y": d.source.y
            });
            lineData.push({
                "x": d.source.x - r,
                "y": d.source.y - r
            });
            lineData.push({
                "x": d.source.x,
                "y": d.source.y
            });
        }
        return lineData;
    }

    transform(d) {
        return "translate(" + d.x + "," + d.y + ")";
    }

    textStartOffSet(d, selfLink: string, isDown: string, elseCondition: string): string{
        if (d.selfLink === true) {
            return selfLink;
        } else if (d.isDown === true) {
            return isDown;
        } else {
            return elseCondition;
        }
    }

    stackedTextIcon(d){
        if(this.documentConverter.isSwitch(d.type) && d.isOpenStackSupported){
            return '\uf0ec';
        }else if(DocumentConverter.isVNFHost(d)){
            if(d.type === HOSTTYPE.SFC_FIREWALL){
                return '\uf06d'; //fire
            }else if(d.type === HOSTTYPE.DPI){
                return '\uf06e'; //eye
            }else{
                return '\uf074'; //random, load balancer
            }
        }
    }

    returnText4StatusIconXPosition(d): string{
        if ( d.type == "Switch" && d.status == SWITCHSTATUS.POWER_SAVER ){
            return "0.4em";
        }
    }

    returnText4StatusIconYPosition(d): string{
        if ( (this.documentConverter.isHost(d.type) && d['networks'] && d['networks'].length > 0) ) {
            return "-1.7em";
        } else if(d.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY) {
            return "-1.8em";
        } else if ( d.type == "Switch" && d.status == SWITCHSTATUS.POWER_SAVER ){
            return "0.5em";
        }
    }

    returnText4StatusIcon(d, topologyType): string {
        if ( (this.documentConverter.isHost(d.type) && d['networks'] && d['networks'].length > 0) || (d.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY && topologyType === TOPOLOGYTYPE.PHYSICAL) ) {
            return '\uf1e1'; //share
        } else if ( d.type == "Switch" && d.status == SWITCHSTATUS.POWER_SAVER){
            return '\uf06c'; //leaf
        } else {
            return '';
        }
    }

    returnAlarmStatusTextDy(d){
        return topoConfig.alarmStatusY;
    }

    returnAlarmStatusTextDx(d){
        return topoConfig.alarmStatusX;
    }

    returnAlarmStatusIcon(d: DomainDTO){
        if(d.alarms && d.alarms.maxSeverity && d.alarms.maxSeverity == "FATAL"){
            return "\uf071"; // fa-exclamation-triangle
        }else{
            if(d.alarms && (d.alarms.maxSeverity == "CRITICAL" || d.alarms.maxSeverity == "MAJOR" || d.alarms.maxSeverity == "MINOR")){
                return "\uf0f3"; // fa-bell
            }// else dont return anything
        }
    }

    returnAlarmStatusTextFill(d){
        if(d.alarmStatus && d.alarmStatus.fatal && d.alarmStatus.fatal.length > 0){
            return "#FF0000";
        }else{
            if(d.alarmStatus && d.alarmStatus.critical && d.alarmStatus.critical.length > 0){
                return "#FF6A00";
            } else if(d.alarmStatus && d.alarmStatus.important && d.alarmStatus.important.length > 0){
                return "#F1C40F";
            } else { //  (d.alarmStatus && d.alarmStatus.unimportant && d.alarmStatus.unimportant.length > 0)
                return "#659BE0";
            }
        }
    }

    findAndUpdateHostsAfterReset(src, dst, topoData) {
        let currentTopoNodes = topoData.data.nodes;

        for (let i = 0; i < currentTopoNodes.length; i++) {
            if (currentTopoNodes[i].id == src) {
                currentTopoNodes[i].colorCode = "red";
            } else if (currentTopoNodes[i].id == dst) {
                currentTopoNodes[i].colorCode = "green";
            }
        }

        return topoData;
    }
}
