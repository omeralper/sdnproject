//imports start DhcpIpExcludedDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpExcludedDTO extends BaseDTO {
   
    /**
    * Açıklama
    */
    description?: string;
   
    /**
    * Kullanılması yasaklanmış ip adresinin ait olduğu dhcp menzilinin kimlik (id) numarasıdır.
    */
    dhcpRangeId: string;
   
    /**
    * Yasaklanmış ip (IpExcluded) aralığının başlangıç ip adresidir.
    */
    ipStart: string;
   
    /**
    * Yasaklanmış ip (IpExcluded) aralığının sonuç ip adresidir.
    */
    ipEnd: string;

}


export var DhcpIpExcludedDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpExcludedDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        description : { type: 'string' }, 

        dhcpRangeId : { type: 'string', required: true }, 

        ipStart : { type: 'string', required: true }, 

        ipEnd : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'DhcpIpExcludedDTO';
    }
};



