//imports start ServicePolicyClassListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ServicePolicyClassDTO,ServicePolicyClassDTODef} from "./ServicePolicyClassDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServicePolicyClassListDTO extends BaseListDTO {
   
    /**
    * Trafik sınıfı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<ServicePolicyClassDTO>;

}


export var ServicePolicyClassListDTODef:IModelDef = {
    meta: {
        className: 'ServicePolicyClassListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'ServicePolicyClassListDTO';
    }
};



