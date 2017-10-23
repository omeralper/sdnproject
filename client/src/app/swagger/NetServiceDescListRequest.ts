//imports start NetServiceDescListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";
import {ListOptions,ListOptionsDef} from "./ListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceDescListRequest extends GenericListRequest {
   nsdOptions: ListOptions;

}


export var NetServiceDescListRequestDef:IModelDef = {
    meta: {
        className: 'NetServiceDescListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

        nsdOptions : { type: ListOptionsDef, required: true }

    }),
    toString:()=>{
        return 'NetServiceDescListRequest';
    }
};



