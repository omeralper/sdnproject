//imports start FeatureListResponse

import {FeatureListDTO,FeatureListDTODef} from "./FeatureListDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FeatureListResponse extends GenericResponse {
   data: FeatureListDTO;

}


export var FeatureListResponseDef:IModelDef = {
    meta: {
        className: 'FeatureListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: FeatureListDTODef, required: true }

    }),
    toString:()=>{
        return 'FeatureListResponse';
    }
};



