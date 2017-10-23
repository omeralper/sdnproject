//imports start DeviceQuarantineResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DeviceQuarantineResponse extends GenericResponse {

}


export var DeviceQuarantineResponseDef:IModelDef = {
    meta: {
        className: 'DeviceQuarantineResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

    }),
    toString:()=>{
        return 'DeviceQuarantineResponse';
    }
};



