//imports start LinkListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {LinkListDTO,LinkListDTODef} from "./LinkListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LinkListResponse extends GenericResponse {
   data: LinkListDTO;

}


export var LinkListResponseDef:IModelDef = {
    meta: {
        className: 'LinkListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: LinkListDTODef, required: true }

    }),
    toString:()=>{
        return 'LinkListResponse';
    }
};



