//imports start MeterRequestDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {METERTYPE,METERTYPEDef} from "./METERTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MeterRequestDTO extends BaseDTO {
   
    /**
    * Listeleme talebinin hangi ağda (sanal ya da fiziksel) gerçekleşeceği bilgisi
    */
    meterType?: METERTYPE;

}


export var MeterRequestDTODef:IModelDef = {
    meta: {
        className: 'MeterRequestDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        meterType : { type: METERTYPEDef }

    }),
    toString:()=>{
        return 'MeterRequestDTO';
    }
};



