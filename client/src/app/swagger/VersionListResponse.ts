//imports start VersionListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {VersionListDTO,VersionListDTODef} from "./VersionListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VersionListResponse extends GenericResponse {
   data: VersionListDTO;

}


export var VersionListResponseDef:IModelDef = {
    meta: {
        className: 'VersionListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: VersionListDTODef, required: true }

    }),
    toString:()=>{
        return 'VersionListResponse';
    }
};



