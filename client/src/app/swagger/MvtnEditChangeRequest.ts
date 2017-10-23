//imports start MvtnEditChangeRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MvtnEditStatusDTO,MvtnEditStatusDTODef} from "./MvtnEditStatusDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnEditChangeRequest extends GenericRequest {
   data: MvtnEditStatusDTO;

}


export var MvtnEditChangeRequestDef:IModelDef = {
    meta: {
        className: 'MvtnEditChangeRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MvtnEditStatusDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnEditChangeRequest';
    }
};



