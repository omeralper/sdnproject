/**
 * Created by ekinca on 4.07.2017.
 */
import {tplNode, tplNodeOptions} from "./tplNode";
import {HostDTO} from "../../../swagger/HostDTO";
import {HOSTSTATUS} from "../../../swagger/HOSTSTATUS";
import {PortDetail} from "../../../swagger/PortDetail";
import {HOSTTYPE} from "../../../swagger/HOSTTYPE";
import {UserInfo} from "../../../swagger/UserInfo";
import {topoConfig} from "../topology.config";
import {DocumentConverter} from "../../DocumentConverter";
import {IconOptions, UIHelper} from "../../UIHelper";
import {HostNetworkDTO} from "../../../swagger/HostNetworkDTO";

export class tplHost extends tplNode implements HostDTO {

    /**
     * Kullanıcı bilgileri.
     */
    userInfo: UserInfo;

    /**
     * ??
     */
    vnfrId?: string;

    /**
     * ??
     */
    vnfdId?: string;

    /**
     * ??
     */
    vnfrType?: string;

    /**
     * Cihaz karantinada ise true; değil ise false
     */
    quarantined?: boolean;

    /**
     * Cihaz tipi.
     */
    type: HOSTTYPE;

    /**
     * Cihazın ait olduğu ağ topolojilerinin değerleri.
     */
    networks?: Array<HostNetworkDTO>;

    /**
     * ??
     */
    vnfdName?: string;

    /**
     * Bu uç birim cihazının topoloji'de her zaman yer alması gerektiği gösteren değer. Eğer bu cihaz topolojiden kalkarsa sistemde bir problem var demektir.
     */
    required?: boolean;

    /**
     * Cihazın güvenlik seviyesi.
     */
    securityLevel: number;

    /**
     * Cihazın aktif olduğu zaman.
     */
    activeSince: Date;

    /**
     * Cihazın en son ağda görüldüğü zaman.
     */
    lastSeen: Date;

    /**
     * ??
     */
    depth?: number;

    /**
     * ??
     */
    blocked?: boolean;

    /**
     * Cihazın bağlı bulunduğu port bilgisi.
     */
    port: PortDetail;

    /**
     * Cihaz adı.
     */
    name?: string;

    /**
     * ??
     */
    colorCode?: string;

    /**
     * ??
     */
    vnfrName?: string;

    /**
     * Cihaz sağlık durumu.
     */
    status: HOSTSTATUS;

    /**
     * ??
     */
    vnfdType?: string;

    //element attributes
    stackedTextX; // for fa-clone on VNF hosts
    stackedTextY; // for fa-clone on VNF hosts
    stackedIcon; // for fa-clone on VNF hosts
    stackedIconFontSize;

    constructor(options: tplHostOptions){
        super(options);
        for(let key in options){
            this[key] = options[key];
        }

        this.fill = "#25AAE2";
        this.stroke = "#1A7599";
        this.strokeWidth = 3;
        this.shape = options.shape || "circle";

        this.nodetype = options.nodetype || this.getNodeType();

        this.mainIcon = this.getMainIcon();
        this.mainIconDx =  DocumentConverter.isVNFHost(this) ? "0.25em" : "0";
        this.mainIconDy =  DocumentConverter.isVNFHost(this) ? "0.2em" : "0";
        this.mainIconFontSize = DocumentConverter.isVNFHost(this) ? "8px" : undefined;
        this.stackedTextX = this.stackedTextY = DocumentConverter.isVNFHost(this) ? "0" : undefined;
        this.stackedIcon = DocumentConverter.isVNFHost(this) ? "\uf24d" : undefined;
        this.stackedIconFontSize = DocumentConverter.isVNFHost(this) ? "15px" : undefined;
    }

    getNodeType(){
        return "hostnode";
    }

    getStrokeColor(){
        if(DocumentConverter.isTruthy(this.colorCode)){
            return this.colorCode;
        }else{
            if(this.networks.length > 0){ // virtual host
                return '#ff8533';
            } else if (this.quarantined){
                return 'black';
            } else{
                return topoConfig.defaultOpenFlowSwitchPeripheryColor;
            }
        }
    }

    getFillColor(){
        if(DocumentConverter.isTruthy(this.colorCode)){
            return this.colorCode;
        }else{
            if(this.status){
                if(this.status === HOSTSTATUS.LIVE){
                    if( this.type == HOSTTYPE.DPI || this.type == HOSTTYPE.SFC_FIREWALL || this.type == HOSTTYPE.LOAD_BALANCER){
                        return "#4BDDD4";
                    }else{
                        return topoConfig.defaultHostFillColor;
                    }
                }else{
                    return topoConfig.liveHostFillColor;
                }
            }else{
                return topoConfig.defaultHostFillColor;
            }
        }
    }

    getMainIcon(){
        // switch (this.type) {
        //     case HOSTTYPE.COMPUTER:
        //         return '\uf109';    //fa-laptop
        //     case HOSTTYPE.PHONE:
        //         return '\uf095';    //fa-phone
        //     case HOSTTYPE.CELL_PHONE:
        //         return '<tspan style="font-size:17pt;">\uf10b</tspan>'; //fa-mobile
        //     case HOSTTYPE.IPTV_STB:
        //         return '\uf0a0';    //fa-hdd-o
        //     case HOSTTYPE.MEDIA_PLAYER:
        //         return '\uf144';    //fa-play/circle
        //     case HOSTTYPE.PRINTER:
        //         return '\uf02f';    //fa-print
        //     case HOSTTYPE.SMART_TV:
        //         return '\uf26c';    //fa-television
        //     case HOSTTYPE.CAMERA:
        //         return '\uf03d';    //fa-video-camera
        //     case HOSTTYPE.SERVER:
        //         //return '\uf1c0'; //fontawesome fa-database
        //         return '\uf0a0'; //fontawesome fa-hdd-o
        //     //return '\uf233'; //fontawesome fa-server
        //     case HOSTTYPE.FIREWALL:
        //     case HOSTTYPE.LOAD_BALANCER:
        //     case HOSTTYPE.DPI:
        //         return '\uf24d'; // fa-clone for stacking
        //     case HOSTTYPE.UNKNOWN:
        //         return '\uf128';
        //     default:
        //         return '\uf128';
        // }
        //VNF HOST
        if(DocumentConverter.isVNFHost(this)){
            let hostIcon = UIHelper.getIconOpts("HOSTTYPE",this.vnfdType) || UIHelper.getIconOpts("HOSTTYPE",HOSTTYPE.UNKNOWN);
            return (<IconOptions>hostIcon).fontCode || '\uf128';
        }else{
            //NOT VNF HOST
            let hostIcon = UIHelper.getIconOpts("HOSTTYPE",this.type) || UIHelper.getIconOpts("HOSTTYPE",HOSTTYPE.UNKNOWN);
            if (this.type==HOSTTYPE.CELL_PHONE) {
                return '<tspan style="font-size:17pt;">'+(<IconOptions>hostIcon).fontCode+'</tspan>';
            } else {
                return (<IconOptions>hostIcon).fontCode || '\uf128';
            }
        }
    }

    radiusCalculator() {
        return topoConfig.hostRadius;
    }

}

export interface tplHostOptions extends tplNodeOptions {
}