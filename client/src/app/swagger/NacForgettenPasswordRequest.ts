//imports start NacForgettenPasswordRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NacForgettenPassDTO,NacForgettenPassDTODef} from "./NacForgettenPassDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacForgettenPasswordRequest extends GenericRequest {
   data?: NacForgettenPassDTO;

}


export var NacForgettenPasswordRequestDef:IModelDef = {
    meta: {
        className: 'NacForgettenPasswordRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NacForgettenPassDTODef }

    }),
    toString:()=>{
        return 'NacForgettenPasswordRequest';
    }
};



