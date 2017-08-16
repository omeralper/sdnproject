//imports start LinkResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {LinkDTO,LinkDTODef} from "./LinkDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LinkResponse extends GenericResponse {
   data?: LinkDTO;

}


export var LinkResponseDef:IModelDef = {
    meta: {
        className: 'LinkResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: LinkDTODef }

    }),
    toString:()=>{
        return 'LinkResponse';
    }
};



