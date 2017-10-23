//imports start MvtnChangeStatusResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MvtnStatusDTO,MvtnStatusDTODef} from "./MvtnStatusDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnChangeStatusResponse extends GenericResponse {
   data: MvtnStatusDTO;

}


export var MvtnChangeStatusResponseDef:IModelDef = {
    meta: {
        className: 'MvtnChangeStatusResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MvtnStatusDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnChangeStatusResponse';
    }
};



