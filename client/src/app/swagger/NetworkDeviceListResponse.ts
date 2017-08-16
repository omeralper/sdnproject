//imports start NetworkDeviceListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NetworkDeviceListDTO,NetworkDeviceListDTODef} from "./NetworkDeviceListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetworkDeviceListResponse extends GenericResponse {
   data: NetworkDeviceListDTO;

}


export var NetworkDeviceListResponseDef:IModelDef = {
    meta: {
        className: 'NetworkDeviceListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NetworkDeviceListDTODef, required: true }

    }),
    toString:()=>{
        return 'NetworkDeviceListResponse';
    }
};



