//imports start MonitorSelectListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MonitorInfoListDTO,MonitorInfoListDTODef} from "./MonitorInfoListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorSelectListResponse extends GenericResponse {
   data: MonitorInfoListDTO;

}


export var MonitorSelectListResponseDef:IModelDef = {
    meta: {
        className: 'MonitorSelectListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MonitorInfoListDTODef, required: true }

    }),
    toString:()=>{
        return 'MonitorSelectListResponse';
    }
};



