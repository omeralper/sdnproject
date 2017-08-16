//imports start WanPortInfoDeleteRequest

import {GenericDeleteRequest,GenericDeleteRequestDef} from "./GenericDeleteRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanPortInfoDeleteRequest extends GenericDeleteRequest {

}


export var WanPortInfoDeleteRequestDef:IModelDef = {
    meta: {
        className: 'WanPortInfoDeleteRequest',
        parentClassName: 'GenericDeleteRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericDeleteRequestDef.fields,  {

    }),
    toString:()=>{
        return 'WanPortInfoDeleteRequest';
    }
};



