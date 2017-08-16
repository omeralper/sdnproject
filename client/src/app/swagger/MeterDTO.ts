//imports start MeterDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MeterDTO extends BaseDTO {
   
    /**
    * Meterın kurulu olduğu device id bilgisi
    */
    deviceId?: string;
   
    /**
    * Meterın kurulu olduğu linkin device üzerindeki port bilgisi
    */
    portNumber?: number;

}


export var MeterDTODef:IModelDef = {
    meta: {
        className: 'MeterDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        deviceId : { type: 'string' }, 

        portNumber : { type: 'number' }

    }),
    toString:()=>{
        return 'MeterDTO';
    }
};



