//imports start SwitchListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SwitchDTO,SwitchDTODef} from "./SwitchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SwitchListDTO extends BaseListDTO {
   
    /**
    * Anahtarlayıcı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<SwitchDTO>;

}


export var SwitchListDTODef:IModelDef = {
    meta: {
        className: 'SwitchListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SwitchListDTO';
    }
};



