//imports start DhcpIpReservedDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedDTO extends BaseDTO {
   
    /**
    * Açıklama
    */
    description?: string;
   
    /**
    * Ayrılmış ip adresinin ait olduğu dhcp ip menzil id numarasıdır.
    */
    dhcpRangeId: string;
   
    /**
    * Belirtilen ip adresi için ayrılmış mac adresidir.
    */
    mac: string;
   
    /**
    * Belirtilen mac adresi ile eşleştirilmiş ip adresidir.
    */
    ip: string;

}


export var DhcpIpReservedDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        description : { type: 'string' }, 

        dhcpRangeId : { type: 'string', required: true }, 

        mac : { type: 'string', required: true }, 

        ip : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedDTO';
    }
};



