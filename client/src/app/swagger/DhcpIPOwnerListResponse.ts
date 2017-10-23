//imports start DhcpIPOwnerListResponse

import {DhcpIPOwnerListDTO,DhcpIPOwnerListDTODef} from "./DhcpIPOwnerListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIPOwnerListResponse extends GenericResponse {
   data: DhcpIPOwnerListDTO;

}


export var DhcpIPOwnerListResponseDef:IModelDef = {
    meta: {
        className: 'DhcpIPOwnerListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: DhcpIPOwnerListDTODef, required: true }

    }),
    toString:()=>{
        return 'DhcpIPOwnerListResponse';
    }
};



