//imports start NacForgettenPasswordResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacForgettenPassDTO,NacForgettenPassDTODef} from "./NacForgettenPassDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacForgettenPasswordResponse extends GenericResponse {
   data?: NacForgettenPassDTO;

}


export var NacForgettenPasswordResponseDef:IModelDef = {
    meta: {
        className: 'NacForgettenPasswordResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacForgettenPassDTODef }

    }),
    toString:()=>{
        return 'NacForgettenPasswordResponse';
    }
};



