//imports start DhcpIpReservedUserListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DhcpIpReservedUserDTO,DhcpIpReservedUserDTODef} from "./DhcpIpReservedUserDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpReservedUserListDTO extends BaseListDTO {
   list: Array<DhcpIpReservedUserDTO>;

}


export var DhcpIpReservedUserListDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpReservedUserListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'DhcpIpReservedUserListDTO';
    }
};



