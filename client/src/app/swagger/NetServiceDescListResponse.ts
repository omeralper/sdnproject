//imports start NetServiceDescListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NetServiceDescListDTO,NetServiceDescListDTODef} from "./NetServiceDescListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceDescListResponse extends GenericResponse {
   data: NetServiceDescListDTO;

}


export var NetServiceDescListResponseDef:IModelDef = {
    meta: {
        className: 'NetServiceDescListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NetServiceDescListDTODef, required: true }

    }),
    toString:()=>{
        return 'NetServiceDescListResponse';
    }
};



