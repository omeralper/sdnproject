//imports start ModuleNodesListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {ModuleNodesListDTO,ModuleNodesListDTODef} from "./ModuleNodesListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodesListResponse extends GenericResponse {
   data: ModuleNodesListDTO;

}


export var ModuleNodesListResponseDef:IModelDef = {
    meta: {
        className: 'ModuleNodesListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ModuleNodesListDTODef, required: true }

    }),
    toString:()=>{
        return 'ModuleNodesListResponse';
    }
};



