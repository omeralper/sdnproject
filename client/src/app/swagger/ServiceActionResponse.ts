//imports start ServiceActionResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ServiceActionDTO,ServiceActionDTODef} from "./ServiceActionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServiceActionResponse extends GenericResponse {
   data?: ServiceActionDTO;

}


export var ServiceActionResponseDef:IModelDef = {
    meta: {
        className: 'ServiceActionResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ServiceActionDTODef }

    }),
    toString:()=>{
        return 'ServiceActionResponse';
    }
};



