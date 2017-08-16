//imports start WanDomainResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {WanDomainDTO,WanDomainDTODef} from "./WanDomainDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanDomainResponse extends GenericResponse {
   data?: WanDomainDTO;

}


export var WanDomainResponseDef:IModelDef = {
    meta: {
        className: 'WanDomainResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: WanDomainDTODef }

    }),
    toString:()=>{
        return 'WanDomainResponse';
    }
};



