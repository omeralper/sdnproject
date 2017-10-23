//imports start NetServiceRecordLaunchByPlacementResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordLaunchByPlacementResponse extends GenericResponse {
   
    /**
    * 
    */
    responseData?: string;

}


export var NetServiceRecordLaunchByPlacementResponseDef:IModelDef = {
    meta: {
        className: 'NetServiceRecordLaunchByPlacementResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        responseData : { type: 'string' }

    }),
    toString:()=>{
        return 'NetServiceRecordLaunchByPlacementResponse';
    }
};



