//imports start MeterListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {MeterDTO,MeterDTODef} from "./MeterDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MeterListDTO extends BaseListDTO {
   
    /**
    * Mvtn meterlarının tutulduğu listedir.
    */
    list: Array<MeterDTO>;
   
    /**
    * Mvtn network id bilgisi
    */
    mvtnNetworkId?: string;

}


export var MeterListDTODef:IModelDef = {
    meta: {
        className: 'MeterListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }, 

        mvtnNetworkId : { type: 'string' }

    }),
    toString:()=>{
        return 'MeterListDTO';
    }
};



