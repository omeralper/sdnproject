//imports start DhcpIpRangeDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {DhcpIpExcludedDTO,DhcpIpExcludedDTODef} from "./DhcpIpExcludedDTO";
import {DhcpIpReservedDTO,DhcpIpReservedDTODef} from "./DhcpIpReservedDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpRangeDTO extends BaseDTO {
   
    /**
    * Dhcp ip menzilinin ait olduğu dhcp kapsamının kimlik (id) numarasıdır.
    */
    dhcpScopeId: string;
   
    /**
    * Dhcp ip menzili (DhcpIpRange) içinde yeralan belirli mac adresi-ip adresi çiftleri için ayrılmış ip adreslerinin listesidir.
    */
    ipsReservedDtos?: Array<DhcpIpReservedDTO>;
   
    /**
    * ip adresi için ağ maskesidir.
    */
    networkMask: string;
   
    /**
    * Dhcp ip menzili (DhcpIpRange) içinde yeralan yasaklanmış ip adres aralıkları listesidir.
    */
    ipsExcludedDtos?: Array<DhcpIpExcludedDTO>;
   
    /**
    * Dhcp ip menzilinin (DhcpIpRange) başlangıç ip adresidir.
    */
    ipStart: string;
   
    /**
    * Dhcp ip menzilinin (DhcpIpRange) sonuç ip adresidir.
    */
    ipEnd: string;

}


export var DhcpIpRangeDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpRangeDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        dhcpScopeId : { type: 'string', required: true }, 

        ipsReservedDtos : { type: 'Array' }, 

        networkMask : { type: 'string', required: true }, 

        ipsExcludedDtos : { type: 'Array' }, 

        ipStart : { type: 'string', required: true }, 

        ipEnd : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'DhcpIpRangeDTO';
    }
};



