//imports start SdnipDefinedSetSaveRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SdnipDefinedSetDTO,SdnipDefinedSetDTODef} from "./SdnipDefinedSetDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipDefinedSetSaveRequest extends GenericRequest {
   data: SdnipDefinedSetDTO;

}


export var SdnipDefinedSetSaveRequestDef:IModelDef = {
    meta: {
        className: 'SdnipDefinedSetSaveRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: SdnipDefinedSetDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipDefinedSetSaveRequest';
    }
};



