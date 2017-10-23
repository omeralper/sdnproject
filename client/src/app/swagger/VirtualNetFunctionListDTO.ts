//imports start VirtualNetFunctionListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {VirtualNetFunctionDTO,VirtualNetFunctionDTODef} from "./VirtualNetFunctionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionListDTO extends BaseListDTO {
   
    /**
    * Sanal ağ fonksiyonu tanımı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<VirtualNetFunctionDTO>;

}


export var VirtualNetFunctionListDTODef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'VirtualNetFunctionListDTO';
    }
};



