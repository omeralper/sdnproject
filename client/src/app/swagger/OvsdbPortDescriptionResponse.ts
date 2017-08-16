//imports start OvsdbPortDescriptionResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {OvsdbPortDescriptionDTO,OvsdbPortDescriptionDTODef} from "./OvsdbPortDescriptionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface OvsdbPortDescriptionResponse extends GenericResponse {
   data: Array<OvsdbPortDescriptionDTO>;

}


export var OvsdbPortDescriptionResponseDef:IModelDef = {
    meta: {
        className: 'OvsdbPortDescriptionResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'OvsdbPortDescriptionResponse';
    }
};



