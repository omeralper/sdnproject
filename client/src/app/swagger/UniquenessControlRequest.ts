//imports start UniquenessControlRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {UniquenessControlDTO,UniquenessControlDTODef} from "./UniquenessControlDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface UniquenessControlRequest extends GenericRequest {
   data: UniquenessControlDTO;

}


export var UniquenessControlRequestDef:IModelDef = {
    meta: {
        className: 'UniquenessControlRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: UniquenessControlDTODef, required: true }

    }),
    toString:()=>{
        return 'UniquenessControlRequest';
    }
};



