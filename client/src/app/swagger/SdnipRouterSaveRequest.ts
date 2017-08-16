//imports start SdnipRouterSaveRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SdnipRouterDTO,SdnipRouterDTODef} from "./SdnipRouterDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRouterSaveRequest extends GenericRequest {
   data: SdnipRouterDTO;

}


export var SdnipRouterSaveRequestDef:IModelDef = {
    meta: {
        className: 'SdnipRouterSaveRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: SdnipRouterDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipRouterSaveRequest';
    }
};



