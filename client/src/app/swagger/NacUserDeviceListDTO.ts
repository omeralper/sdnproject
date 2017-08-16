//imports start NacUserDeviceListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {NacUserDeviceDTO,NacUserDeviceDTODef} from "./NacUserDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserDeviceListDTO extends BaseListDTO {
   
    /**
    * Son kullanıcı cihaz atama veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<NacUserDeviceDTO>;

}


export var NacUserDeviceListDTODef:IModelDef = {
    meta: {
        className: 'NacUserDeviceListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'NacUserDeviceListDTO';
    }
};



