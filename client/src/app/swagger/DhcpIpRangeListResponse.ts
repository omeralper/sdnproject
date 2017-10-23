//imports start DhcpIpRangeListResponse

import {DhcpIpRangeListDTO,DhcpIpRangeListDTODef} from "./DhcpIpRangeListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpRangeListResponse extends GenericResponse {
   data: DhcpIpRangeListDTO;

}


export var DhcpIpRangeListResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpRangeListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpRangeListDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpRangeListResponse';
    }
};



