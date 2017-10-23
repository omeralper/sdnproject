//imports start VnfActionRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfActionRequest extends GenericRequest {
   
    /**
    * Failover senaryoları icin de kullanılacak
    */
    computeHostIp: string;
   
    /**
    * Failover senaryoları icin kullanılacak sadece
    */
    vnfrId: string;
   
    /**
    * Failover senaryosu icin kullanılacak sadece
    */
    vnfIp?: string;
   
    /**
    * Yapıya gore her nsd'de tek vnfd belirlendigi icin , belirtilen nsd'yi yani vnfd'yi ayaga kaldırmak icin gereken id
    */
    nsdId: string;
   
    /**
    * Calisan vm'in hangi vim'de oldugunu belirtmek icin
    */
    vimInstanceId: string;
   
    /**
    * vnf tipi (firewall,iperf etc.)
    */
    vnfdType: string;

}


export var VnfActionRequestDef:IModelDef = {
    meta: {
        className: 'VnfActionRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        computeHostIp : { type: 'string', required: true }, 

        vnfrId : { type: 'string', required: true }, 

        vnfIp : { type: 'string' }, 

        nsdId : { type: 'string', required: true }, 

        vimInstanceId : { type: 'string', required: true }, 

        vnfdType : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'VnfActionRequest';
    }
};



