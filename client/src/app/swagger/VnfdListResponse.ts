//imports start VnfdListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VnfdListDTO,VnfdListDTODef} from "./VnfdListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfdListResponse extends GenericResponse {
   data: VnfdListDTO;

}


export var VnfdListResponseDef:IModelDef = {
    meta: {
        className: 'VnfdListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VnfdListDTODef, required: true }

    }),
    toString:()=>{
        return 'VnfdListResponse';
    }
};



