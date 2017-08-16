//imports start DhcpIpExcludedListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DhcpIpExcludedDTO,DhcpIpExcludedDTODef} from "./DhcpIpExcludedDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpExcludedListDTO extends BaseListDTO {
   list: Array<DhcpIpExcludedDTO>;

}


export var DhcpIpExcludedListDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpExcludedListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'DhcpIpExcludedListDTO';
    }
};



