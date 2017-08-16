//imports start NetServiceDescResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NetServiceDescDTO,NetServiceDescDTODef} from "./NetServiceDescDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceDescResponse extends GenericResponse {
   data?: NetServiceDescDTO;

}


export var NetServiceDescResponseDef:IModelDef = {
    meta: {
        className: 'NetServiceDescResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NetServiceDescDTODef }

    }),
    toString:()=>{
        return 'NetServiceDescResponse';
    }
};



