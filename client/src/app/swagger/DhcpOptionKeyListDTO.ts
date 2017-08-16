//imports start DhcpOptionKeyListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DhcpOptionKeyDTO,DhcpOptionKeyDTODef} from "./DhcpOptionKeyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpOptionKeyListDTO extends BaseListDTO {
   list: Array<DhcpOptionKeyDTO>;

}


export var DhcpOptionKeyListDTODef:IModelDef = {
    meta: {
        className: 'DhcpOptionKeyListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'DhcpOptionKeyListDTO';
    }
};



