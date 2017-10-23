//imports start PermRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {PermDTO,PermDTODef} from "./PermDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PermRequest extends GenericRequest {
   data: PermDTO;

}


export var PermRequestDef:IModelDef = {
    meta: {
        className: 'PermRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: PermDTODef, required: true }

    }),
    toString:()=>{
        return 'PermRequest';
    }
};



