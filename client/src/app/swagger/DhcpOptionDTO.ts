//imports start DhcpOptionDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpOptionDTO extends BaseDTO {
   
    /**
    * DhcpOption haritası değeridir.
    */
    dhcpOptionValue: string;
   
    /**
    * DhcpOption haritası (map) anahtarıdır.
    */
    dhcpOptionKey: number;
   
    /**
    * DhcpOption'un ait olduğu dhcp kapsamının kimlik (id) numarasıdır.
    */
    dhcpScopeId: string;

}


export var DhcpOptionDTODef:IModelDef = {
    meta: {
        className: 'DhcpOptionDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        dhcpOptionValue : { type: 'string', required: true }, 

        dhcpOptionKey : { type: 'number', required: true }, 

        dhcpScopeId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'DhcpOptionDTO';
    }
};



