//imports start NeighborRelationStatusListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NeighborRelationStatusListDTO,NeighborRelationStatusListDTODef} from "./NeighborRelationStatusListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NeighborRelationStatusListResponse extends GenericResponse {
   data: NeighborRelationStatusListDTO;

}


export var NeighborRelationStatusListResponseDef:IModelDef = {
    meta: {
        className: 'NeighborRelationStatusListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NeighborRelationStatusListDTODef, required: true }

    }),
    toString:()=>{
        return 'NeighborRelationStatusListResponse';
    }
};



