//imports start SdnipDefinedSetListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SdnipDefinedSetListDTO,SdnipDefinedSetListDTODef} from "./SdnipDefinedSetListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipDefinedSetListResponse extends GenericResponse {
   data: SdnipDefinedSetListDTO;

}


export var SdnipDefinedSetListResponseDef:IModelDef = {
    meta: {
        className: 'SdnipDefinedSetListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SdnipDefinedSetListDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipDefinedSetListResponse';
    }
};



