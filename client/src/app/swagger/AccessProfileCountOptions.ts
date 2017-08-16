//imports start AccessProfileCountOptions

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessProfileCountOptions extends BaseDTO {
   
    /**
    * Politika profil sayısı.
    */
    count: number;

}


export var AccessProfileCountOptionsDef:IModelDef = {
    meta: {
        className: 'AccessProfileCountOptions',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        count : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'AccessProfileCountOptions';
    }
};



