//imports start ConfigDefinitionResponse

import {ConfigDefinitionDTO,ConfigDefinitionDTODef} from "./ConfigDefinitionDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ConfigDefinitionResponse extends GenericResponse {
   data: ConfigDefinitionDTO;

}


export var ConfigDefinitionResponseDef:IModelDef = {
    meta: {
        className: 'ConfigDefinitionResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ConfigDefinitionDTODef, required: true }

    }),
    toString:()=>{
        return 'ConfigDefinitionResponse';
    }
};



