//imports start MvtnEditChangeResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MvtnEditStatusDTO,MvtnEditStatusDTODef} from "./MvtnEditStatusDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnEditChangeResponse extends GenericResponse {
   data: MvtnEditStatusDTO;

}


export var MvtnEditChangeResponseDef:IModelDef = {
    meta: {
        className: 'MvtnEditChangeResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MvtnEditStatusDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnEditChangeResponse';
    }
};



