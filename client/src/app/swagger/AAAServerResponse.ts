//imports start AAAServerResponse

import {AAAServerDTO,AAAServerDTODef} from "./AAAServerDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AAAServerResponse extends GenericResponse {
   data?: AAAServerDTO;

}


export var AAAServerResponseDef:IModelDef = {
    meta: {
        className: 'AAAServerResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: AAAServerDTODef }

    }),
    toString:()=>{
        return 'AAAServerResponse';
    }
};



