//imports start DeviceQuarantineRequest

import {DeviceQuarantineDTO,DeviceQuarantineDTODef} from "./DeviceQuarantineDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DeviceQuarantineRequest extends GenericRequest {
   data: DeviceQuarantineDTO;

}


export var DeviceQuarantineRequestDef:IModelDef = {
    meta: {
        className: 'DeviceQuarantineRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: DeviceQuarantineDTODef, required: true }

    }),
    toString:()=>{
        return 'DeviceQuarantineRequest';
    }
};



