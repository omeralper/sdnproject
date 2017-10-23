//imports start SwitchRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SwitchDTO,SwitchDTODef} from "./SwitchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SwitchRequest extends GenericRequest {
   data: SwitchDTO;

}


export var SwitchRequestDef:IModelDef = {
    meta: {
        className: 'SwitchRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: SwitchDTODef, required: true }

    }),
    toString:()=>{
        return 'SwitchRequest';
    }
};



