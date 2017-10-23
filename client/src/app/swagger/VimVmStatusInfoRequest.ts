//imports start VimVmStatusInfoRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimVmStatusInfoRequest extends GenericRequest {
   
    /**
    * OS de bulunan VM in ip si
    */
    vmIp: string;

}


export var VimVmStatusInfoRequestDef:IModelDef = {
    meta: {
        className: 'VimVmStatusInfoRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        vmIp : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'VimVmStatusInfoRequest';
    }
};



