//imports start AppResponse

import {AppDTO,AppDTODef} from "./AppDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AppResponse extends GenericResponse {
   data?: AppDTO;

}


export var AppResponseDef:IModelDef = {
    meta: {
        className: 'AppResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AppDTODef }

    }),
    toString:()=>{
        return 'AppResponse';
    }
};



