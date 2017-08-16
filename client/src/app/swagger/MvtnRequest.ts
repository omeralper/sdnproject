//imports start MvtnRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MvtnDTO,MvtnDTODef} from "./MvtnDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnRequest extends GenericRequest {
   data: MvtnDTO;

}


export var MvtnRequestDef:IModelDef = {
    meta: {
        className: 'MvtnRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MvtnDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnRequest';
    }
};



