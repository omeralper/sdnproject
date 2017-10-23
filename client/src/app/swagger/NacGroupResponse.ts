//imports start NacGroupResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacGroupDTO,NacGroupDTODef} from "./NacGroupDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacGroupResponse extends GenericResponse {
   data?: NacGroupDTO;

}


export var NacGroupResponseDef:IModelDef = {
    meta: {
        className: 'NacGroupResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacGroupDTODef }

    }),
    toString:()=>{
        return 'NacGroupResponse';
    }
};



