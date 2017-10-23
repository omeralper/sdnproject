//imports start ModuleNodeConfigListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ModuleNodeConfigListDTO,ModuleNodeConfigListDTODef} from "./ModuleNodeConfigListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodeConfigListResponse extends GenericResponse {
   data: ModuleNodeConfigListDTO;

}


export var ModuleNodeConfigListResponseDef:IModelDef = {
    meta: {
        className: 'ModuleNodeConfigListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ModuleNodeConfigListDTODef, required: true }

    }),
    toString:()=>{
        return 'ModuleNodeConfigListResponse';
    }
};



