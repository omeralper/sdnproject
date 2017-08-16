//imports start ApiCoreRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ApiCoreRequest extends GenericRequest {

}


export var ApiCoreRequestDef:IModelDef = {
    meta: {
        className: 'ApiCoreRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

    }),
    toString:()=>{
        return 'ApiCoreRequest';
    }
};



