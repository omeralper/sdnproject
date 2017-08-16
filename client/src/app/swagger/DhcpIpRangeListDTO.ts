//imports start DhcpIpRangeListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {DhcpIpRangeDTO,DhcpIpRangeDTODef} from "./DhcpIpRangeDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DhcpIpRangeListDTO extends BaseListDTO {
   list: Array<DhcpIpRangeDTO>;

}


export var DhcpIpRangeListDTODef:IModelDef = {
    meta: {
        className: 'DhcpIpRangeListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'DhcpIpRangeListDTO';
    }
};



