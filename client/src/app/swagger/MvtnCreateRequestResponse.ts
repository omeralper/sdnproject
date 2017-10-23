//imports start MvtnCreateRequestResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MvtnRequestDTO,MvtnRequestDTODef} from "./MvtnRequestDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnCreateRequestResponse extends GenericResponse {
   data: MvtnRequestDTO;

}


export var MvtnCreateRequestResponseDef:IModelDef = {
    meta: {
        className: 'MvtnCreateRequestResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MvtnRequestDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnCreateRequestResponse';
    }
};



