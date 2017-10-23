//imports start AppListResponse

import {AppListDTO,AppListDTODef} from "./AppListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AppListResponse extends GenericResponse {
   data: AppListDTO;

}


export var AppListResponseDef:IModelDef = {
    meta: {
        className: 'AppListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AppListDTODef, required: true }

    }),
    toString:()=>{
        return 'AppListResponse';
    }
};



