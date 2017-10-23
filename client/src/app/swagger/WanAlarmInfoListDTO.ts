//imports start WanAlarmInfoListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {WanAlarmInfoDTO,WanAlarmInfoDTODef} from "./WanAlarmInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanAlarmInfoListDTO extends BaseListDTO {
   
    /**
    * Geniş alan ağlarının alarm bilgilerinin listesi.
    */
    list?: Array<WanAlarmInfoDTO>;

}


export var WanAlarmInfoListDTODef:IModelDef = {
    meta: {
        className: 'WanAlarmInfoListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array' }

    }),
    toString:()=>{
        return 'WanAlarmInfoListDTO';
    }
};



