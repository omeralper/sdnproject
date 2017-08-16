//imports start NetServiceRecordListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";
import {ListOptions,ListOptionsDef} from "./ListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordListRequest extends GenericListRequest {
   nsrOptions: ListOptions;

}


export var NetServiceRecordListRequestDef:IModelDef = {
    meta: {
        className: 'NetServiceRecordListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

        nsrOptions : { type: ListOptionsDef, required: true }

    }),
    toString:()=>{
        return 'NetServiceRecordListRequest';
    }
};



