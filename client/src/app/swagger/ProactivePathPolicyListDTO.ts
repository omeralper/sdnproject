//imports start ProactivePathPolicyListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ProactivePathPolicyDTO,ProactivePathPolicyDTODef} from "./ProactivePathPolicyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ProactivePathPolicyListDTO extends BaseListDTO {
   
    /**
    * Proaktif patika politikaları bulunduğu listedir.
    */
    list: Array<ProactivePathPolicyDTO>;

}


export var ProactivePathPolicyListDTODef:IModelDef = {
    meta: {
        className: 'ProactivePathPolicyListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'ProactivePathPolicyListDTO';
    }
};



