//imports start OvsdbAddBridgeResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface OvsdbAddBridgeResponse extends GenericResponse {
   
    /**
    * Köprü ekleme işleminin mantıksal sonucu
    */
    data: boolean;

}


export var OvsdbAddBridgeResponseDef:IModelDef = {
    meta: {
        className: 'OvsdbAddBridgeResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'boolean', required: true }

    }),
    toString:()=>{
        return 'OvsdbAddBridgeResponse';
    }
};



