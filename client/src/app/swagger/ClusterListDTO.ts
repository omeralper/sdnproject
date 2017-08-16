//imports start ClusterListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ClusterDTO,ClusterDTODef} from "./ClusterDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ClusterListDTO extends BaseListDTO {
   
    /**
    * Küme profillerinin listesi.
    */
    list?: Array<ClusterDTO>;

}


export var ClusterListDTODef:IModelDef = {
    meta: {
        className: 'ClusterListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array' }

    }),
    toString:()=>{
        return 'ClusterListDTO';
    }
};



