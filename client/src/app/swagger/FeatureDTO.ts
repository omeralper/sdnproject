//imports start FeatureDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CURRENTSTATUS,CURRENTSTATUSDef} from "./CURRENTSTATUS";
import {PROCESSINGSTATUS,PROCESSINGSTATUSDef} from "./PROCESSINGSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FeatureDTO extends BaseDTO {
   
    /**
    * İşleme Durumu.
    */
    processingStatus?: PROCESSINGSTATUS;
   isRequired?: boolean;
   
    /**
    * Mevcut Durum.
    */
    currentStatus?: CURRENTSTATUS;
   
    /**
    * Özellik Adı.
    */
    name: string;
   
    /**
    * Özellik açıklaması
    */
    description?: string;
   
    /**
    * Özellik başlangıç zamanı
    */
    startTime?: Date;
   
    /**
    * Versiyon açıklaması
    */
    featureVersion?: string;

}


export var FeatureDTODef:IModelDef = {
    meta: {
        className: 'FeatureDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        processingStatus : { type: PROCESSINGSTATUSDef }, 

        isRequired : { type: 'boolean' }, 

        currentStatus : { type: CURRENTSTATUSDef }, 

        name : { type: 'string', required: true }, 

        description : { type: 'string' }, 

        startTime : { type: 'Date' }, 

        featureVersion : { type: 'string' }

    }),
    toString:()=>{
        return 'FeatureDTO';
    }
};



