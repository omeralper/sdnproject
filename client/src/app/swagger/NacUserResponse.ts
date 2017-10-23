//imports start NacUserResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NacUserDTO,NacUserDTODef} from "./NacUserDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserResponse extends GenericResponse {
   data?: NacUserDTO;

}


export var NacUserResponseDef:IModelDef = {
    meta: {
        className: 'NacUserResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NacUserDTODef }

    }),
    toString:()=>{
        return 'NacUserResponse';
    }
};



