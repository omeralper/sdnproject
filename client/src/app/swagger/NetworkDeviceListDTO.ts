//imports start NetworkDeviceListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {NetworkDeviceDTO,NetworkDeviceDTODef} from "./NetworkDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetworkDeviceListDTO extends BaseListDTO {
   
    /**
    * Ağ cihazı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<NetworkDeviceDTO>;

}


export var NetworkDeviceListDTODef:IModelDef = {
    meta: {
        className: 'NetworkDeviceListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'NetworkDeviceListDTO';
    }
};



