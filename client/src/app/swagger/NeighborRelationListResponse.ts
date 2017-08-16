//imports start NeighborRelationListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NeighborRelationListDTO,NeighborRelationListDTODef} from "./NeighborRelationListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NeighborRelationListResponse extends GenericResponse {
   data: NeighborRelationListDTO;

}


export var NeighborRelationListResponseDef:IModelDef = {
    meta: {
        className: 'NeighborRelationListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NeighborRelationListDTODef, required: true }

    }),
    toString:()=>{
        return 'NeighborRelationListResponse';
    }
};



