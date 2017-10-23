//imports start AAAServerDTO

import {AAAPROTOCOL,AAAPROTOCOLDef} from "./AAAPROTOCOL";
import {AddressInfo,AddressInfoDef} from "./AddressInfo";
import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AAAServerDTO extends BaseDTO {
   
    /**
    * AAA sunucu hakkında alınabilecek notlar için ayrılmış alan.
    */
    notes?: string;
   
    /**
    * AAA sunucusunun IP adresi.
    */
    address: AddressInfo;
   
    /**
    * Radius sunucusu için gizli anahtar.
    */
    secretKey?: string;
   
    /**
    * AAA sunucuın oluşturulduğu tarih.
    */
    created?: Date;
   
    /**
    * Sunucu DeadTime değeri.
    */
    deadTime: number;
   
    /**
    * AAA sunucu kullanıcı adı.
    */
    userName: string;
   
    /**
    * AAA sunucu kullanıcı parolası.
    */
    password: string;
   
    /**
    * AAA sunucu protokolü.
    */
    protocol: AAAPROTOCOL;
   
    /**
    * Kimlik doğrulama için Radius seçildiğinde bu sunucunun veritabanı kullanıp kullanmadığını belirtir.
    */
    usingDB?: boolean;
   
    /**
    * AAA Sunucu Port numarası
    */
    port: number;
   
    /**
    * AAA sunucu adı.
    */
    name: string;
   
    /**
    * AAA sunucuın son güncellendiği tarih.
    */
    modified?: Date;
   
    /**
    * Sunucu tekrar gönderim değeri.
    */
    retransmission: number;
   
    /**
    * LDAP iletişiminin SSL üzerinden çalışmasını belirlen alan. (true) SSL kullan. (false) SSL _kullanma_.
    */
    ldapUseSSL?: boolean;

}


export var AAAServerDTODef:IModelDef = {
    meta: {
        className: 'AAAServerDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        notes : { type: 'string' }, 

        address : { type: AddressInfoDef, required: true }, 

        secretKey : { type: 'string' }, 

        created : { type: 'Date' }, 

        deadTime : { type: 'number', required: true }, 

        userName : { type: 'string', required: true }, 

        password : { type: 'string', required: true }, 

        protocol : { type: AAAPROTOCOLDef, required: true }, 

        usingDB : { type: 'boolean' }, 

        port : { type: 'number', required: true }, 

        name : { type: 'string', required: true }, 

        modified : { type: 'Date' }, 

        retransmission : { type: 'number', required: true }, 

        ldapUseSSL : { type: 'boolean' }

    }),
    toString:()=>{
        return 'AAAServerDTO';
    }
};



