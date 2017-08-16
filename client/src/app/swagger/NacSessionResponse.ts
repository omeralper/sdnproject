//imports start NacSessionResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacSessionDTO,NacSessionDTODef} from "./NacSessionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacSessionResponse extends GenericResponse {
   data: NacSessionDTO;

}


export var NacSessionResponseDef:IModelDef = {
    meta: {
        className: 'NacSessionResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacSessionDTODef, required: true }

    }),
    toString:()=>{
        return 'NacSessionResponse';
    }
};



