//imports start UniquenessControlResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {UNIQUENESSTYPE,UNIQUENESSTYPEDef} from "./UNIQUENESSTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface UniquenessControlResponse extends GenericResponse {
   
    /**
    * Benzersiz alan sorgulamasının sonuç değeri
    */
    data: UNIQUENESSTYPE;

}


export var UniquenessControlResponseDef:IModelDef = {
    meta: {
        className: 'UniquenessControlResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: UNIQUENESSTYPEDef, required: true }

    }),
    toString:()=>{
        return 'UniquenessControlResponse';
    }
};



