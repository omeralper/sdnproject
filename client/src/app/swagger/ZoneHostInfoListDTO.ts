//imports start ZoneHostInfoListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ZoneHostInfoDTO,ZoneHostInfoDTODef} from "./ZoneHostInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ZoneHostInfoListDTO extends BaseListDTO {
   
    /**
    * Her bir alt Zone bilgilerini tutan dizi
    */
    list: Array<ZoneHostInfoDTO>;

}


export var ZoneHostInfoListDTODef:IModelDef = {
    meta: {
        className: 'ZoneHostInfoListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'ZoneHostInfoListDTO';
    }
};



