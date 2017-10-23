//imports start VimInfoListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";
import {ListOptions,ListOptionsDef} from "./ListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimInfoListRequest extends GenericListRequest {
   vimOptions: ListOptions;

}


export var VimInfoListRequestDef:IModelDef = {
    meta: {
        className: 'VimInfoListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

        vimOptions : { type: ListOptionsDef, required: true }

    }),
    toString:()=>{
        return 'VimInfoListRequest';
    }
};



