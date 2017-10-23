//imports start ZoneInfoListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ZoneObjectDTO,ZoneObjectDTODef} from "./ZoneObjectDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ZoneInfoListResponse extends GenericResponse {
   data: ZoneObjectDTO;

}


export var ZoneInfoListResponseDef:IModelDef = {
    meta: {
        className: 'ZoneInfoListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ZoneObjectDTODef, required: true }

    }),
    toString:()=>{
        return 'ZoneInfoListResponse';
    }
};



