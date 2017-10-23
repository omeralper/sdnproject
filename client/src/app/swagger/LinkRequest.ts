//imports start LinkRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {LinkDTO,LinkDTODef} from "./LinkDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LinkRequest extends GenericRequest {
   data: LinkDTO;

}


export var LinkRequestDef:IModelDef = {
    meta: {
        className: 'LinkRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: LinkDTODef, required: true }

    }),
    toString:()=>{
        return 'LinkRequest';
    }
};



