//imports start ZoneInfoListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ZoneInfoListRequest extends GenericListRequest {
   
    /**
    * Istenilen VIM'in zone bilgilerini
    */
    vimInstanceId: string;

}


export var ZoneInfoListRequestDef:IModelDef = {
    meta: {
        className: 'ZoneInfoListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

        vimInstanceId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'ZoneInfoListRequest';
    }
};



