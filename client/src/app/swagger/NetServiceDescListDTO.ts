//imports start NetServiceDescListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {NetServiceDescDTO,NetServiceDescDTODef} from "./NetServiceDescDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceDescListDTO extends BaseListDTO {
   
    /**
    * Ağ servis tanımı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<NetServiceDescDTO>;

}


export var NetServiceDescListDTODef:IModelDef = {
    meta: {
        className: 'NetServiceDescListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'NetServiceDescListDTO';
    }
};



