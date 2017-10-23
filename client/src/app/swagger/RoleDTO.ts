//imports start RoleDTO

import {AAASTATUS,AAASTATUSDef} from "./AAASTATUS";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {PermDTO,PermDTODef} from "./PermDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface RoleDTO extends BaseDTO {
   
    /**
    * Rolün güvenlik seviyesi.
    */
    securityLevel: number;
   
    /**
    * Rol hakkında alınabilecek notlar için ayrılmış alan.
    */
    notes?: string;
   
    /**
    * Rolün oluşturulduğu tarih.
    */
    created?: Date;
   
    /**
    * Kullanıcının application numarası
    */
    appId?: number;
   
    /**
    * Rolün adı
    */
    name: string;
   
    /**
    * Rolün son güncellendiği tarih.
    */
    modified?: Date;
   
    /**
    * Rolün sahip olduğu yetkilerin listesi.
    */
    permList?: Array<PermDTO>;
   
    /**
    * Rolün durumu.
    */
    status: AAASTATUS;

}


export var RoleDTODef:IModelDef = {
    meta: {
        className: 'RoleDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        securityLevel : { type: 'number', required: true }, 

        notes : { type: 'string' }, 

        created : { type: 'Date' }, 

        appId : { type: 'number' }, 

        name : { type: 'string', required: true }, 

        modified : { type: 'Date' }, 

        permList : { type: 'Array' }, 

        status : { type: AAASTATUSDef, required: true }

    }),
    toString:()=>{
        return 'RoleDTO';
    }
};



