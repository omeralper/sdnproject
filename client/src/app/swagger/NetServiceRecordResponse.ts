//imports start NetServiceRecordResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NetServiceRecordDTO,NetServiceRecordDTODef} from "./NetServiceRecordDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordResponse extends GenericResponse {
   data?: NetServiceRecordDTO;

}


export var NetServiceRecordResponseDef:IModelDef = {
    meta: {
        className: 'NetServiceRecordResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NetServiceRecordDTODef }

    }),
    toString:()=>{
        return 'NetServiceRecordResponse';
    }
};



