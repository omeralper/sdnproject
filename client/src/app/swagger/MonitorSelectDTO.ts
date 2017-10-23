//imports start MonitorSelectDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MonitorSearchCriteria,MonitorSearchCriteriaDef} from "./MonitorSearchCriteria";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorSelectDTO extends BaseDTO {
   
    /**
    * MonitorSelect isteğine karşı gönderilecek cevap nesnesinin içinde yeralabilecek alanları içerir.
    */
    responseFields: Array<string>;
   
    /**
    * MonitorSelect istek nesnesi içinde yeralabilecek araştırma kriter alanlarını içerir.
    */
    requestFields: MonitorSearchCriteria;

}


export var MonitorSelectDTODef:IModelDef = {
    meta: {
        className: 'MonitorSelectDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        responseFields : { type: 'Array', required: true }, 

        requestFields : { type: MonitorSearchCriteriaDef, required: true }

    }),
    toString:()=>{
        return 'MonitorSelectDTO';
    }
};



