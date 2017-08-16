//imports start PathResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {PathDTO,PathDTODef} from "./PathDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PathResponse extends GenericResponse {
   data: PathDTO;

}


export var PathResponseDef:IModelDef = {
    meta: {
        className: 'PathResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: PathDTODef, required: true }

    }),
    toString:()=>{
        return 'PathResponse';
    }
};



