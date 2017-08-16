//imports start NetServiceRecordLaunchByPlacementDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {VnfInstancePlacementMap,VnfInstancePlacementMapDef} from "./VnfInstancePlacementMap";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordLaunchByPlacementDTO extends BaseDTO {
   vnfInstancePlacementMap?: VnfInstancePlacementMap;
   
    /**
    * Lokasyon id
    */
    nsdId: string;

}


export var NetServiceRecordLaunchByPlacementDTODef:IModelDef = {
    meta: {
        className: 'NetServiceRecordLaunchByPlacementDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        vnfInstancePlacementMap : { type: VnfInstancePlacementMapDef }, 

        nsdId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'NetServiceRecordLaunchByPlacementDTO';
    }
};



