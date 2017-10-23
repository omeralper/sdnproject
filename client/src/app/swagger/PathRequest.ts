//imports start PathRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {PathDTO,PathDTODef} from "./PathDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PathRequest extends GenericRequest {
   data: PathDTO;

}


export var PathRequestDef:IModelDef = {
    meta: {
        className: 'PathRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: PathDTODef, required: true }

    }),
    toString:()=>{
        return 'PathRequest';
    }
};



