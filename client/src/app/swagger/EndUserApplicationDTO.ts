//imports start EndUserApplicationDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EndUserApplicationDTO extends BaseDTO {
   
    /**
    * Son kullanıcı uygulama ismi
    */
    name?: string;
   
    /**
    * Son kullanıcı uygulaması adres bilgileri
    */
    addresses?: Array<string>;
   
    /**
    * Son kullanıcı uygulaması öncelik bilgisi
    */
    priority?: number;

}


export var EndUserApplicationDTODef:IModelDef = {
    meta: {
        className: 'EndUserApplicationDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string' }, 

        addresses : { type: 'Array' }, 

        priority : { type: 'number' }

    }),
    toString:()=>{
        return 'EndUserApplicationDTO';
    }
};



