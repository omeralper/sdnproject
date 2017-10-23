//imports start ZoneInfoResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ZoneObjectDTO,ZoneObjectDTODef} from "./ZoneObjectDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ZoneInfoResponse extends GenericResponse {
   data: ZoneObjectDTO;

}


export var ZoneInfoResponseDef:IModelDef = {
    meta: {
        className: 'ZoneInfoResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ZoneObjectDTODef, required: true }

    }),
    toString:()=>{
        return 'ZoneInfoResponse';
    }
};



