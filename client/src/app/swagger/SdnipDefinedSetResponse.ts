//imports start SdnipDefinedSetResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SdnipDefinedSetDTO,SdnipDefinedSetDTODef} from "./SdnipDefinedSetDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipDefinedSetResponse extends GenericResponse {
   data: SdnipDefinedSetDTO;

}


export var SdnipDefinedSetResponseDef:IModelDef = {
    meta: {
        className: 'SdnipDefinedSetResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SdnipDefinedSetDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipDefinedSetResponse';
    }
};



