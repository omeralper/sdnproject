//imports start VimInfoRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {VimInfoDTO,VimInfoDTODef} from "./VimInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimInfoRequest extends GenericRequest {
   data: VimInfoDTO;

}


export var VimInfoRequestDef:IModelDef = {
    meta: {
        className: 'VimInfoRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: VimInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'VimInfoRequest';
    }
};



