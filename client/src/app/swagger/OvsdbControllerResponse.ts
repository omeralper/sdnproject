//imports start OvsdbControllerResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {OvsdbControllerDTO,OvsdbControllerDTODef} from "./OvsdbControllerDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface OvsdbControllerResponse extends GenericResponse {
   data: Array<OvsdbControllerDTO>;

}


export var OvsdbControllerResponseDef:IModelDef = {
    meta: {
        className: 'OvsdbControllerResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'OvsdbControllerResponse';
    }
};



