//imports start SdnipRouterListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SdnipRouterListDTO,SdnipRouterListDTODef} from "./SdnipRouterListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRouterListResponse extends GenericResponse {
   data: SdnipRouterListDTO;

}


export var SdnipRouterListResponseDef:IModelDef = {
    meta: {
        className: 'SdnipRouterListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SdnipRouterListDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipRouterListResponse';
    }
};



