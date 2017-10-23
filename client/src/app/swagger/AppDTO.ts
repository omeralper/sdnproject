//imports start AppDTO

import {AAASTATUS,AAASTATUSDef} from "./AAASTATUS";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {RoleDTO,RoleDTODef} from "./RoleDTO";
import {UserDTO,UserDTODef} from "./UserDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AppDTO extends BaseDTO {
   
    /**
    * Uygulamaya kullanıcı eklemek için kullanıcıların listesi
    */
    userList: Array<UserDTO>;
   
    /**
    * Uygulamaya kaç kullanıcının kayıt olduğunu tutan değişken.
    */
    userCount: number;
   
    /**
    * Uygulamanın adı.
    */
    name: string;
   
    /**
    * Uygulamada kaç istek kaydı olduğunu tutan değişken.
    */
    callCount?: number;
   
    /**
    * Maks Politika Önceliği
    */
    maxPolicyPriority: number;
   
    /**
    * Uygulama için en fazla kaç kullanıcı yaratılabileceği.
    */
    maxUserCount: number;
   
    /**
    * Uygulamanın kullanıcıların hangi rollerde olabileceğinin listesi
    */
    roleList: Array<RoleDTO>;
   
    /**
    * Uygulamanın düzenlenebilirlik durumu.
    */
    type: number;
   
    /**
    * Uygulama için en fazla kaç istek yaratılabileceği.
    */
    maxCallCount?: number;
   
    /**
    * Uygulamanın durumu.
    */
    status: AAASTATUS;

}


export var AppDTODef:IModelDef = {
    meta: {
        className: 'AppDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        userList : { type: 'Array', required: true }, 

        userCount : { type: 'number', required: true }, 

        name : { type: 'string', required: true }, 

        callCount : { type: 'number' }, 

        maxPolicyPriority : { type: 'number', required: true }, 

        maxUserCount : { type: 'number', required: true }, 

        roleList : { type: 'Array', required: true }, 

        type : { type: 'number', required: true }, 

        maxCallCount : { type: 'number' }, 

        status : { type: AAASTATUSDef, required: true }

    }),
    toString:()=>{
        return 'AppDTO';
    }
};



