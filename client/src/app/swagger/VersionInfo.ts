//imports start VersionInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Versiyon bilgilerini tutar
*/
export interface VersionInfo {
   
    /**
    * Uygulama adı
    */
    name: string;
   
    /**
    * Uygulama versiyonu
    */
    version: string;
   
    /**
    * Uygulama derleme tarihi
    */
    buildDate: Date;
   
    /**
    * Uygulamanın çalıştırıldığı tarih
    */
    startUpDate: Date;

}


export var VersionInfoDef:IModelDef = {
    meta: {
        className: 'VersionInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        name : { type: 'string', required: true }, 

        version : { type: 'string', required: true }, 

        buildDate : { type: 'Date', required: true }, 

        startUpDate : { type: 'Date', required: true }

    },
    toString:()=>{
        return 'VersionInfo';
    }
};



