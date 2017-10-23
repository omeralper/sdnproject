//imports start SdnipPolicyAssignmentListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SdnipPolicyAssignmentDTO,SdnipPolicyAssignmentDTODef} from "./SdnipPolicyAssignmentDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicyAssignmentListDTO extends BaseListDTO {
   
    /**
    * Politika tipine göre politika listesi
    */
    list: Array<SdnipPolicyAssignmentDTO>;

}


export var SdnipPolicyAssignmentListDTODef:IModelDef = {
    meta: {
        className: 'SdnipPolicyAssignmentListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SdnipPolicyAssignmentListDTO';
    }
};



