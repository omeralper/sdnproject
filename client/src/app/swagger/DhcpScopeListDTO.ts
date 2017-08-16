//imports start DhcpScopeListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DhcpScopeDTO,DhcpScopeDTODef} from "./DhcpScopeDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpScopeListDTO extends BaseListDTO {
   list: Array<DhcpScopeDTO>;

}


export var DhcpScopeListDTODef:IModelDef = {
    meta: {
        className: 'DhcpScopeListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'DhcpScopeListDTO';
    }
};



