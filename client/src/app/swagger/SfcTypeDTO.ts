//imports start SfcTypeDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {VnfdDTO,VnfdDTODef} from "./VnfdDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SfcTypeDTO extends BaseDTO {
   
    /**
    * Sfc tip adı.
    */
    sfcTypeName?: string;
   
    /**
    * Sfc tip id'si
    */
    sfcTypeId?: number;
   
    /**
    * Sıralı şekilde yazılmış vnfd tanım listesi
    */
    vnfdList?: Array<VnfdDTO>;

}


export var SfcTypeDTODef:IModelDef = {
    meta: {
        className: 'SfcTypeDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        sfcTypeName : { type: 'string' }, 

        sfcTypeId : { type: 'number' }, 

        vnfdList : { type: 'Array' }

    }),
    toString:()=>{
        return 'SfcTypeDTO';
    }
};



