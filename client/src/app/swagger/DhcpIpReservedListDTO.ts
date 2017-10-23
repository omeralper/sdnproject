//imports start DhcpIpReservedListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DhcpIpReservedDTO,DhcpIpReservedDTODef} from "./DhcpIpReservedDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedListDTO extends BaseListDTO {
   list: Array<DhcpIpReservedDTO>;

}


export var DhcpIpReservedListDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedListDTO';
    }
};



