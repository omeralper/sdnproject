//imports start WanDomainListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {WanDomainDTO,WanDomainDTODef} from "./WanDomainDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanDomainListDTO extends BaseListDTO {
   
    /**
    * Alan tanımı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<WanDomainDTO>;

}


export var WanDomainListDTODef:IModelDef = {
    meta: {
        className: 'WanDomainListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'WanDomainListDTO';
    }
};



