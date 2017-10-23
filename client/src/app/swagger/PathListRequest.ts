//imports start PathListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {PathListOptions,PathListOptionsDef} from "./PathListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PathListRequest extends GenericRequest {
   options: PathListOptions;

}


export var PathListRequestDef:IModelDef = {
    meta: {
        className: 'PathListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: PathListOptionsDef, required: true }

    }),
    toString:()=>{
        return 'PathListRequest';
    }
};



