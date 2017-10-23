//imports start SdnipPrefixDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPrefixDTO extends BaseDTO {
   
    /**
    * mask en küçük değeri
    */
    minMaskLength: number;
   
    /**
    * mask en büyük değeri
    */
    maxMaskLength: number;
   
    /**
    * Rota bilgisi
    */
    ipPrefix: string;

}


export var SdnipPrefixDTODef:IModelDef = {
    meta: {
        className: 'SdnipPrefixDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        minMaskLength : { type: 'number', required: true }, 

        maxMaskLength : { type: 'number', required: true }, 

        ipPrefix : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'SdnipPrefixDTO';
    }
};



