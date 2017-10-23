//imports start VersionListRequest

import {GenericIdRequest,GenericIdRequestDef} from "./GenericIdRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VersionListRequest extends GenericIdRequest {

}


export var VersionListRequestDef:IModelDef = {
    meta: {
        className: 'VersionListRequest',
        parentClassName: 'GenericIdRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericIdRequestDef.fields,  {

    }),
    toString:()=>{
        return 'VersionListRequest';
    }
};



