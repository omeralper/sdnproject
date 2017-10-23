//imports start EndUserApplicationRequest

import {EndUserApplicationDTO,EndUserApplicationDTODef} from "./EndUserApplicationDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EndUserApplicationRequest extends GenericRequest {
   data: EndUserApplicationDTO;

}


export var EndUserApplicationRequestDef:IModelDef = {
    meta: {
        className: 'EndUserApplicationRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: EndUserApplicationDTODef, required: true }

    }),
    toString:()=>{
        return 'EndUserApplicationRequest';
    }
};



