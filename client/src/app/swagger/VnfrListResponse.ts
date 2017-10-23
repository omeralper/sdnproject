//imports start VnfrListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VnfrListDTO,VnfrListDTODef} from "./VnfrListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfrListResponse extends GenericResponse {
   data: VnfrListDTO;

}


export var VnfrListResponseDef:IModelDef = {
    meta: {
        className: 'VnfrListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VnfrListDTODef, required: true }

    }),
    toString:()=>{
        return 'VnfrListResponse';
    }
};



