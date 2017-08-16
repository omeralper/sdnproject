//imports start ServiceActionRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {ServiceActionDTO,ServiceActionDTODef} from "./ServiceActionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServiceActionRequest extends GenericRequest {
   data: ServiceActionDTO;

}


export var ServiceActionRequestDef:IModelDef = {
    meta: {
        className: 'ServiceActionRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: ServiceActionDTODef, required: true }

    }),
    toString:()=>{
        return 'ServiceActionRequest';
    }
};



