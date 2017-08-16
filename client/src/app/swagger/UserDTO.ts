//imports start UserDTO

import {AAASTATUS,AAASTATUSDef} from "./AAASTATUS";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {PermDTO,PermDTODef} from "./PermDTO";
import {RoleDTO,RoleDTODef} from "./RoleDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface UserDTO extends BaseDTO {
   
    /**
    * Kullanıcının profil resmi. URI formatında veri bulunacaktır.
    */
    image?: string;
   
    /**
    * Kullanıcı hakkında alınabilecek notlar için ayrılmış alan.
    */
    notes?: string;
   
    /**
    * Kullanıcının oluşturulduğu tarih.
    */
    created?: Date;
   
    /**
    * Kullanıcının parent user idsi
    */
    parentUserId?: number;
   
    /**
    * Kullanıcının son erişim zamanı.
    */
    lastAccess?: Date;
   
    /**
    * Kullanıcının sahip olduğu yetkilerin listesi.
    */
    permList?: Array<PermDTO>;
   
    /**
    * Kullanıcının sahip olduğu röllerin listesi.
    */
    roleList?: Array<RoleDTO>;
   
    /**
    * Kullanıcı tipi
    */
    type?: number;
   
    /**
    * Kullanıcının güvenlik seviyesi.
    */
    securityLevel: number;
   
    /**
    * Kullanıcı şifresi. Bu değer sadece Save işlemi sırasında doldurulacaktır. Get/List/Search isteklerinde boş gelecektir.
    */
    password?: string;
   
    /**
    * Kullanıcının Soyismi.
    */
    surname?: string;
   
    /**
    * Kullanıcının application numarası
    */
    appId?: number;
   
    /**
    * Kullanıcının İsmi.
    */
    name?: string;
   
    /**
    * Kullanıcının son güncellendiği tarih.
    */
    modified?: Date;
   
    /**
    * Kullanıcının E-posta adresi.
    */
    email?: string;
   
    /**
    * Kullanıcı Adı.
    */
    username: string;
   
    /**
    * Kullanıcının durumu.
    */
    status: AAASTATUS;

}


export var UserDTODef:IModelDef = {
    meta: {
        className: 'UserDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        image : { type: 'string' }, 

        notes : { type: 'string' }, 

        created : { type: 'Date' }, 

        parentUserId : { type: 'number' }, 

        lastAccess : { type: 'Date' }, 

        permList : { type: 'Array' }, 

        roleList : { type: 'Array' }, 

        type : { type: 'number' }, 

        securityLevel : { type: 'number', required: true }, 

        password : { type: 'string' }, 

        surname : { type: 'string' }, 

        appId : { type: 'number' }, 

        name : { type: 'string' }, 

        modified : { type: 'Date' }, 

        email : { type: 'string' }, 

        username : { type: 'string', required: true }, 

        status : { type: AAASTATUSDef, required: true }

    }),
    toString:()=>{
        return 'UserDTO';
    }
};



