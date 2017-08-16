//imports start WanAlarmInfoListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanAlarmInfoListRequest extends GenericListRequest {

}


export var WanAlarmInfoListRequestDef:IModelDef = {
    meta: {
        className: 'WanAlarmInfoListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

    }),
    toString:()=>{
        return 'WanAlarmInfoListRequest';
    }
};



