//imports start SdnipASNumberResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipASNumberResponse extends GenericResponse {
   
    /**
    * Otomon sistem numarasıdır
    */
    data: number;

}


export var SdnipASNumberResponseDef:IModelDef = {
    meta: {
        className: 'SdnipASNumberResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'SdnipASNumberResponse';
    }
};



