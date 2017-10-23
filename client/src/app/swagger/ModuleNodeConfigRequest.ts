//imports start ModuleNodeConfigRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {ModuleNodeConfigDTO,ModuleNodeConfigDTODef} from "./ModuleNodeConfigDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodeConfigRequest extends GenericRequest {
   data: ModuleNodeConfigDTO;

}


export var ModuleNodeConfigRequestDef:IModelDef = {
    meta: {
        className: 'ModuleNodeConfigRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: ModuleNodeConfigDTODef, required: true }

    }),
    toString:()=>{
        return 'ModuleNodeConfigRequest';
    }
};



