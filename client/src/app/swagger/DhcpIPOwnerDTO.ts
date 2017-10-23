//imports start DhcpIPOwnerDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIPOwnerDTO extends BaseDTO {
   
    /**
    * IP sahibi cihazın adi.
    */
    hostName: string;
   
    /**
    * IP bitis zamani
    */
    endDate: Date;
   
    /**
    * DHCP tarafindan atanan IP
    */
    IP: string;
   
    /**
    * Kullanıcı adi
    */
    userName: string;
   
    /**
    * Cihazin MAC adresi
    */
    MAC?: string;
   
    /**
    * IP atama zamani
    */
    startDate: Date;

}


export var DhcpIPOwnerDTODef:IModelDef = {
    meta: {
        className: 'DhcpIPOwnerDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        hostName : { type: 'string', required: true }, 

        endDate : { type: 'Date', required: true }, 

        IP : { type: 'string', required: true }, 

        userName : { type: 'string', required: true }, 

        MAC : { type: 'string' }, 

        startDate : { type: 'Date', required: true }

    }),
    toString:()=>{
        return 'DhcpIPOwnerDTO';
    }
};



