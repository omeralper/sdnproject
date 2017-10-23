//imports start VnfrResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VnfrDTO,VnfrDTODef} from "./VnfrDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfrResponse extends GenericResponse {
   data: VnfrDTO;

}


export var VnfrResponseDef:IModelDef = {
    meta: {
        className: 'VnfrResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VnfrDTODef, required: true }

    }),
    toString:()=>{
        return 'VnfrResponse';
    }
};



