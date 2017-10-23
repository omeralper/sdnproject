//imports start NetServiceDescDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {VirtualNetFunctionDTO,VirtualNetFunctionDTODef} from "./VirtualNetFunctionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceDescDTO extends BaseDTO {
   
    /**
    * Ağ servis tanımı vendor değeri
    */
    vendor?: string;
   
    /**
    * Ağ servis tanımı sürüm değeri
    */
    nsdVersion?: string;
   
    /**
    * NSD'yi calistirmak icin gerekli olan VNFD tanımlarını tutan liste
    */
    vnfdSumamryList?: Array<VirtualNetFunctionDTO>;
   
    /**
    * Ağ servis tanımı adı
    */
    name: string;
   
    /**
    * Tüm NSD tanım JSON değeri
    */
    rawData?: string;
   
    /**
    * ProjectID değeri
    */
    projectId?: string;
   
    /**
    * Ağ servis tanımı geçerlilik durumu
    */
    enabled: boolean;

}


export var NetServiceDescDTODef:IModelDef = {
    meta: {
        className: 'NetServiceDescDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        vendor : { type: 'string' }, 

        nsdVersion : { type: 'string' }, 

        vnfdSumamryList : { type: 'Array' }, 

        name : { type: 'string', required: true }, 

        rawData : { type: 'string' }, 

        projectId : { type: 'string' }, 

        enabled : { type: 'boolean', required: true }

    }),
    toString:()=>{
        return 'NetServiceDescDTO';
    }
};



