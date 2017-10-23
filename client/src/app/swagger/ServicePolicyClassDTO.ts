//imports start ServicePolicyClassDTO

import {BWUNIT,BWUNITDef} from "./BWUNIT";
import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServicePolicyClassDTO extends BaseDTO {
   
    /**
    * 
    */
    collision?: number;
   
    /**
    * Kayıp
    */
    loss?: number;
   
    /**
    * Jitter miktarı
    */
    jitter?: number;
   
    /**
    * Maximum gecikme değeri (ms)
    */
    delay?: number;
   
    /**
    * Sağlanması gereken bant genişliği miktarı
    */
    bandwidth?: number;
   
    /**
    * Sanal ağ ismi.
    */
    mvtnName?: string;
   
    /**
    * Sanal ağ idsi
    */
    mvtnId?: number;
   
    /**
    * Hizmet kalitesi seviyesi
    */
    classLevel?: number;
   
    /**
    * Politika servis sınıfı adı.
    */
    serviceClassName?: string;
   
    /**
    * Band genişliği birimi
    */
    bandwidthUnit?: BWUNIT;

}


export var ServicePolicyClassDTODef:IModelDef = {
    meta: {
        className: 'ServicePolicyClassDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        collision : { type: 'number' }, 

        loss : { type: 'number' }, 

        jitter : { type: 'number' }, 

        delay : { type: 'number' }, 

        bandwidth : { type: 'number' }, 

        mvtnName : { type: 'string' }, 

        mvtnId : { type: 'number' }, 

        classLevel : { type: 'number' }, 

        serviceClassName : { type: 'string' }, 

        bandwidthUnit : { type: BWUNITDef }

    }),
    toString:()=>{
        return 'ServicePolicyClassDTO';
    }
};



