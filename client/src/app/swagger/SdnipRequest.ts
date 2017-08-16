//imports start SdnipRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRequest extends GenericRequest {

}


export var SdnipRequestDef:IModelDef = {
    meta: {
        className: 'SdnipRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

    }),
    toString:()=>{
        return 'SdnipRequest';
    }
};



