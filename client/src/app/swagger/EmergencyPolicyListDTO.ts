//imports start EmergencyPolicyListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {EmergencyPolicyDTO,EmergencyPolicyDTODef} from "./EmergencyPolicyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface EmergencyPolicyListDTO extends BaseListDTO {
   
    /**
    * Acil durum politikası listesinin bulunduğu veri yapısı.
    */
    list: Array<EmergencyPolicyDTO>;

}


export var EmergencyPolicyListDTODef:IModelDef = {
    meta: {
        className: 'EmergencyPolicyListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'EmergencyPolicyListDTO';
    }
};



