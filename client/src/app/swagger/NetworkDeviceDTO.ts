//imports start NetworkDeviceDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {NETWORKDEVICESTATUS,NETWORKDEVICESTATUSDef} from "./NETWORKDEVICESTATUS";
import {NETWORKDEVICETYPE,NETWORKDEVICETYPEDef} from "./NETWORKDEVICETYPE";
//import {NetworkDeviceDTO,NetworkDeviceDTODef} from "./NetworkDeviceDTO";
import {PortDetail,PortDetailDef} from "./PortDetail";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetworkDeviceDTO extends BaseDTO {
   
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

}


export var NetworkDeviceDTODef:IModelDef = {
    meta: {
        className: 'NetworkDeviceDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        redundancyDevices : { type: 'Array' }, 

        port : { type: PortDetailDef, required: true }, 

        vlanid : { type: 'number' }, 

        ip : { type: 'string', required: true }, 

        type : { type: NETWORKDEVICETYPEDef, required: true }, 

        mac : { type: 'string', required: true }, 

        status : { type: NETWORKDEVICESTATUSDef, required: true }

    }),
    toString:()=>{
        return 'NetworkDeviceDTO';
    }
};



