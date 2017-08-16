//imports start SdnipResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipResponse extends GenericResponse {

}


export var SdnipResponseDef:IModelDef = {
    meta: {
        className: 'SdnipResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

    }),
    toString:()=>{
        return 'SdnipResponse';
    }
};



