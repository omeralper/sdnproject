//imports start VnfMetadataMapArray

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfMetadataMapArray extends BaseDTO {
   
    /**
    * 
    */
    mdKey?: string;
   
    /**
    * 
    */
    mdValue?: string;

}


export var VnfMetadataMapArrayDef:IModelDef = {
    meta: {
        className: 'VnfMetadataMapArray',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        mdKey : { type: 'string' }, 

        mdValue : { type: 'string' }

    }),
    toString:()=>{
        return 'VnfMetadataMapArray';
    }
};



