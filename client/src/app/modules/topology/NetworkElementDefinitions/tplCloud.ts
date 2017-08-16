/**
 * Created by ekinca on 17.07.2017.
 */

import { tplNode, tplNodeOptions } from "./tplNode";
import {SUPERTOPOLOGYTYPE} from "../../../swagger/SUPERTOPOLOGYTYPE";
import {DomainDTO} from "../../../swagger/DomainDTO";
import {WanPortInfoDTO} from "../../../swagger/WanPortInfoDTO";
import {WANPORTINFOSTATUS} from "../../../swagger/WANPORTINFOSTATUS";
import {WANPORTTYPE} from "../../../swagger/WANPORTTYPE";
import {BWUNIT} from "../../../swagger/BWUNIT";

export class tplCloud extends tplNode implements WanPortInfoDTO {
    /**
     * Geniş alan ağlarının hedef küme ile kuracağı bağlantının numarası.
     */
    superPortNumber: number;

    /**
     * Geniş alan ağlarının gerişlerinin anumarası.
     */
    sourcePortNumber: number;

    /**
     * Geniş alan ağlarının bağlantının hızı.
     */
    linkSpeed: number;

    /**
     * Geniş alan ağlarının açıklaması.
     */
    explanation?: string;

    /**
     * Geniş alan ağlarının gerişlerinin bağlı olduğu anahtarlayıcı anumarası.
     */
    sourceSwitchId: string;

    /**
     * Geniş alan ağlarının bağlı olduğu hedef küme adı.
     */
    targetClusterName?: string;

    /**
     * Geniş alan ağlarında giriş üzerinden kaçırılan paket oranı.
     */
    miss?: string;

    /**
     * Geniş alan ağlarınında hız tipi.
     */
    speedUnit: BWUNIT;

    /**
     * Geniş alan ağlarında giriş üzerinden geçen paketlerin gecikme süresi.
     */
    delay?: string;

    /**
     * Geniş alan ağlarında giriş üzerinden geçen paketlerin sapma oranı.
     */
    jitter?: string;

    /**
     * Geniş alan ağlarının gerişlerinin bilgi Adı.
     */
    name: string;

    /**
     * Geniş alan ağlarınında bağlantı linkinin tipi.
     */
    linkType?: WANPORTTYPE;

    /**
     * Geniş alan ağlarının bağlı olduğu hedef küme idsi.
     */
    targetClusterId: number;

    /**
     * Geniş alan ağlarının bağlı olduğu hedef küme port numarası.
     */
    targetPortNumber?: number;

    /**
     * Geniş alan ağlarınında bağlantının durumu.
     */
    status?: WANPORTINFOSTATUS;

    points;
    edgeLength: number;
    type: SUPERTOPOLOGYTYPE;

    nodes;
    links;
    size: number;

    constructor(options: tplDomainOptions){
        super(options);
        for(let key in options){
            this[key] = options[key];
        }

        this.fill = "#ff4d4d"; // will be method
        this.stroke = "#A53C5A";
        this.strokeWidth = 3;
        this.edgeLength = 30;
        this.type = SUPERTOPOLOGYTYPE.PORT;

        this.points = options.points;
        this.nodetype = options.nodetype || this.getNodeType();
        this.shape = options.shape || "poly";
        this.mainIcon = options.mainIcon || '\uf0e8';
    }

    getNodeType(){
        return "cloudnode";
    }

    getMainIcon() : void {  }

}

export interface tplDomainOptions extends tplNodeOptions {
    points?: any;
}