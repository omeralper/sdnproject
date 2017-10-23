//imports start GenericIdRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface GenericIdRequest extends GenericRequest {
   
    /**
    * ID değeri.
    */
    id: string;

}


export var GenericIdRequestDef:IModelDef = {
    meta: {
        className: 'GenericIdRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        id : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'GenericIdRequest';
    }
};



