//imports start NacSessionCountDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacSessionCountDTO extends BaseDTO {
   
    /**
    * Aktif User Sayisi
    */
    activeUserCount?: number;
   
    /**
    * Toplam User Sayisi
    */
    totalUserCount?: number;

}


export var NacSessionCountDTODef:IModelDef = {
    meta: {
        className: 'NacSessionCountDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        activeUserCount : { type: 'number' }, 

        totalUserCount : { type: 'number' }

    }),
    toString:()=>{
        return 'NacSessionCountDTO';
    }
};



