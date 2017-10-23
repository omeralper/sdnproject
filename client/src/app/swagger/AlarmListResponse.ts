//imports start AlarmListResponse

import {AlarmListDTO,AlarmListDTODef} from "./AlarmListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmListResponse extends GenericResponse {
   data: AlarmListDTO;

}


export var AlarmListResponseDef:IModelDef = {
    meta: {
        className: 'AlarmListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AlarmListDTODef, required: true }

    }),
    toString:()=>{
        return 'AlarmListResponse';
    }
};



