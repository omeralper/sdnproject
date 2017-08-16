//imports start DhcpIpPoolListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DhcpIpPoolDTO,DhcpIpPoolDTODef} from "./DhcpIpPoolDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpPoolListDTO extends BaseListDTO {
   list: Array<DhcpIpPoolDTO>;

}


export var DhcpIpPoolListDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpPoolListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'DhcpIpPoolListDTO';
    }
};



