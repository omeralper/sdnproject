//imports start ModuleNodeConfigResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ModuleNodeConfigDTO,ModuleNodeConfigDTODef} from "./ModuleNodeConfigDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodeConfigResponse extends GenericResponse {
   data: ModuleNodeConfigDTO;

}


export var ModuleNodeConfigResponseDef:IModelDef = {
    meta: {
        className: 'ModuleNodeConfigResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ModuleNodeConfigDTODef, required: true }

    }),
    toString:()=>{
        return 'ModuleNodeConfigResponse';
    }
};



