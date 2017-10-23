//imports start GenericDeleteRequest

import {DeleteOptions,DeleteOptionsDef} from "./DeleteOptions";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface GenericDeleteRequest extends GenericRequest {
   options: DeleteOptions;

}


export var GenericDeleteRequestDef:IModelDef = {
    meta: {
        className: 'GenericDeleteRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: DeleteOptionsDef, required: true }

    }),
    toString:()=>{
        return 'GenericDeleteRequest';
    }
};



