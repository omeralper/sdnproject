//imports start ComputeHostInfoDTO



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Her bir zone bilgisini tutan veri
*/
export interface ComputeHostInfoDTO {
   
    /**
    * Compute host'un id'si
    */
    id?: number;
   
    /**
    * Compute host'un ip'si
    */
    hostIp?: string;
   
    /**
    * Compute'un bulundugu hypervisor adı
    */
    hypervisorHostname?: string;
   
    /**
    * Compute'un aktifligi
    */
    status?: string;
   
    /**
    * Compute'un durumu ayakta olup olmadıgı
    */
    state?: string;
   
    /**
    * Hypervisor'un tipi
    */
    hypervisorType?: string;

}


export var ComputeHostInfoDTODef:IModelDef = {
    meta: {
        className: 'ComputeHostInfoDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'number' }, 

        hostIp : { type: 'string' }, 

        hypervisorHostname : { type: 'string' }, 

        status : { type: 'string' }, 

        state : { type: 'string' }, 

        hypervisorType : { type: 'string' }

    },
    toString:()=>{
        return 'ComputeHostInfoDTO';
    }
};



