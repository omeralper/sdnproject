//imports start NacSessionCountResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacSessionCountDTO,NacSessionCountDTODef} from "./NacSessionCountDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacSessionCountResponse extends GenericResponse {
   data: NacSessionCountDTO;

}


export var NacSessionCountResponseDef:IModelDef = {
    meta: {
        className: 'NacSessionCountResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacSessionCountDTODef, required: true }

    }),
    toString:()=>{
        return 'NacSessionCountResponse';
    }
};



