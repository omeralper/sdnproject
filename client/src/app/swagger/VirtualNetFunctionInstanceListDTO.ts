//imports start VirtualNetFunctionInstanceListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {VirtualNetFunctionInstanceDTO,VirtualNetFunctionInstanceDTODef} from "./VirtualNetFunctionInstanceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionInstanceListDTO extends BaseListDTO {
   
    /**
    * Her bir vnfi objesinin tutuldugu yer
    */
    list: Array<VirtualNetFunctionInstanceDTO>;

}


export var VirtualNetFunctionInstanceListDTODef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionInstanceListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'VirtualNetFunctionInstanceListDTO';
    }
};



