//imports start ClusterListResponse

import {ClusterListDTO,ClusterListDTODef} from "./ClusterListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ClusterListResponse extends GenericResponse {
   data: ClusterListDTO;

}


export var ClusterListResponseDef:IModelDef = {
    meta: {
        className: 'ClusterListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: ClusterListDTODef, required: true }

    }),
    toString:()=>{
        return 'ClusterListResponse';
    }
};



