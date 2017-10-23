//imports start AlarmListDTO

import {AlarmDTO,AlarmDTODef} from "./AlarmDTO";
import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AlarmListDTO extends BaseListDTO {
   
    /**
    * Alarm veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<AlarmDTO>;

}


export var AlarmListDTODef:IModelDef = {
    meta: {
        className: 'AlarmListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'AlarmListDTO';
    }
};



