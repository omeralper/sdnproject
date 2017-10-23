//imports start FeatureRequest

import {FeatureDTO,FeatureDTODef} from "./FeatureDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FeatureRequest extends GenericRequest {
   data: FeatureDTO;

}


export var FeatureRequestDef:IModelDef = {
    meta: {
        className: 'FeatureRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: FeatureDTODef, required: true }

    }),
    toString:()=>{
        return 'FeatureRequest';
    }
};



