//imports start AccessProfileListDTO

import {AccessProfileDTO,AccessProfileDTODef} from "./AccessProfileDTO";
import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessProfileListDTO extends BaseListDTO {
   
    /**
    * Erişim politikası veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<AccessProfileDTO>;

}


export var AccessProfileListDTODef:IModelDef = {
    meta: {
        className: 'AccessProfileListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'AccessProfileListDTO';
    }
};



