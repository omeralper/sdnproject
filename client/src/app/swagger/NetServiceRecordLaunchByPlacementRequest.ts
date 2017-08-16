//imports start NetServiceRecordLaunchByPlacementRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NetServiceRecordLaunchByPlacementDTO,NetServiceRecordLaunchByPlacementDTODef} from "./NetServiceRecordLaunchByPlacementDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordLaunchByPlacementRequest extends GenericRequest {
   data: NetServiceRecordLaunchByPlacementDTO;

}


export var NetServiceRecordLaunchByPlacementRequestDef:IModelDef = {
    meta: {
        className: 'NetServiceRecordLaunchByPlacementRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NetServiceRecordLaunchByPlacementDTODef, required: true }

    }),
    toString:()=>{
        return 'NetServiceRecordLaunchByPlacementRequest';
    }
};



