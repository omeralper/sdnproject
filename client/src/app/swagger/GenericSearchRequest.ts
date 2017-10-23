//imports start GenericSearchRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SearchOptions,SearchOptionsDef} from "./SearchOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface GenericSearchRequest extends GenericRequest {
   options: SearchOptions;

}


export var GenericSearchRequestDef:IModelDef = {
    meta: {
        className: 'GenericSearchRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: SearchOptionsDef, required: true }

    }),
    toString:()=>{
        return 'GenericSearchRequest';
    }
};



