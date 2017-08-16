//imports start WanPortInfoRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {WanPortInfoDTO,WanPortInfoDTODef} from "./WanPortInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanPortInfoRequest extends GenericRequest {
   data: WanPortInfoDTO;

}


export var WanPortInfoRequestDef:IModelDef = {
    meta: {
        className: 'WanPortInfoRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: WanPortInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'WanPortInfoRequest';
    }
};



