//imports start ConfigDefinitionRequest

import {ConfigDefinitionDTO,ConfigDefinitionDTODef} from "./ConfigDefinitionDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ConfigDefinitionRequest extends GenericRequest {
   data: ConfigDefinitionDTO;

}


export var ConfigDefinitionRequestDef:IModelDef = {
    meta: {
        className: 'ConfigDefinitionRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: ConfigDefinitionDTODef, required: true }

    }),
    toString:()=>{
        return 'ConfigDefinitionRequest';
    }
};



