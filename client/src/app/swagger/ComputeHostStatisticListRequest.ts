//imports start ComputeHostStatisticListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostStatisticListRequest extends GenericListRequest {
   
    /**
    * Istenilen VIM'de ki istatistiki bilgilerin alımı icin talep edilen vim numarası
    */
    vimInstanceId: string;

}


export var ComputeHostStatisticListRequestDef:IModelDef = {
    meta: {
        className: 'ComputeHostStatisticListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

        vimInstanceId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'ComputeHostStatisticListRequest';
    }
};



