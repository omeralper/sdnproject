//imports start DhcpIpExcludedListResponse

import {DhcpIpExcludedListDTO,DhcpIpExcludedListDTODef} from "./DhcpIpExcludedListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpExcludedListResponse extends GenericResponse {
   data: DhcpIpExcludedListDTO;

}


export var DhcpIpExcludedListResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpExcludedListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpExcludedListDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpExcludedListResponse';
    }
};



