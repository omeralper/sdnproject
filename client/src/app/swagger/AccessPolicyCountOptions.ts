//imports start AccessPolicyCountOptions

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessPolicyCountOptions extends BaseDTO {
   
    /**
    * Politika sayısı.
    */
    count: number;

}


export var AccessPolicyCountOptionsDef:IModelDef = {
    meta: {
        className: 'AccessPolicyCountOptions',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        count : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'AccessPolicyCountOptions';
    }
};



