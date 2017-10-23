//imports start WanPortInfoListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {WanPortInfoListDTO,WanPortInfoListDTODef} from "./WanPortInfoListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanPortInfoListResponse extends GenericResponse {
   data: WanPortInfoListDTO;

}


export var WanPortInfoListResponseDef:IModelDef = {
    meta: {
        className: 'WanPortInfoListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: WanPortInfoListDTODef, required: true }

    }),
    toString:()=>{
        return 'WanPortInfoListResponse';
    }
};



