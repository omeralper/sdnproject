//imports start ComputeHostListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostListRequest extends GenericListRequest {
   
    /**
    * Istenilen Compute'un listesi
    */
    vimInstanceId: string;

}


export var ComputeHostListRequestDef:IModelDef = {
    meta: {
        className: 'ComputeHostListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

        vimInstanceId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'ComputeHostListRequest';
    }
};



