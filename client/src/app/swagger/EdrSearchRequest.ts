//imports start EdrSearchRequest

import {EdrSearchCriteria,EdrSearchCriteriaDef} from "./EdrSearchCriteria";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EdrSearchRequest extends GenericRequest {
   data: EdrSearchCriteria;

}


export var EdrSearchRequestDef:IModelDef = {
    meta: {
        className: 'EdrSearchRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: EdrSearchCriteriaDef, required: true }

    }),
    toString:()=>{
        return 'EdrSearchRequest';
    }
};



