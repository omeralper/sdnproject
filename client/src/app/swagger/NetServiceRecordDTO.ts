//imports start NetServiceRecordDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordDTO extends BaseDTO {
   
    /**
    * Çalışan NSR'ın adı
    */
    name?: string;
   
    /**
    * NSD'nin calisitildiktan sonra durumu
    */
    task?: string;
   
    /**
    * Mevcut NSR'ın durumu
    */
    state?: string;
   
    /**
    * NSR'ın versiyonu
    */
    nsrVersion?: string;
   
    /**
    * Raw JSON verisi
    */
    rawData?: string;

}


export var NetServiceRecordDTODef:IModelDef = {
    meta: {
        className: 'NetServiceRecordDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string' }, 

        task : { type: 'string' }, 

        state : { type: 'string' }, 

        nsrVersion : { type: 'string' }, 

        rawData : { type: 'string' }

    }),
    toString:()=>{
        return 'NetServiceRecordDTO';
    }
};



