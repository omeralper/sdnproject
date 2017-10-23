//imports start IdResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface IdResponse extends GenericResponse {
   
    /**
    * ID değeri.
    */
    id: string;

}


export var IdResponseDef:IModelDef = {
    meta: {
        className: 'IdResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        id : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'IdResponse';
    }
};



