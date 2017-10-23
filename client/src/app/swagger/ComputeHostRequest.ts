//imports start ComputeHostRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostRequest extends GenericRequest {
   
    /**
    * VIM bilgisinin tutuldugu unique alan
    */
    vimInstanceId?: string;
   
    /**
    * Hangi compute node ip degerinin tutuldugu yer
    */
    ip?: string;

}


export var ComputeHostRequestDef:IModelDef = {
    meta: {
        className: 'ComputeHostRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        vimInstanceId : { type: 'string' }, 

        ip : { type: 'string' }

    }),
    toString:()=>{
        return 'ComputeHostRequest';
    }
};



