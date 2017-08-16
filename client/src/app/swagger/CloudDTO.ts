//imports start CloudDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {HOSTSTATUS,HOSTSTATUSDef} from "./HOSTSTATUS";
import {LocationInfo,LocationInfoDef} from "./LocationInfo";
import {PortDetail,PortDetailDef} from "./PortDetail";
import {SUPERTOPOLOGYTYPE,SUPERTOPOLOGYTYPEDef} from "./SUPERTOPOLOGYTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface CloudDTO extends BaseDTO {
   
    /**
    * Cihazın güvenlik seviyesi.
    */
    securityLevel?: number;
   
    /**
    * Cihazın aktif olduğu zaman.
    */
    activeSince?: Date;
   
    /**
    * Cihazın en son ağda görüldüğü zaman.
    */
    lastSeen?: Date;
   
    /**
    * ??
    */
    blocked?: boolean;
   
    /**
    * Cihazın bağlı bulunduğu port bilgisi.
    */
    port?: PortDetail;
   
    /**
    * Cihaz adı.
    */
    name?: string;
   
    /**
    * Anahtarlayıcının lokasyon bilgisi bu alanda tutlacaktır.
    */
    location?: LocationInfo;
   
    /**
    * Modelin Topolojide gösterilmesi istenen renk kodu
    */
    colorCode?: string;
   
    /**
    * Cihaz tipi.
    */
    type?: SUPERTOPOLOGYTYPE;
   
    /**
    * Cihaz sağlık durumu.
    */
    status?: HOSTSTATUS;

}


export var CloudDTODef:IModelDef = {
    meta: {
        className: 'CloudDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        securityLevel : { type: 'number' }, 

        activeSince : { type: 'Date' }, 

        lastSeen : { type: 'Date' }, 

        blocked : { type: 'boolean' }, 

        port : { type: PortDetailDef }, 

        name : { type: 'string' }, 

        location : { type: LocationInfoDef }, 

        colorCode : { type: 'string' }, 

        type : { type: SUPERTOPOLOGYTYPEDef }, 

        status : { type: HOSTSTATUSDef }

    }),
    toString:()=>{
        return 'CloudDTO';
    }
};



