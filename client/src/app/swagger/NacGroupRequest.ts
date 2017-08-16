//imports start NacGroupRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NacGroupDTO,NacGroupDTODef} from "./NacGroupDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacGroupRequest extends GenericRequest {
   data: NacGroupDTO;

}


export var NacGroupRequestDef:IModelDef = {
    meta: {
        className: 'NacGroupRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NacGroupDTODef, required: true }

    }),
    toString:()=>{
        return 'NacGroupRequest';
    }
};



