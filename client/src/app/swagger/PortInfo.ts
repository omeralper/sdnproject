//imports start PortInfo

import {PortDetail,PortDetailDef} from "./PortDetail";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Cihaz portları hakkında detayların bulunduğu veri yapısı.
*/
export interface PortInfo {
   
    /**
    * Toplam port sayısı.
    */
    totalPorts: number;
   
    /**
    * Aktif port sayısı.
    */
    activePorts: number;
   
    /**
    * Pasif port sayısı.
    */
    passivePorts: number;
   
    /**
    * Arızalı port sayısı.
    */
    deadPorts: number;
   
    /**
    * Port Detayları
    */
    portDetails?: Array<PortDetail>;

}


export var PortInfoDef:IModelDef = {
    meta: {
        className: 'PortInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        totalPorts : { type: 'number', required: true }, 

        activePorts : { type: 'number', required: true }, 

        passivePorts : { type: 'number', required: true }, 

        deadPorts : { type: 'number', required: true }, 

        portDetails : { type: 'Array' }

    },
    toString:()=>{
        return 'PortInfo';
    }
};



