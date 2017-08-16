//imports start AAAServerListResponse

import {AAAServerListDTO,AAAServerListDTODef} from "./AAAServerListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AAAServerListResponse extends GenericResponse {
   data: AAAServerListDTO;

}


export var AAAServerListResponseDef:IModelDef = {
    meta: {
        className: 'AAAServerListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AAAServerListDTODef, required: true }

    }),
    toString:()=>{
        return 'AAAServerListResponse';
    }
};



