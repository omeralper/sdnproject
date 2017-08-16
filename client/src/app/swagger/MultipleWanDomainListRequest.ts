//imports start MultipleWanDomainListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MultipleWanDomainDTO,MultipleWanDomainDTODef} from "./MultipleWanDomainDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MultipleWanDomainListRequest extends GenericRequest {
   data: MultipleWanDomainDTO;

}


export var MultipleWanDomainListRequestDef:IModelDef = {
    meta: {
        className: 'MultipleWanDomainListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MultipleWanDomainDTODef, required: true }

    }),
    toString:()=>{
        return 'MultipleWanDomainListRequest';
    }
};



