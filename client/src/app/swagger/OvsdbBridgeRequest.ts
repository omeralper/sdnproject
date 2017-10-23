//imports start OvsdbBridgeRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface OvsdbBridgeRequest extends GenericRequest {
   
    /**
    * Ağ anahtarlayıcı tekil numarası
    */
    deviceId: string;

}


export var OvsdbBridgeRequestDef:IModelDef = {
    meta: {
        className: 'OvsdbBridgeRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        deviceId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'OvsdbBridgeRequest';
    }
};



