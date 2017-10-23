//imports start VirtualNetFunctionDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionDTO extends BaseDTO {
   
    /**
    * Sanal ağ fonksiyonun tipi
    */
    vnfType: string;
   
    /**
    * Sanal ağ fonksiyonu vendor değeri
    */
    vendor?: string;
   
    /**
    * Sanal ağ fonksiyonu adı
    */
    name: string;
   
    /**
    * Tüm NSD tanım JSON değeri
    */
    rawData?: string;
   
    /**
    * force update tanımı
    */
    forceUpdate?: boolean;
   
    /**
    * Sanal ağ fonksiyonu sürüm değeri
    */
    vnfVersion?: string;

}


export var VirtualNetFunctionDTODef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        vnfType : { type: 'string', required: true }, 

        vendor : { type: 'string' }, 

        name : { type: 'string', required: true }, 

        rawData : { type: 'string' }, 

        forceUpdate : { type: 'boolean' }, 

        vnfVersion : { type: 'string' }

    }),
    toString:()=>{
        return 'VirtualNetFunctionDTO';
    }
};



