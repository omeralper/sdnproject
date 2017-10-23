//imports start GenericListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {ListOptions,ListOptionsDef} from "./ListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface GenericListRequest extends GenericRequest {
   options: ListOptions;

}


export var GenericListRequestDef:IModelDef = {
    meta: {
        className: 'GenericListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: ListOptionsDef, required: true }

    }),
    toString:()=>{
        return 'GenericListRequest';
    }
};



