/**
 * Created by ekinca on 28.07.2017.
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
import {SdnipRouterDTO} from "../../../swagger/SdnipRouterDTO";
import {ROUTERTYPE} from "../../../swagger/ROUTERTYPE";

export class tplBgpRouter extends tplNode implements SdnipRouterDTO {

    /**
     * Rotalayıcı VLAN değeri
     */
    vlanId?: string;

    /**
     * Otonom sistem numarası
     */
    asNumber: number;

    /**
     * Rotalayıcı IP/MASK değeri. Örneğin: 10.10.0.3/24
     */
    ip: string;

    /**
     * Sdnip router numarası
     */
    sdnipRouterId?: number;

    /**
     * BGP rotalayıcı parolası
     */
    bgpPassword?: string;

    /**
     * Sdnip router tipi
     */
    type: ROUTERTYPE;

    /**
     * Bağlı anahtarlayıcı numarası
     */
    deviceId?: string;

    /**
     * Rotalayıcı MAC değeri
     */
    mac?: string;

    /**
     * BGP sözcüsü tipindeki router için kontrol düzlemi IP değeri
     */
    controlPlaneIp?: string;

    /**
     * Bağlı anahtarlayıcı port numarası
     */
    port?: number;

    /**
     * Sdnip router ismi
     */
    name: string;

    /**
     * BGP rotalayıcı port numarası
     */
    bgpPort?: number;

    //element attributes
    colorCode;

    constructor(options: tplBgpRouterOptions){
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
        this.mainIconFontSize = "20px";
    }

    getNodeType(){
        return "bgprouternode";
    }

    getStrokeColor(){
        if(DocumentConverter.isTruthy(this.colorCode)){
            return this.colorCode;
        }else{
            return topoConfig.defaultPeripheryColor;
        }
    }

    getFillColor(){
        if(DocumentConverter.isTruthy(this.colorCode)){
            return this.colorCode;
        }else{
            return topoConfig.defaultHostFillColor;
        }
    }

    getMainIcon(){
        if(this.type === ROUTERTYPE.SPEAKER){
            return '\uf0a1';
        }else if(this.type === ROUTERTYPE.PEER){
            return '\uf086';
        }else{
            return '\uf09e';
        }
    }

    radiusCalculator() {
        return topoConfig.bgpRouterRadius;
    }

}

export interface tplBgpRouterOptions extends tplNodeOptions {
}