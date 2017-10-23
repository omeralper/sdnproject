//imports start DhcpOptionListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DhcpOptionDTO,DhcpOptionDTODef} from "./DhcpOptionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpOptionListDTO extends BaseListDTO {
   list: Array<DhcpOptionDTO>;

}


export var DhcpOptionListDTODef:IModelDef = {
    meta: {
        className: 'DhcpOptionListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'DhcpOptionListDTO';
    }
};



