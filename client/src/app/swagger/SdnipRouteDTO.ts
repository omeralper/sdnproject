//imports start SdnipRouteDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {IPVERSIONTYPE,IPVERSIONTYPEDef} from "./IPVERSIONTYPE";
import {SdnipRouterDTO,SdnipRouterDTODef} from "./SdnipRouterDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRouteDTO extends BaseDTO {
   
    /**
    * Sonraki hop
    */
    nextHop: string;
   
    /**
    * Rotanın öğrenildiği IP versiyon tipi
    */
    ipVersion: IPVERSIONTYPE;
   
    /**
    * Rotanın öğrenildiği rotalayıcı numarası
    */
    bgpId: string;
   peer: SdnipRouterDTO;
   
    /**
    * Rota bilgisi
    */
    prefix: string;
   
    /**
    * localPref
    */
    localPref: number;
   
    /**
    * Rota prognet tarafından anonce edilip edilmediği bilgisini tutar
    */
    annonced: boolean;
   
    /**
    * Rotanın öğrenildiği protokol
    */
    origin: string;
   asPath?: Array<number>;
   
    /**
    * multiExitDisc
    */
    multiExitDisc: number;

}


export var SdnipRouteDTODef:IModelDef = {
    meta: {
        className: 'SdnipRouteDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        nextHop : { type: 'string', required: true }, 

        ipVersion : { type: IPVERSIONTYPEDef, required: true }, 

        bgpId : { type: 'string', required: true }, 

        peer : { type: SdnipRouterDTODef, required: true }, 

        prefix : { type: 'string', required: true }, 

        localPref : { type: 'number', required: true }, 

        annonced : { type: 'boolean', required: true }, 

        origin : { type: 'string', required: true }, 

        asPath : { type: 'Array' }, 

        multiExitDisc : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'SdnipRouteDTO';
    }
};



