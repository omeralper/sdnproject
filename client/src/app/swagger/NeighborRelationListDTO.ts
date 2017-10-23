//imports start NeighborRelationListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {NeighborRelationDTO,NeighborRelationDTODef} from "./NeighborRelationDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NeighborRelationListDTO extends BaseListDTO {
   
    /**
    * BGP komşuluk ilişkileri listesinin bulunduğu listedir.
    */
    list: Array<NeighborRelationDTO>;

}


export var NeighborRelationListDTODef:IModelDef = {
    meta: {
        className: 'NeighborRelationListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'NeighborRelationListDTO';
    }
};



