//imports start SdnipRouterDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {ROUTERTYPE,ROUTERTYPEDef} from "./ROUTERTYPE";
//import {SdnipRouterDTO,SdnipRouterDTODef} from "./SdnipRouterDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRouterDTO extends BaseDTO {
   
    /**
    * Rotalayıcı VLAN değeri
    */
    vlanId?: string;
   
    /**
    * Otonom sistem numarası
    */
    asNumber: number;
   
    /**
    * Rotalayıcı IP/MASK değeri. Örneğin: 10.10.0.3/24
    */
    ip: string;
   
    /**
    * Sdnip router numarası
    */
    sdnipRouterId?: number;
   
    /**
    * BGP rotalayıcı parolası
    */
    bgpPassword?: string;
   
    /**
    * Sdnip router tipi
    */
    type: ROUTERTYPE;
   
    /**
    * Bağlı anahtarlayıcı numarası
    */
    deviceId?: string;
   
    /**
    * Rotalayıcı MAC değeri
    */
    mac?: string;
   
    /**
    * BGP sözcüsü tipindeki router için kontrol düzlemi IP değeri
    */
    controlPlaneIp?: string;
   
    /**
    * Bağlı anahtarlayıcı port numarası
    */
    port?: number;
   
    /**
    * Sdnip router ismi
    */
    name: string;
   
    /**
    * komşu rotalayıcıların listesini verir.
    */
    neighbourList?: Array<SdnipRouterDTO>;
   
    /**
    * BGP rotalayıcı port numarası
    */
    bgpPort?: number;

}


export var SdnipRouterDTODef:IModelDef = {
    meta: {
        className: 'SdnipRouterDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        vlanId : { type: 'string' }, 

        asNumber : { type: 'number', required: true }, 

        ip : { type: 'string', required: true }, 

        sdnipRouterId : { type: 'number' }, 

        bgpPassword : { type: 'string' }, 

        type : { type: ROUTERTYPEDef, required: true }, 

        deviceId : { type: 'string' }, 

        mac : { type: 'string' }, 

        controlPlaneIp : { type: 'string' }, 

        port : { type: 'number' }, 

        name : { type: 'string', required: true }, 

        neighbourList : { type: 'Array' }, 

        bgpPort : { type: 'number' }

    }),
    toString:()=>{
        return 'SdnipRouterDTO';
    }
};



