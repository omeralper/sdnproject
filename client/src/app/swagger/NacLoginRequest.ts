//imports start NacLoginRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NacLoginOpts,NacLoginOptsDef} from "./NacLoginOpts";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacLoginRequest extends GenericRequest {
   data: NacLoginOpts;

}


export var NacLoginRequestDef:IModelDef = {
    meta: {
        className: 'NacLoginRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NacLoginOptsDef, required: true }

    }),
    toString:()=>{
        return 'NacLoginRequest';
    }
};



