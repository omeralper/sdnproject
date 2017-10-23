//imports start NetServiceRecordLaunchByPlacementDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {VnfInstancePlacementMap,VnfInstancePlacementMapDef} from "./VnfInstancePlacementMap";
import {VnfMetadataMap,VnfMetadataMapDef} from "./VnfMetadataMap";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordLaunchByPlacementDTO extends BaseDTO {
   vnfInstancePlacementMap: VnfInstancePlacementMap;
   vnfMetadataMap: VnfMetadataMap;

}


export var NetServiceRecordLaunchByPlacementDTODef:IModelDef = {
    meta: {
        className: 'NetServiceRecordLaunchByPlacementDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        vnfInstancePlacementMap : { type: VnfInstancePlacementMapDef, required: true }, 

        vnfMetadataMap : { type: VnfMetadataMapDef, required: true }

    }),
    toString:()=>{
        return 'NetServiceRecordLaunchByPlacementDTO';
    }
};



