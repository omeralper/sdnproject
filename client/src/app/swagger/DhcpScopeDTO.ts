//imports start DhcpScopeDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {DhcpIpRangeDTO,DhcpIpRangeDTODef} from "./DhcpIpRangeDTO";
import {DhcpOptionDTO,DhcpOptionDTODef} from "./DhcpOptionDTO";
import {IPVERSIONTYPE,IPVERSIONTYPEDef} from "./IPVERSIONTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpScopeDTO extends BaseDTO {
   
    /**
    * dhcp kapsamına verilmiş ip adres menzilleri listesidir.
    */
    dhcpIpRangeDtos?: Array<DhcpIpRangeDTO>;
   
    /**
    * dhcp kapsamı içindeki opsiyonel yapılandırma veri haritalarının (map) listesidir.
    */
    dhcpOptionDtos?: Array<DhcpOptionDTO>;
   
    /**
    * DNS sunucuları, birden fazla sunucu adresi virgülle ayrılarak tanımlanır.
    */
    domainServers: string;
   
    /**
    * Ağ cihazının bağlı olduğu vlanId bilgisidir.
    */
    vlanId?: number;
   
    /**
    * Dhcp kapsamı adı
    */
    name: string;
   
    /**
    * Ip versiyon numarasıdır.
    */
    ipVersionType: IPVERSIONTYPE;
   
    /**
    * Ağ kimlik numarasıdır.
    */
    networkId?: string;
   
    /**
    * Ağ geçitleri, birden fazla ağ geçidi virgülle ayrılarak tanımlanır
    */
    routerAddresses: string;

}


export var DhcpScopeDTODef:IModelDef = {
    meta: {
        className: 'DhcpScopeDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        dhcpIpRangeDtos : { type: 'Array' }, 

        dhcpOptionDtos : { type: 'Array' }, 

        domainServers : { type: 'string', required: true }, 

        vlanId : { type: 'number' }, 

        name : { type: 'string', required: true }, 

        ipVersionType : { type: IPVERSIONTYPEDef, required: true }, 

        networkId : { type: 'string' }, 

        routerAddresses : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'DhcpScopeDTO';
    }
};



