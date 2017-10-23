//imports start WanPortInfoListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanPortInfoListRequest extends GenericListRequest {

}


export var WanPortInfoListRequestDef:IModelDef = {
    meta: {
        className: 'WanPortInfoListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

    }),
    toString:()=>{
        return 'WanPortInfoListRequest';
    }
};



