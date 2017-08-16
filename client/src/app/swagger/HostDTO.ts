//imports start HostDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {HOSTSTATUS,HOSTSTATUSDef} from "./HOSTSTATUS";
import {HOSTTYPE,HOSTTYPEDef} from "./HOSTTYPE";
import {PortDetail,PortDetailDef} from "./PortDetail";
import {UserInfo,UserInfoDef} from "./UserInfo";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface HostDTO extends BaseDTO {
   
    /**
    * Kullanıcı bilgileri.
    */
    userInfo: UserInfo;
   
    /**
    * ??
    */
    vnfrId?: string;
   
    /**
    * ??
    */
    vnfdId?: string;
   
    /**
    * ??
    */
    vnfrType?: string;
   
    /**
    * Cihaz tipi.
    */
    type: HOSTTYPE;
   
    /**
    * Cihazın ait olduğu ağ topolojilerinin ID değerleri.
    */
    networks?: Array<string>;
   
    /**
    * ??
    */
    vnfdName?: string;
   
    /**
    * Bu uç birim cihazının topoloji'de her zaman yer alması gerektiği gösteren değer. Eğer bu cihaz topolojiden kalkarsa sistemde bir problem var demektir.
    */
    required?: boolean;
   
    /**
    * Cihazın güvenlik seviyesi.
    */
    securityLevel: number;
   
    /**
    * Cihazın aktif olduğu zaman.
    */
    activeSince: Date;
   
    /**
    * Cihazın en son ağda görüldüğü zaman.
    */
    lastSeen: Date;
   
    /**
    * ??
    */
    depth?: number;
   
    /**
    * ??
    */
    blocked?: boolean;
   
    /**
    * Cihazın bağlı bulunduğu port bilgisi.
    */
    port: PortDetail;
   
    /**
    * Cihaz adı.
    */
    name?: string;
   
    /**
    * ??
    */
    colorCode?: string;
   
    /**
    * ??
    */
    vnfrName?: string;
   
    /**
    * Cihaz sağlık durumu.
    */
    status: HOSTSTATUS;
   
    /**
    * ??
    */
    vnfdType?: string;

}


export var HostDTODef:IModelDef = {
    meta: {
        className: 'HostDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        userInfo : { type: UserInfoDef, required: true }, 

        vnfrId : { type: 'string' }, 

        vnfdId : { type: 'string' }, 

        vnfrType : { type: 'string' }, 

        type : { type: HOSTTYPEDef, required: true }, 

        networks : { type: 'Array' }, 

        vnfdName : { type: 'string' }, 

        required : { type: 'boolean' }, 

        securityLevel : { type: 'number', required: true }, 

        activeSince : { type: 'Date', required: true }, 

        lastSeen : { type: 'Date', required: true }, 

        depth : { type: 'number' }, 

        blocked : { type: 'boolean' }, 

        port : { type: PortDetailDef, required: true }, 

        name : { type: 'string' }, 

        colorCode : { type: 'string' }, 

        vnfrName : { type: 'string' }, 

        status : { type: HOSTSTATUSDef, required: true }, 

        vnfdType : { type: 'string' }

    }),
    toString:()=>{
        return 'HostDTO';
    }
};



