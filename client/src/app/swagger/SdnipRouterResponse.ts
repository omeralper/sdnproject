//imports start SdnipRouterResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SdnipRouterDTO,SdnipRouterDTODef} from "./SdnipRouterDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRouterResponse extends GenericResponse {
   data: SdnipRouterDTO;

}


export var SdnipRouterResponseDef:IModelDef = {
    meta: {
        className: 'SdnipRouterResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SdnipRouterDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipRouterResponse';
    }
};



