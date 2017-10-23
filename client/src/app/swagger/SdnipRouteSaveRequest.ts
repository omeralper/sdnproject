//imports start SdnipRouteSaveRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRouteSaveRequest extends GenericRequest {
   
    /**
    * Anons edilecek rotaların bulunduğu listedir.
    */
    data: Array<string>;

}


export var SdnipRouteSaveRequestDef:IModelDef = {
    meta: {
        className: 'SdnipRouteSaveRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SdnipRouteSaveRequest';
    }
};



