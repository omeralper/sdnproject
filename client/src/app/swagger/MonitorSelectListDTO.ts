//imports start MonitorSelectListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {MonitorSelectDTO,MonitorSelectDTODef} from "./MonitorSelectDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MonitorSelectListDTO extends BaseListDTO {
   list: Array<MonitorSelectDTO>;

}


export var MonitorSelectListDTODef:IModelDef = {
    meta: {
        className: 'MonitorSelectListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MonitorSelectListDTO';
    }
};



