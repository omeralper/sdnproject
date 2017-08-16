//imports start ZoneInfoRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ZoneInfoRequest extends GenericRequest {
   
    /**
    * Tanımlanan zone
    */
    name?: string;
   
    /**
    * VIM tanım numarası
    */
    vimInstanceId?: string;
   
    /**
    * Host edilen ip degeri
    */
    ip?: string;

}


export var ZoneInfoRequestDef:IModelDef = {
    meta: {
        className: 'ZoneInfoRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        name : { type: 'string' }, 

        vimInstanceId : { type: 'string' }, 

        ip : { type: 'string' }

    }),
    toString:()=>{
        return 'ZoneInfoRequest';
    }
};



