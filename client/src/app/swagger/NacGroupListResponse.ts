//imports start NacGroupListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacGroupListDTO,NacGroupListDTODef} from "./NacGroupListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacGroupListResponse extends GenericResponse {
   data: NacGroupListDTO;

}


export var NacGroupListResponseDef:IModelDef = {
    meta: {
        className: 'NacGroupListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacGroupListDTODef, required: true }

    }),
    toString:()=>{
        return 'NacGroupListResponse';
    }
};



