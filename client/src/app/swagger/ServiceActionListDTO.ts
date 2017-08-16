//imports start ServiceActionListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ServiceActionDTO,ServiceActionDTODef} from "./ServiceActionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServiceActionListDTO extends BaseListDTO {
   
    /**
    * Hizmet aksiyonu veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<ServiceActionDTO>;

}


export var ServiceActionListDTODef:IModelDef = {
    meta: {
        className: 'ServiceActionListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'ServiceActionListDTO';
    }
};



