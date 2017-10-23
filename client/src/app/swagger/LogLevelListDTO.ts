//imports start LogLevelListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {LogLevelDTO,LogLevelDTODef} from "./LogLevelDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LogLevelListDTO extends BaseListDTO {
   
    /**
    * Günlük mesajlarının bulunduğu listelerin yer aldığı veri yapısıdır.
    */
    list: Array<LogLevelDTO>;

}


export var LogLevelListDTODef:IModelDef = {
    meta: {
        className: 'LogLevelListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'LogLevelListDTO';
    }
};



