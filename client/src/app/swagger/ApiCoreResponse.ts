//imports start ApiCoreResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ApiCoreResponse extends GenericResponse {

}


export var ApiCoreResponseDef:IModelDef = {
    meta: {
        className: 'ApiCoreResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

    }),
    toString:()=>{
        return 'ApiCoreResponse';
    }
};



