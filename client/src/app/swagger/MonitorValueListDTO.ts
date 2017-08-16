//imports start MonitorValueListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {MonitorValueDTO,MonitorValueDTODef} from "./MonitorValueDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorValueListDTO extends BaseListDTO {
   list: Array<MonitorValueDTO>;

}


export var MonitorValueListDTODef:IModelDef = {
    meta: {
        className: 'MonitorValueListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MonitorValueListDTO';
    }
};



