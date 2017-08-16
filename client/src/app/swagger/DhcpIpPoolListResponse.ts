//imports start DhcpIpPoolListResponse

import {DhcpIpPoolListDTO,DhcpIpPoolListDTODef} from "./DhcpIpPoolListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpPoolListResponse extends GenericResponse {
   data: DhcpIpPoolListDTO;

}


export var DhcpIpPoolListResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpPoolListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpPoolListDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpPoolListResponse';
    }
};



