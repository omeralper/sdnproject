//imports start ControllerNodeListRequest

import {GenericIdRequest,GenericIdRequestDef} from "./GenericIdRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ControllerNodeListRequest extends GenericIdRequest {

}


export var ControllerNodeListRequestDef:IModelDef = {
    meta: {
        className: 'ControllerNodeListRequest',
        parentClassName: 'GenericIdRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericIdRequestDef.fields,  {

    }),
    toString:()=>{
        return 'ControllerNodeListRequest';
    }
};



