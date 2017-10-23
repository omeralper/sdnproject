//imports start MonitorInfoListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {MonitorInfoDTO,MonitorInfoDTODef} from "./MonitorInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorInfoListDTO extends BaseListDTO {
   list: Array<MonitorInfoDTO>;

}


export var MonitorInfoListDTODef:IModelDef = {
    meta: {
        className: 'MonitorInfoListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MonitorInfoListDTO';
    }
};



