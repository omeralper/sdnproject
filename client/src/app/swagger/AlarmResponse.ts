//imports start AlarmResponse

import {AlarmDTO,AlarmDTODef} from "./AlarmDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmResponse extends GenericResponse {
   data?: AlarmDTO;

}


export var AlarmResponseDef:IModelDef = {
    meta: {
        className: 'AlarmResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AlarmDTODef }

    }),
    toString:()=>{
        return 'AlarmResponse';
    }
};



