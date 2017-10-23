//imports start NacUserListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {NacUserDTO,NacUserDTODef} from "./NacUserDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserListDTO extends BaseListDTO {
   
    /**
    * Son kullanıcı veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<NacUserDTO>;

}


export var NacUserListDTODef:IModelDef = {
    meta: {
        className: 'NacUserListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'NacUserListDTO';
    }
};



