//imports start DhcpIpReservedUserDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedUserDTO extends BaseDTO {
   
    /**
    * Açıklama
    */
    description?: string;
   
    /**
    * Belirtilen ip adresi için kullanıcı ID değeridir.
    */
    userId: string;
   
    /**
    * Ayrılmış ip adresinin ait olduğu dhcp ip menzil id numarasıdır.
    */
    dhcpRangeId: string;
   
    /**
    * Belirtilen ip adresi için kullanıcı adı değeridir.
    */
    username: string;
   
    /**
    * Belirtilen mac adresi ile eşleştirilmiş ip adresidir.
    */
    ip: string;

}


export var DhcpIpReservedUserDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedUserDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        description : { type: 'string' }, 

        userId : { type: 'string', required: true }, 

        dhcpRangeId : { type: 'string', required: true }, 

        username : { type: 'string', required: true }, 

        ip : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedUserDTO';
    }
};



