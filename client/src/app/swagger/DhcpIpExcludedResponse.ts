//imports start DhcpIpExcludedResponse

import {DhcpIpExcludedDTO,DhcpIpExcludedDTODef} from "./DhcpIpExcludedDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpExcludedResponse extends GenericResponse {
   data: DhcpIpExcludedDTO;

}


export var DhcpIpExcludedResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIpExcludedResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIpExcludedDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIpExcludedResponse';
    }
};



