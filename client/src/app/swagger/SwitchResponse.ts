//imports start SwitchResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SwitchDTO,SwitchDTODef} from "./SwitchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SwitchResponse extends GenericResponse {
   data?: SwitchDTO;

}


export var SwitchResponseDef:IModelDef = {
    meta: {
        className: 'SwitchResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SwitchDTODef }

    }),
    toString:()=>{
        return 'SwitchResponse';
    }
};



