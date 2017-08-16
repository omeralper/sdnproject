//imports start WanDomainListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {WanDomainListDTO,WanDomainListDTODef} from "./WanDomainListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanDomainListRequest extends GenericRequest {
   data: WanDomainListDTO;

}


export var WanDomainListRequestDef:IModelDef = {
    meta: {
        className: 'WanDomainListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: WanDomainListDTODef, required: true }

    }),
    toString:()=>{
        return 'WanDomainListRequest';
    }
};



