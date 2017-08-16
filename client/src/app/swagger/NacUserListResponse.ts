//imports start NacUserListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacUserListDTO,NacUserListDTODef} from "./NacUserListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserListResponse extends GenericResponse {
   data: NacUserListDTO;

}


export var NacUserListResponseDef:IModelDef = {
    meta: {
        className: 'NacUserListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacUserListDTODef, required: true }

    }),
    toString:()=>{
        return 'NacUserListResponse';
    }
};



