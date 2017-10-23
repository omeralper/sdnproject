//imports start NacUserStatusDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {NACSTATUS,NACSTATUSDef} from "./NACSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserStatusDTO extends BaseDTO {
   
    /**
    * Cihaz ip'si.
    */
    ipv4?: string;
   
    /**
    * Kullanıcı Adı.
    */
    username: string;
   
    /**
    * Son kullanıcının durumu.
    */
    status: NACSTATUS;

}


export var NacUserStatusDTODef:IModelDef = {
    meta: {
        className: 'NacUserStatusDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        ipv4 : { type: 'string' }, 

        username : { type: 'string', required: true }, 

        status : { type: NACSTATUSDef, required: true }

    }),
    toString:()=>{
        return 'NacUserStatusDTO';
    }
};



