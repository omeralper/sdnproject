//imports start ControllerListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ControllerDTO,ControllerDTODef} from "./ControllerDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ControllerListDTO extends BaseListDTO {
   
    /**
    * Kontrolcü veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<ControllerDTO>;

}


export var ControllerListDTODef:IModelDef = {
    meta: {
        className: 'ControllerListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'ControllerListDTO';
    }
};



