//imports start RoleListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {RoleDTO,RoleDTODef} from "./RoleDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface RoleListDTO extends BaseListDTO {
   
    /**
    * Rol veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<RoleDTO>;

}


export var RoleListDTODef:IModelDef = {
    meta: {
        className: 'RoleListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'RoleListDTO';
    }
};



