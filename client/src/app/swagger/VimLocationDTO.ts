//imports start VimLocationDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimLocationDTO extends BaseDTO {
   
    /**
    * Lokasyon adı
    */
    name?: string;
   
    /**
    * Lokasyon versiyonu
    */
    locationVersion?: string;
   
    /**
    * Lokasyon id
    */
    vimId: string;
   
    /**
    * Lokasyonun enlemi
    */
    latitude?: string;
   
    /**
    * Lokasyon boylamı
    */
    longitude?: string;

}


export var VimLocationDTODef:IModelDef = {
    meta: {
        className: 'VimLocationDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string' }, 

        locationVersion : { type: 'string' }, 

        vimId : { type: 'string', required: true }, 

        latitude : { type: 'string' }, 

        longitude : { type: 'string' }

    }),
    toString:()=>{
        return 'VimLocationDTO';
    }
};



