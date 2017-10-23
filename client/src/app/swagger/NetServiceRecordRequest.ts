//imports start NetServiceRecordRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {NetServiceRecordDTO,NetServiceRecordDTODef} from "./NetServiceRecordDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordRequest extends GenericRequest {
   data: NetServiceRecordDTO;

}


export var NetServiceRecordRequestDef:IModelDef = {
    meta: {
        className: 'NetServiceRecordRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: NetServiceRecordDTODef, required: true }

    }),
    toString:()=>{
        return 'NetServiceRecordRequest';
    }
};



