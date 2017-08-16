//imports start EndUserApplicationListResponse

import {EndUserApplicationListDTO,EndUserApplicationListDTODef} from "./EndUserApplicationListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EndUserApplicationListResponse extends GenericResponse {
   data?: EndUserApplicationListDTO;

}


export var EndUserApplicationListResponseDef:IModelDef = {
    meta: {
        className: 'EndUserApplicationListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: EndUserApplicationListDTODef }

    }),
    toString:()=>{
        return 'EndUserApplicationListResponse';
    }
};



