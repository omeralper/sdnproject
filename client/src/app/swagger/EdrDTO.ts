//imports start EdrDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {EDRSTATUS,EDRSTATUSDef} from "./EDRSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EdrDTO extends BaseDTO {
   
    /**
    * Hedef port.
    */
    destinationPort?: number;
   
    /**
    * Kaynak port.
    */
    sourcePort?: number;
   
    /**
    * EDR içeriği. <Anahtar>=<Deger> biçiminde tanımlı.
    */
    data?: string;
   
    /**
    * Modül Adı.
    */
    module?: string;
   
    /**
    * Hedef MAC adresi.
    */
    destinationMAC?: string;
   
    /**
    * Hedef IP adresi.
    */
    destinationIP?: string;
   
    /**
    * Kaynak MAC adresi.
    */
    sourceMAC?: string;
   
    /**
    * IP protokolü.
    */
    protocol?: string;
   
    /**
    * İstek kodu
    */
    xid?: string;
   
    /**
    * Kaynak IP adresi.
    */
    sourceIP?: string;
   
    /**
    * EDR oluşma tarihi.
    */
    time?: Date;
   
    /**
    * EDR da işaret edilen olayın durumu.
    */
    status?: EDRSTATUS;
   
    /**
    * Kullanıcı Adı.
    */
    username?: string;

}


export var EdrDTODef:IModelDef = {
    meta: {
        className: 'EdrDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        destinationPort : { type: 'number' }, 

        sourcePort : { type: 'number' }, 

        data : { type: 'string' }, 

        module : { type: 'string' }, 

        destinationMAC : { type: 'string' }, 

        destinationIP : { type: 'string' }, 

        sourceMAC : { type: 'string' }, 

        protocol : { type: 'string' }, 

        xid : { type: 'string' }, 

        sourceIP : { type: 'string' }, 

        time : { type: 'Date' }, 

        status : { type: EDRSTATUSDef }, 

        username : { type: 'string' }

    }),
    toString:()=>{
        return 'EdrDTO';
    }
};



