//imports start NetServiceRecordLaunchDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {VnfdTypeVimInstancesMap,VnfdTypeVimInstancesMapDef} from "./VnfdTypeVimInstancesMap";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordLaunchDTO extends BaseDTO {
   
    /**
    * Vnfd Type Vim Instances map objesi
    */
    vduVimInstancesMap?: VnfdTypeVimInstancesMap;
   
    /**
    * Anahtarlar
    */
    keys?: Array<string>;
   
    /**
    * Konfigürasyon objesi
    */
    configurations?: any;

}


export var NetServiceRecordLaunchDTODef:IModelDef = {
    meta: {
        className: 'NetServiceRecordLaunchDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        vduVimInstancesMap : { type: VnfdTypeVimInstancesMapDef }, 

        keys : { type: 'Array' }, 

        configurations : { type: 'any' }

    }),
    toString:()=>{
        return 'NetServiceRecordLaunchDTO';
    }
};



