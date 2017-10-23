//imports start ConfigDefinitionListResponse

import {ConfigDefinitionListDTO,ConfigDefinitionListDTODef} from "./ConfigDefinitionListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ConfigDefinitionListResponse extends GenericResponse {
   data: ConfigDefinitionListDTO;

}


export var ConfigDefinitionListResponseDef:IModelDef = {
    meta: {
        className: 'ConfigDefinitionListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ConfigDefinitionListDTODef, required: true }

    }),
    toString:()=>{
        return 'ConfigDefinitionListResponse';
    }
};



