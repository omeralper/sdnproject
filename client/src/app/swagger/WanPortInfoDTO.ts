//imports start WanPortInfoDTO

import {BWUNIT,BWUNITDef} from "./BWUNIT";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {WANPORTINFOSTATUS,WANPORTINFOSTATUSDef} from "./WANPORTINFOSTATUS";
import {WANPORTTYPE,WANPORTTYPEDef} from "./WANPORTTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanPortInfoDTO extends BaseDTO {
   
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

}


export var WanPortInfoDTODef:IModelDef = {
    meta: {
        className: 'WanPortInfoDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        superPortNumber : { type: 'number', required: true }, 

        sourcePortNumber : { type: 'number', required: true }, 

        linkSpeed : { type: 'number', required: true }, 

        explanation : { type: 'string' }, 

        sourceSwitchId : { type: 'string', required: true }, 

        targetClusterName : { type: 'string' }, 

        miss : { type: 'string' }, 

        speedUnit : { type: BWUNITDef, required: true }, 

        delay : { type: 'string' }, 

        jitter : { type: 'string' }, 

        name : { type: 'string', required: true }, 

        linkType : { type: WANPORTTYPEDef }, 

        targetClusterId : { type: 'number', required: true }, 

        targetPortNumber : { type: 'number' }, 

        status : { type: WANPORTINFOSTATUSDef }

    }),
    toString:()=>{
        return 'WanPortInfoDTO';
    }
};



