//imports start ComputeHostStatisticRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostStatisticRequest extends GenericRequest {
   
    /**
    * Istenilen VIM'in istatiki bilgilerinin unique degeri
    */
    vimInstanceId?: string;
   
    /**
    * Hangi compute host'ta ki oldugunu istemek icin
    */
    computeHostId?: string;

}


export var ComputeHostStatisticRequestDef:IModelDef = {
    meta: {
        className: 'ComputeHostStatisticRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        vimInstanceId : { type: 'string' }, 

        computeHostId : { type: 'string' }

    }),
    toString:()=>{
        return 'ComputeHostStatisticRequest';
    }
};



