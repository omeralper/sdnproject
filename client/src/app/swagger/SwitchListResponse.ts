//imports start SwitchListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SwitchListDTO,SwitchListDTODef} from "./SwitchListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SwitchListResponse extends GenericResponse {
   data: SwitchListDTO;

}


export var SwitchListResponseDef:IModelDef = {
    meta: {
        className: 'SwitchListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SwitchListDTODef, required: true }

    }),
    toString:()=>{
        return 'SwitchListResponse';
    }
};



