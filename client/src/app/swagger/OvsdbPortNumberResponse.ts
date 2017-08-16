//imports start OvsdbPortNumberResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {OvsdbPortNumberDTO,OvsdbPortNumberDTODef} from "./OvsdbPortNumberDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface OvsdbPortNumberResponse extends GenericResponse {
   data: Array<OvsdbPortNumberDTO>;

}


export var OvsdbPortNumberResponseDef:IModelDef = {
    meta: {
        className: 'OvsdbPortNumberResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'OvsdbPortNumberResponse';
    }
};



