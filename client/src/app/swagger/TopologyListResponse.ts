//imports start TopologyListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {TopologyInfoListDTO,TopologyInfoListDTODef} from "./TopologyInfoListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyListResponse extends GenericResponse {
   data: TopologyInfoListDTO;

}


export var TopologyListResponseDef:IModelDef = {
    meta: {
        className: 'TopologyListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: TopologyInfoListDTODef, required: true }

    }),
    toString:()=>{
        return 'TopologyListResponse';
    }
};



