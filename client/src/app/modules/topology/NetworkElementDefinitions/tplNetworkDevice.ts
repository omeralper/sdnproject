import {tplNode, tplNodeOptions} from "./tplNode";
import {NetworkDeviceDTO} from "../../../swagger/NetworkDeviceDTO";
import {NETWORKDEVICESTATUS} from "../../../swagger/NETWORKDEVICESTATUS";
import {NETWORKDEVICETYPE} from "../../../swagger/NETWORKDEVICETYPE";
import {PortDetail} from "../../../swagger/PortDetail";
import {topoConfig} from "../topology.config";
import {DocumentConverter} from "../../DocumentConverter";
import {ROUTERTYPEDef} from "../../../swagger/ROUTERTYPE";
/**
 * Created by ekinca on 4.07.2017.
 */

export class tplNetworkDevice extends tplNode implements NetworkDeviceDTO {

    /**
     * Ağ cihazının özellik seti.
     */
    redundancyDevices?: Array<NetworkDeviceDTO>;

    /**
     * Ağ cihazının bağlı bulunduğu port bilgisi.
     */
    port: PortDetail;

    /**
     * Ağ cihazının bağlı olduğu VLANID bilgisi.
     */
    vlanid?: number;

    /**
     * Ağ cihazının IP bilgisi.
     */
    ip: string;

    /**
     * Ağ cihazının türü.
     */
    type: NETWORKDEVICETYPE;

    /**
     * Ağ cihazının MAC bilgisi.
     */
    mac: string;

    /**
     * Ağ cihazının durumu.
     */
    status: NETWORKDEVICESTATUS;

    //element attributes
    colorCode: any;

    constructor(options: tplNetworkDeviceOptions){
        super(options);
        for(let key in options){
            this[key] = options[key];
        }

        this.fill = "#25AAE2";
        this.stroke = "#1A7599";
        this.strokeWidth = 3;
        this.shape = options.shape || "circle";

        this.nodetype = options.nodetype || "networkdevicenode";
        this.mainIcon = this.getMainIcon();
    }

    getNodeType(){
        if(this.type === NETWORKDEVICETYPE.GATEWAY){
            return "gatewaynode";
        } else if (this.type === NETWORKDEVICETYPE.ACCESS_POINT){
            return "accesspointnode";
        } else if( this.type === NETWORKDEVICETYPE.VIRTUAL_GATEWAY){
            return "virtualgatewaynode";
        }else {
            return "networkdevicenode";
        }
    }

    getStrokeColor(){
        if(DocumentConverter.isTruthy(this.colorCode)){
            return this.colorCode;
        }else{
            if (this.status === NETWORKDEVICESTATUS.DOWN) {
                return "#99381B";
            }else{
                return topoConfig.defaultOpenFlowSwitchPeripheryColor;
            }
        }
    }

    getFillColor(){
        if(DocumentConverter.isTruthy(this.colorCode)){
            return this.colorCode;
        }else{
            if (this.status === NETWORKDEVICESTATUS.DOWN) {
                return topoConfig.switchDownColor;
            }else{
                return topoConfig.defaultOpenFlowSwitchFillColor;
            }
        }
    }

    getMainIcon(){
        if (this.type == NETWORKDEVICETYPE.GATEWAY || this.type == NETWORKDEVICETYPE.VIRTUAL_GATEWAY) {
            return '\uf0b2'; //fa-arrows-alt
        } else if (this.type == NETWORKDEVICETYPE.ACCESS_POINT) {
            return '\uf1eb'; //fa-wifi
        } else if (this.type == NETWORKDEVICETYPE.DHCP_SERVER) {
            return '\uf0e8'; //fa-sitemap
        } else if(this.type === NETWORKDEVICETYPE.FIREWALL){
            return '\uf132';  //fa-shield
        } else if(this.type === NETWORKDEVICETYPE.NTOP){
            return '\uf06d';  //fa-fire
        } else if (this.type === NETWORKDEVICETYPE.INTERNAL_GATEWAY){
            return '\uf1b8';
        } else if (this.type === NETWORKDEVICETYPE.VRR){
            return '\uf074';
        }
    }

    getOpacity(){
        let flag = localStorage.getItem("showNetworkDevicesFlag");
        let type = this.getNodeType();

        if((type == "gatewaynode" || type == "virtualgatewaynode" || type == "networkdevicenode") && flag == "false"){
            return 0;
        }

        return 1;
    }

    radiusCalculator() {
        return topoConfig.switchRadius;
    }

}

export interface tplNetworkDeviceOptions extends tplNodeOptions {
    colorCode?: any;
}