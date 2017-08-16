//imports start FeatureResponse

import {FeatureDTO,FeatureDTODef} from "./FeatureDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FeatureResponse extends GenericResponse {
   data: FeatureDTO;

}


export var FeatureResponseDef:IModelDef = {
    meta: {
        className: 'FeatureResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: FeatureDTODef, required: true }

    }),
    toString:()=>{
        return 'FeatureResponse';
    }
};



