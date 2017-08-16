//imports start FeatureListRequest

import {FeatureListDTO,FeatureListDTODef} from "./FeatureListDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FeatureListRequest extends GenericRequest {
   data: FeatureListDTO;

}


export var FeatureListRequestDef:IModelDef = {
    meta: {
        className: 'FeatureListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: FeatureListDTODef, required: true }

    }),
    toString:()=>{
        return 'FeatureListRequest';
    }
};



