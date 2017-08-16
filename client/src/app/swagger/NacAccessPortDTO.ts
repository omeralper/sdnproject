//imports start NacAccessPortDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SwitchDTO,SwitchDTODef} from "./SwitchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacAccessPortDTO extends BaseDTO {
   
    /**
    * Anahtarlayıcı üzerinde erişim hakkı verilen port numaralarının listesi.
    */
    portNumberList: Array<number>;
   
    /**
    * Erişim yetkisi verilen anahtarlayıcı bilgileri.
    */
    switchData: SwitchDTO;

}


export var NacAccessPortDTODef:IModelDef = {
    meta: {
        className: 'NacAccessPortDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        portNumberList : { type: 'Array', required: true }, 

        switchData : { type: SwitchDTODef, required: true }

    }),
    toString:()=>{
        return 'NacAccessPortDTO';
    }
};



