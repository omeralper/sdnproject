//imports start AAAServerRequest

import {AAAServerDTO,AAAServerDTODef} from "./AAAServerDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AAAServerRequest extends GenericRequest {
   data: AAAServerDTO;

}


export var AAAServerRequestDef:IModelDef = {
    meta: {
        className: 'AAAServerRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: AAAServerDTODef, required: true }

    }),
    toString:()=>{
        return 'AAAServerRequest';
    }
};



