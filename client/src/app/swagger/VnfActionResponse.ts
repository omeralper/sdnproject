//imports start VnfActionResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfActionResponse extends GenericResponse {
   obResponse: string;
   
    /**
    * Failover senaryosunda kullanılacak sadece
    */
    failOverDesc?: string;

}


export var VnfActionResponseDef:IModelDef = {
    meta: {
        className: 'VnfActionResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        obResponse : { type: 'string', required: true }, 

        failOverDesc : { type: 'string' }

    }),
    toString:()=>{
        return 'VnfActionResponse';
    }
};



