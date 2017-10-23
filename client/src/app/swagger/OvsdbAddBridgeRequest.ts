//imports start OvsdbAddBridgeRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface OvsdbAddBridgeRequest extends GenericRequest {
   
    /**
    * Köprü tekil numarası
    */
    dpid: string;
   
    /**
    * Köprüye atanacak ağ kontrolcülerin bulunduğu listedir.
    */
    controllerInfoList: Array<string>;
   
    /**
    * Köprü adı
    */
    bridgeName: string;
   
    /**
    * Ağ anahtarlayıcı tekil numarası
    */
    deviceId: string;

}


export var OvsdbAddBridgeRequestDef:IModelDef = {
    meta: {
        className: 'OvsdbAddBridgeRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        dpid : { type: 'string', required: true }, 

        controllerInfoList : { type: 'Array', required: true }, 

        bridgeName : { type: 'string', required: true }, 

        deviceId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'OvsdbAddBridgeRequest';
    }
};



