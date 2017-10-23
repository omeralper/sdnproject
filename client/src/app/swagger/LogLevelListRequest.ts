//imports start LogLevelListRequest

import {GenericIdRequest,GenericIdRequestDef} from "./GenericIdRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LogLevelListRequest extends GenericIdRequest {

}


export var LogLevelListRequestDef:IModelDef = {
    meta: {
        className: 'LogLevelListRequest',
        parentClassName: 'GenericIdRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericIdRequestDef.fields,  {

    }),
    toString:()=>{
        return 'LogLevelListRequest';
    }
};



