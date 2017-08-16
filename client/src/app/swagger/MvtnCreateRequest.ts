//imports start MvtnCreateRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MvtnRequestDTO,MvtnRequestDTODef} from "./MvtnRequestDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnCreateRequest extends GenericRequest {
   data: MvtnRequestDTO;

}


export var MvtnCreateRequestDef:IModelDef = {
    meta: {
        className: 'MvtnCreateRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MvtnRequestDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnCreateRequest';
    }
};



