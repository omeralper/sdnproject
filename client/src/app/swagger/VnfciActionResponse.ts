//imports start VnfciActionResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfciActionResponse extends GenericResponse {
   obResponse: string;

}


export var VnfciActionResponseDef:IModelDef = {
    meta: {
        className: 'VnfciActionResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        obResponse : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'VnfciActionResponse';
    }
};



