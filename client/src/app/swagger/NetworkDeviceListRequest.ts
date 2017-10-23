//imports start NetworkDeviceListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetworkDeviceListRequest extends GenericListRequest {

}


export var NetworkDeviceListRequestDef:IModelDef = {
    meta: {
        className: 'NetworkDeviceListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

    }),
    toString:()=>{
        return 'NetworkDeviceListRequest';
    }
};



