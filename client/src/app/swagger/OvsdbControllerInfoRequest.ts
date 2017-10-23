//imports start OvsdbControllerInfoRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface OvsdbControllerInfoRequest extends GenericRequest {
   
    /**
    * Ağ anahtarlayıcıların bulunduğu listedir.
    */
    deviceIds: Array<string>;

}


export var OvsdbControllerInfoRequestDef:IModelDef = {
    meta: {
        className: 'OvsdbControllerInfoRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        deviceIds : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'OvsdbControllerInfoRequest';
    }
};



