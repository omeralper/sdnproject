//imports start NeighborRelationStatusListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {NeighborRelationStatusDTO,NeighborRelationStatusDTODef} from "./NeighborRelationStatusDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NeighborRelationStatusListDTO extends BaseListDTO {
   
    /**
    * Bir BGP yönlendiricinin komşuları ile bağlantı durumunun bulunduğu listedir.
    */
    list: Array<NeighborRelationStatusDTO>;

}


export var NeighborRelationStatusListDTODef:IModelDef = {
    meta: {
        className: 'NeighborRelationStatusListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'NeighborRelationStatusListDTO';
    }
};



