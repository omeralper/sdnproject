//imports start DhcpOptionKeyDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {OPTIONTYPE,OPTIONTYPEDef} from "./OPTIONTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpOptionKeyDTO extends BaseDTO {
   
    /**
    * DhcpOptionKeyRequest içinde dhcpOptionKey seçeneğine karşılık gelen sayıdır.
    */
    name: string;
   
    /**
    * DhcpOption türüdür.
    */
    optionType: OPTIONTYPE;
   
    /**
    * DhcpOptionKeyRequest içinde belirtilen sayıya karşılık gelen dhcpOptionKey seçeneğinin adıdır.
    */
    optionNumber: number;

}


export var DhcpOptionKeyDTODef:IModelDef = {
    meta: {
        className: 'DhcpOptionKeyDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string', required: true }, 

        optionType : { type: OPTIONTYPEDef, required: true }, 

        optionNumber : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'DhcpOptionKeyDTO';
    }
};



