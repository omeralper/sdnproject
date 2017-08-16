//imports start NacUserStatusRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NACSTATUS,NACSTATUSDef} from "./NACSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserStatusRequest extends GenericRequest {
   
    /**
    * Cihaz ip'si.
    */
    ipv4?: string;
   
    /**
    * Kullanıcı adı.
    */
    username: string;
   
    /**
    * Son kullanıcının durumu.
    */
    status: NACSTATUS;

}


export var NacUserStatusRequestDef:IModelDef = {
    meta: {
        className: 'NacUserStatusRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        ipv4 : { type: 'string' }, 

        username : { type: 'string', required: true }, 

        status : { type: NACSTATUSDef, required: true }

    }),
    toString:()=>{
        return 'NacUserStatusRequest';
    }
};



