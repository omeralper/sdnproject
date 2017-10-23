//imports start WanMvtnInfoListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {LanMvtnInfoDTO,LanMvtnInfoDTODef} from "./LanMvtnInfoDTO";
import {WanMvtnInfoDTO,WanMvtnInfoDTODef} from "./WanMvtnInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanMvtnInfoListDTO extends BaseListDTO {
   
    /**
    * Geniş alan sanal ağlarının bilgilerinin listesi.
    */
    list?: Array<WanMvtnInfoDTO>;
   
    /**
    * Geniş alan sanal ağı için tüm kümelerin detayları
    */
    lanMvtnInfos?: Array<LanMvtnInfoDTO>;

}


export var WanMvtnInfoListDTODef:IModelDef = {
    meta: {
        className: 'WanMvtnInfoListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array' }, 

        lanMvtnInfos : { type: 'Array' }

    }),
    toString:()=>{
        return 'WanMvtnInfoListDTO';
    }
};



