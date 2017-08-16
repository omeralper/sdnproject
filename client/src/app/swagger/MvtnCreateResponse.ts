//imports start MvtnCreateResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MvtnDTO,MvtnDTODef} from "./MvtnDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnCreateResponse extends GenericResponse {
   data?: MvtnDTO;

}


export var MvtnCreateResponseDef:IModelDef = {
    meta: {
        className: 'MvtnCreateResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MvtnDTODef }

    }),
    toString:()=>{
        return 'MvtnCreateResponse';
    }
};



