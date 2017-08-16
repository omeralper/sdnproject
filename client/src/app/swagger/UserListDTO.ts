//imports start UserListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {UserDTO,UserDTODef} from "./UserDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface UserListDTO extends BaseListDTO {
   
    /**
    * Kullanıcı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<UserDTO>;

}


export var UserListDTODef:IModelDef = {
    meta: {
        className: 'UserListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'UserListDTO';
    }
};



