//imports start NeighborRelationSaveRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NeighborRelationDTO,NeighborRelationDTODef} from "./NeighborRelationDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NeighborRelationSaveRequest extends GenericRequest {
   data: NeighborRelationDTO;

}


export var NeighborRelationSaveRequestDef:IModelDef = {
    meta: {
        className: 'NeighborRelationSaveRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NeighborRelationDTODef, required: true }

    }),
    toString:()=>{
        return 'NeighborRelationSaveRequest';
    }
};



