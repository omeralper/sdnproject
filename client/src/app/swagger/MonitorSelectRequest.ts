//imports start MonitorSelectRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MonitorSelectDTO,MonitorSelectDTODef} from "./MonitorSelectDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorSelectRequest extends GenericRequest {
   data: MonitorSelectDTO;

}


export var MonitorSelectRequestDef:IModelDef = {
    meta: {
        className: 'MonitorSelectRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MonitorSelectDTODef, required: true }

    }),
    toString:()=>{
        return 'MonitorSelectRequest';
    }
};



