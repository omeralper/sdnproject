//imports start AppRequest

import {AppDTO,AppDTODef} from "./AppDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AppRequest extends GenericRequest {
   data: AppDTO;

}


export var AppRequestDef:IModelDef = {
    meta: {
        className: 'AppRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: AppDTODef, required: true }

    }),
    toString:()=>{
        return 'AppRequest';
    }
};



