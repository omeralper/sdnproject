//imports start EmergencyPolicyDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {VnfdDTO,VnfdDTODef} from "./VnfdDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EmergencyPolicyDTO extends BaseDTO {
   
    /**
    * Cihazın kayıp oranı miktarı
    */
    deviceLossRatio?: number;
   
    /**
    * Acil durum politika idsi
    */
    emergencyPolicyId?: number;
   
    /**
    * Cihazın kayıp oranı miktarı
    */
    trafficThreshold?: number;
   
    /**
    * Düşük akış tanımı bulunan domaini disable et
    */
    disableDomain?: boolean;
   
    /**
    * Politikaya ait profile ismi.
    */
    name?: string;
   
    /**
    * Vnfd veri transfer modellerinin bulunduğu listedir.
    */
    vnfToStart?: Array<VnfdDTO>;
   
    /**
    * Vnfd veri transfer modellerinin bulunduğu listedir.
    */
    vnfToShutdown?: Array<VnfdDTO>;

}


export var EmergencyPolicyDTODef:IModelDef = {
    meta: {
        className: 'EmergencyPolicyDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        deviceLossRatio : { type: 'number' }, 

        emergencyPolicyId : { type: 'number' }, 

        trafficThreshold : { type: 'number' }, 

        disableDomain : { type: 'boolean' }, 

        name : { type: 'string' }, 

        vnfToStart : { type: 'Array' }, 

        vnfToShutdown : { type: 'Array' }

    }),
    toString:()=>{
        return 'EmergencyPolicyDTO';
    }
};



