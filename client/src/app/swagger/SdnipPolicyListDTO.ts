//imports start SdnipPolicyListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SdnipPolicyDTO,SdnipPolicyDTODef} from "./SdnipPolicyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicyListDTO extends BaseListDTO {
   
    /**
    * Eşleşme politika listesi
    */
    list: Array<SdnipPolicyDTO>;

}


export var SdnipPolicyListDTODef:IModelDef = {
    meta: {
        className: 'SdnipPolicyListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SdnipPolicyListDTO';
    }
};



