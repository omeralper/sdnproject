//imports start NetServiceRecordLaunchByPlacementRequest

import {NetServiceRecordLaunchByPlacementDTO,NetServiceRecordLaunchByPlacementDTODef} from "./NetServiceRecordLaunchByPlacementDTO";
import {NetServiceRecordLaunchRequest,NetServiceRecordLaunchRequestDef} from "./NetServiceRecordLaunchRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordLaunchByPlacementRequest extends NetServiceRecordLaunchRequest {
   placementData: NetServiceRecordLaunchByPlacementDTO;

}


export var NetServiceRecordLaunchByPlacementRequestDef:IModelDef = {
    meta: {
        className: 'NetServiceRecordLaunchByPlacementRequest',
        parentClassName: 'NetServiceRecordLaunchRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, NetServiceRecordLaunchRequestDef.fields,  {

        placementData : { type: NetServiceRecordLaunchByPlacementDTODef, required: true }

    }),
    toString:()=>{
        return 'NetServiceRecordLaunchByPlacementRequest';
    }
};



