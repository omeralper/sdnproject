//imports start FlowListResponse

import {FlowListDTO,FlowListDTODef} from "./FlowListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowListResponse extends GenericResponse {
   data: FlowListDTO;

}


export var FlowListResponseDef:IModelDef = {
    meta: {
        className: 'FlowListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: FlowListDTODef, required: true }

    }),
    toString:()=>{
        return 'FlowListResponse';
    }
};



