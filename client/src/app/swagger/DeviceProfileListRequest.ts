//imports start DeviceProfileListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DeviceProfileListRequest extends GenericRequest {

}


export var DeviceProfileListRequestDef:IModelDef = {
    meta: {
        className: 'DeviceProfileListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

    }),
    toString:()=>{
        return 'DeviceProfileListRequest';
    }
};



