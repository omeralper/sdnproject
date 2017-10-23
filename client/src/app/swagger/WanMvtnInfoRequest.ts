//imports start WanMvtnInfoRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {WanMvtnInfoDTO,WanMvtnInfoDTODef} from "./WanMvtnInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanMvtnInfoRequest extends GenericRequest {
   data: WanMvtnInfoDTO;

}


export var WanMvtnInfoRequestDef:IModelDef = {
    meta: {
        className: 'WanMvtnInfoRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: WanMvtnInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'WanMvtnInfoRequest';
    }
};



