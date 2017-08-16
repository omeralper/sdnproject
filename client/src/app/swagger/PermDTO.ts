//imports start PermDTO

import {AAASTATUS,AAASTATUSDef} from "./AAASTATUS";
import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PermDTO extends BaseDTO {
   
    /**
    * Yetkinin adı.
    */
    name: string;
   
    /**
    * Yetkinin güvenlik seviyesi.
    */
    securityLevel: number;
   
    /**
    * AAA-Permissionsi gruplamak için kullanılan alan. Birbiri ile ilişkili yetkileri gruplamak için aynı TAG değerleri verilmelidir.
    */
    tag?: string;
   
    /**
    * Yetki hakkında alınabilecek notlar için ayrılmış alan.
    */
    notes?: string;
   
    /**
    * Yetkinin durumu.
    */
    status: AAASTATUS;

}


export var PermDTODef:IModelDef = {
    meta: {
        className: 'PermDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string', required: true }, 

        securityLevel : { type: 'number', required: true }, 

        tag : { type: 'string' }, 

        notes : { type: 'string' }, 

        status : { type: AAASTATUSDef, required: true }

    }),
    toString:()=>{
        return 'PermDTO';
    }
};



