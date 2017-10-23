//imports start MonitorSearchCriteria

import {MONITORTYPE,MONITORTYPEDef} from "./MONITORTYPE";
import {MonitorTagValue,MonitorTagValueDef} from "./MonitorTagValue";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* MonitorSelect istek nesnesi içinde yeralabilecek araştırma kriter alanlarını içerir.
*/
export interface MonitorSearchCriteria {
   
    /**
    * id numarası
    */
    id?: string;
   
    /**
    * id numarası ile belirtilen göstergeye sahip olan uygulamanın adıdır.
    */
    owner?: string;
   
    /**
    * id numarası ile belirtilen göstergenin adıdır.
    */
    name?: string;
   
    /**
    * id numarası ile belirtilen göstergenin TSDB kullanılan bir instance'ı için atanmış ayırıcı tag map listesidir.
    */
    monitorTags?: Array<MonitorTagValue>;
   
    /**
    * id numarası ile belirtilen göstergenin türüdür.
    */
    monitorType?: MONITORTYPE;

}


export var MonitorSearchCriteriaDef:IModelDef = {
    meta: {
        className: 'MonitorSearchCriteria',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string' }, 

        owner : { type: 'string' }, 

        name : { type: 'string' }, 

        monitorTags : { type: 'Array' }, 

        monitorType : { type: MONITORTYPEDef }

    },
    toString:()=>{
        return 'MonitorSearchCriteria';
    }
};



