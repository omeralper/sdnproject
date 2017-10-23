//imports start IndicatorsResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {IndicatorsResponseDTO,IndicatorsResponseDTODef} from "./IndicatorsResponseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface IndicatorsResponse extends GenericResponse {
   data: IndicatorsResponseDTO;

}


export var IndicatorsResponseDef:IModelDef = {
    meta: {
        className: 'IndicatorsResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: IndicatorsResponseDTODef, required: true }

    }),
    toString:()=>{
        return 'IndicatorsResponse';
    }
};



