//imports start DhcpIPOwnerListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DhcpIPOwnerDTO,DhcpIPOwnerDTODef} from "./DhcpIPOwnerDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIPOwnerListDTO extends BaseListDTO {
   list: Array<DhcpIPOwnerDTO>;

}


export var DhcpIPOwnerListDTODef:IModelDef = {
    meta: {
        className: 'DhcpIPOwnerListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'DhcpIPOwnerListDTO';
    }
};



