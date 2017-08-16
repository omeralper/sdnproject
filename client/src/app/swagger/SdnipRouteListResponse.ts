//imports start SdnipRouteListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SdnipRouteListDTO,SdnipRouteListDTODef} from "./SdnipRouteListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRouteListResponse extends GenericResponse {
   data: SdnipRouteListDTO;

}


export var SdnipRouteListResponseDef:IModelDef = {
    meta: {
        className: 'SdnipRouteListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SdnipRouteListDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipRouteListResponse';
    }
};



