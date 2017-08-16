//imports start ZoneInfoListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ZoneInfoDTO,ZoneInfoDTODef} from "./ZoneInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ZoneInfoListDTO extends BaseListDTO {
   
    /**
    * Zone bilgilerinin her biri icin ayrı objelerinin tutuldugu yer
    */
    list: Array<ZoneInfoDTO>;

}


export var ZoneInfoListDTODef:IModelDef = {
    meta: {
        className: 'ZoneInfoListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'ZoneInfoListDTO';
    }
};



