//imports start DeviceProfileListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DeviceProfileDTO,DeviceProfileDTODef} from "./DeviceProfileDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DeviceProfileListDTO extends BaseListDTO {
   
    /**
    * Device profillerinin listesi.
    */
    list?: Array<DeviceProfileDTO>;

}


export var DeviceProfileListDTODef:IModelDef = {
    meta: {
        className: 'DeviceProfileListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array' }

    }),
    toString:()=>{
        return 'DeviceProfileListDTO';
    }
};



