//imports start MvtnParametersResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {TopologyInfoDTO,TopologyInfoDTODef} from "./TopologyInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnParametersResponse extends GenericResponse {
   data: TopologyInfoDTO;

}


export var MvtnParametersResponseDef:IModelDef = {
    meta: {
        className: 'MvtnParametersResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: TopologyInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnParametersResponse';
    }
};



