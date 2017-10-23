//imports start WanDomainRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {WanDomainDTO,WanDomainDTODef} from "./WanDomainDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanDomainRequest extends GenericRequest {
   data: WanDomainDTO;

}


export var WanDomainRequestDef:IModelDef = {
    meta: {
        className: 'WanDomainRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: WanDomainDTODef, required: true }

    }),
    toString:()=>{
        return 'WanDomainRequest';
    }
};



