//imports start DhcpIpPoolDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpPoolDTO extends BaseDTO {
   
    /**
    * Domainin sahip olma zorunluluğu olan ip prefixidir. Prefix sonrası set edilmeyen 255 byte alanlar 0 ile yollanmak zorundadır.
    */
    ipAddress: string;
   
    /**
    * Domainin sahip olması gereken subnetmask ini gösteriyor.
    */
    subnetMask: string;
   
    /**
    * Ait olduğu dhcp domainini idsidir.
    */
    domainId: number;

}


export var DhcpIpPoolDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpPoolDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        ipAddress : { type: 'string', required: true }, 

        subnetMask : { type: 'string', required: true }, 

        domainId : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'DhcpIpPoolDTO';
    }
};



