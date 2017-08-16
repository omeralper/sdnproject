//imports start AccessPolicyListDTO

import {AccessPolicyDTO,AccessPolicyDTODef} from "./AccessPolicyDTO";
import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessPolicyListDTO extends BaseListDTO {
   
    /**
    * Erişim politikası veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<AccessPolicyDTO>;

}


export var AccessPolicyListDTODef:IModelDef = {
    meta: {
        className: 'AccessPolicyListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'AccessPolicyListDTO';
    }
};



