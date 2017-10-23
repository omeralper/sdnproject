//imports start NeighborRelationResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NeighborRelationDTO,NeighborRelationDTODef} from "./NeighborRelationDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NeighborRelationResponse extends GenericResponse {
   data: NeighborRelationDTO;

}


export var NeighborRelationResponseDef:IModelDef = {
    meta: {
        className: 'NeighborRelationResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NeighborRelationDTODef, required: true }

    }),
    toString:()=>{
        return 'NeighborRelationResponse';
    }
};



