//imports start NacForgettenPassDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacForgettenPassDTO extends BaseDTO {
   
    /**
    * Son kullanıcının E-posta adresi.
    */
    mail?: string;
   
    /**
    * Kullanıcının telefon numarası.
    */
    phoneNumber?: string;

}


export var NacForgettenPassDTODef:IModelDef = {
    meta: {
        className: 'NacForgettenPassDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        mail : { type: 'string' }, 

        phoneNumber : { type: 'string' }

    }),
    toString:()=>{
        return 'NacForgettenPassDTO';
    }
};



