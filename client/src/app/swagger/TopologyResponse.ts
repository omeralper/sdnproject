//imports start TopologyResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {TopologyDTO,TopologyDTODef} from "./TopologyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyResponse extends GenericResponse {
   data: TopologyDTO;

}


export var TopologyResponseDef:IModelDef = {
    meta: {
        className: 'TopologyResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: TopologyDTODef, required: true }

    }),
    toString:()=>{
        return 'TopologyResponse';
    }
};



