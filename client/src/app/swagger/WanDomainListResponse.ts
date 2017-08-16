//imports start WanDomainListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {WanDomainListDTO,WanDomainListDTODef} from "./WanDomainListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanDomainListResponse extends GenericResponse {
   data?: WanDomainListDTO;

}


export var WanDomainListResponseDef:IModelDef = {
    meta: {
        className: 'WanDomainListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: WanDomainListDTODef }

    }),
    toString:()=>{
        return 'WanDomainListResponse';
    }
};



