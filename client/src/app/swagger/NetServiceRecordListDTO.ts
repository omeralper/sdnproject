//imports start NetServiceRecordListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {NetServiceRecordDTO,NetServiceRecordDTODef} from "./NetServiceRecordDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetServiceRecordListDTO extends BaseListDTO {
   
    /**
    * Çalışan ağ servislerini tutan liste
    */
    list: Array<NetServiceRecordDTO>;

}


export var NetServiceRecordListDTODef:IModelDef = {
    meta: {
        className: 'NetServiceRecordListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'NetServiceRecordListDTO';
    }
};



