//imports start NacDeviceListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {NacDeviceDTO,NacDeviceDTODef} from "./NacDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacDeviceListDTO extends BaseListDTO {
   
    /**
    * Cihaz veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<NacDeviceDTO>;

}


export var NacDeviceListDTODef:IModelDef = {
    meta: {
        className: 'NacDeviceListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'NacDeviceListDTO';
    }
};



