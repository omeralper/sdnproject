//imports start ModuleNodeConfigListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {ModuleNodeConfigSearchDTO,ModuleNodeConfigSearchDTODef} from "./ModuleNodeConfigSearchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ModuleNodeConfigListRequest extends GenericRequest {
   data: ModuleNodeConfigSearchDTO;

}


export var ModuleNodeConfigListRequestDef:IModelDef = {
    meta: {
        className: 'ModuleNodeConfigListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: ModuleNodeConfigSearchDTODef, required: true }

    }),
    toString:()=>{
        return 'ModuleNodeConfigListRequest';
    }
};



