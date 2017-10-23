//imports start FeatureListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {FeatureDTO,FeatureDTODef} from "./FeatureDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FeatureListDTO extends BaseListDTO {
   
    /**
    * Özellik profillerinin listesi.
    */
    list?: Array<FeatureDTO>;

}


export var FeatureListDTODef:IModelDef = {
    meta: {
        className: 'FeatureListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array' }

    }),
    toString:()=>{
        return 'FeatureListDTO';
    }
};



