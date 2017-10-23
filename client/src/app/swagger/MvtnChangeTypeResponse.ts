//imports start MvtnChangeTypeResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MvtnTypeDTO,MvtnTypeDTODef} from "./MvtnTypeDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnChangeTypeResponse extends GenericResponse {
   data: MvtnTypeDTO;

}


export var MvtnChangeTypeResponseDef:IModelDef = {
    meta: {
        className: 'MvtnChangeTypeResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MvtnTypeDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnChangeTypeResponse';
    }
};



