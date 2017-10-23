//imports start AlarmRequest

import {AlarmDTO,AlarmDTODef} from "./AlarmDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmRequest extends GenericRequest {
   data: AlarmDTO;

}


export var AlarmRequestDef:IModelDef = {
    meta: {
        className: 'AlarmRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: AlarmDTODef, required: true }

    }),
    toString:()=>{
        return 'AlarmRequest';
    }
};



