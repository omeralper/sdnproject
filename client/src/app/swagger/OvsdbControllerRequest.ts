//imports start OvsdbControllerRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface OvsdbControllerRequest extends GenericRequest {
   
    /**
    * Ağ kontrolcülerin bulunduğu listedir.
    */
    controllerInfoList: Array<string>;
   
    /**
    * Ağ anahtarlayıcıların bulunduğu listedir.
    */
    deviceIds: Array<string>;

}


export var OvsdbControllerRequestDef:IModelDef = {
    meta: {
        className: 'OvsdbControllerRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        controllerInfoList : { type: 'Array', required: true }, 

        deviceIds : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'OvsdbControllerRequest';
    }
};



