//imports start DeviceQuarantineDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {HOSTTYPE,HOSTTYPEDef} from "./HOSTTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DeviceQuarantineDTO extends BaseDTO {
   
    /**
    * Cihazın MAC Adresi
    */
    macAddress: string;
   
    /**
    * Cihaz tipi.
    */
    type?: HOSTTYPE;
   
    /**
    * Cihazın bağlı olduğu anahtarlayıcının kontrolcü tarafından bilinen benzersiz kimlik bilgisi
    */
    deviceId?: string;
   
    /**
    * Cihazın bağlı olduğu anahtarlayıcı portu
    */
    portNumber?: number;

}


export var DeviceQuarantineDTODef:IModelDef = {
    meta: {
        className: 'DeviceQuarantineDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        macAddress : { type: 'string', required: true }, 

        type : { type: HOSTTYPEDef }, 

        deviceId : { type: 'string' }, 

        portNumber : { type: 'number' }

    }),
    toString:()=>{
        return 'DeviceQuarantineDTO';
    }
};



