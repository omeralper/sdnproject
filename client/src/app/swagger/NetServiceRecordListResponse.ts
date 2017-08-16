//imports start NetServiceRecordListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {NetServiceRecordListDTO,NetServiceRecordListDTODef} from "./NetServiceRecordListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordListResponse extends GenericResponse {
   data: NetServiceRecordListDTO;

}


export var NetServiceRecordListResponseDef:IModelDef = {
    meta: {
        className: 'NetServiceRecordListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: NetServiceRecordListDTODef, required: true }

    }),
    toString:()=>{
        return 'NetServiceRecordListResponse';
    }
};



