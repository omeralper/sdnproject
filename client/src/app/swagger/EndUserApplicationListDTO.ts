//imports start EndUserApplicationListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {EndUserApplicationDTO,EndUserApplicationDTODef} from "./EndUserApplicationDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EndUserApplicationListDTO extends BaseListDTO {
   
    /**
    * Son kullanıcı uygulaması veri yapısı.
    */
    list: Array<EndUserApplicationDTO>;

}


export var EndUserApplicationListDTODef:IModelDef = {
    meta: {
        className: 'EndUserApplicationListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'EndUserApplicationListDTO';
    }
};



