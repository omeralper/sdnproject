//imports start SfcResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {SfcDTO,SfcDTODef} from "./SfcDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SfcResponse extends GenericResponse {
   data: SfcDTO;

}


export var SfcResponseDef:IModelDef = {
    meta: {
        className: 'SfcResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: SfcDTODef, required: true }

    }),
    toString:()=>{
        return 'SfcResponse';
    }
};



