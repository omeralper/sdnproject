//imports start NacUserDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {NACENTITYTYPE,NACENTITYTYPEDef} from "./NACENTITYTYPE";
import {NACSTATUS,NACSTATUSDef} from "./NACSTATUS";
import {NacGroupDTO,NacGroupDTODef} from "./NacGroupDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserDTO extends BaseDTO {
   
    /**
    * Son kullanıcının profil resmi. URI formatında veri bulunacaktır.
    */
    image?: string;
   
    /**
    * Son kullanıcı hakkında alınabilecek notlar için ayrılmış alan.
    */
    notes?: string;
   
    /**
    * Son kullanıcının NAC Grubu.
    */
    nacGroup?: NacGroupDTO;
   
    /**
    * Son kullanıcının erişim bitiş tarihi.
    */
    accessTimeEnd?: Date;
   
    /**
    * Son kullanıcının TC Kimlik Numarası.
    */
    tcno?: string;
   
    /**
    * Son kullanıcının oluşturulduğu tarih.
    */
    created?: Date;
   
    /**
    * Son kullanıcının BYOD cihaz NAC Grubu.
    */
    byodNacGroup?: NacGroupDTO;
   
    /**
    * Son kullanıcının son erişim zamanı.
    */
    lastAccess?: Date;
   
    /**
    * Sanal ağ ismi.
    */
    mvtnName?: string;
   
    /**
    * Sanal ağ idsi
    */
    mvtnId?: number;
   
    /**
    * Kullanıcıya gönderilen key.
    */
    verifyKey?: string;
   
    /**
    * Son kullanıcının erişim başlangıç tarihi.
    */
    accessTimeStart?: Date;
   
    /**
    * Son kullanıcının güvenlik seviyesi.
    */
    securityLevel: number;
   
    /**
    * Kullanıcı şifresi. Bu değer sadece Save işlemi sırasında doldurulacaktır. Get/List/Search isteklerinde boş gelecektir.
    */
    password?: string;
   
    /**
    * Kullanıcının telefon numarası.
    */
    phoneNumber?: string;
   
    /**
    * Son kullanıcının Soyismi.
    */
    surname?: string;
   
    /**
    * Son kullanıcının İsmi.
    */
    name?: string;
   
    /**
    * Son kullanıcının son güncellendiği tarih.
    */
    modified?: Date;
   
    /**
    * Son kullanıcının tipi.
    */
    userType: NACENTITYTYPE;
   
    /**
    * Son kullanıcının E-posta adresi.
    */
    email?: string;
   
    /**
    * Kullanıcı Adı.
    */
    username: string;
   
    /**
    * Son kullanıcının durumu.
    */
    status: NACSTATUS;

}


export var NacUserDTODef:IModelDef = {
    meta: {
        className: 'NacUserDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        image : { type: 'string' }, 

        notes : { type: 'string' }, 

        nacGroup : { type: NacGroupDTODef }, 

        accessTimeEnd : { type: 'Date' }, 

        tcno : { type: 'string' }, 

        created : { type: 'Date' }, 

        byodNacGroup : { type: NacGroupDTODef }, 

        lastAccess : { type: 'Date' }, 

        mvtnName : { type: 'string' }, 

        mvtnId : { type: 'number' }, 

        verifyKey : { type: 'string' }, 

        accessTimeStart : { type: 'Date' }, 

        securityLevel : { type: 'number', required: true }, 

        password : { type: 'string' }, 

        phoneNumber : { type: 'string' }, 

        surname : { type: 'string' }, 

        name : { type: 'string' }, 

        modified : { type: 'Date' }, 

        userType : { type: NACENTITYTYPEDef, required: true }, 

        email : { type: 'string' }, 

        username : { type: 'string', required: true }, 

        status : { type: NACSTATUSDef, required: true }

    }),
    toString:()=>{
        return 'NacUserDTO';
    }
};



