//imports start NeighborRelationSearchResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NeighborRelationListDTO,NeighborRelationListDTODef} from "./NeighborRelationListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NeighborRelationSearchResponse extends GenericResponse {
   data: NeighborRelationListDTO;

}


export var NeighborRelationSearchResponseDef:IModelDef = {
    meta: {
        className: 'NeighborRelationSearchResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NeighborRelationListDTODef, required: true }

    }),
    toString:()=>{
        return 'NeighborRelationSearchResponse';
    }
};



