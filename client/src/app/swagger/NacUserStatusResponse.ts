//imports start NacUserStatusResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacUserStatusDTO,NacUserStatusDTODef} from "./NacUserStatusDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserStatusResponse extends GenericResponse {
   data: NacUserStatusDTO;

}


export var NacUserStatusResponseDef:IModelDef = {
    meta: {
        className: 'NacUserStatusResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacUserStatusDTODef, required: true }

    }),
    toString:()=>{
        return 'NacUserStatusResponse';
    }
};



