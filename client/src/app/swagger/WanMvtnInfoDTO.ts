//imports start WanMvtnInfoDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {LanMvtnInfoDTO,LanMvtnInfoDTODef} from "./LanMvtnInfoDTO";
import {TopologyInfoDTO,TopologyInfoDTODef} from "./TopologyInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanMvtnInfoDTO extends BaseDTO {
   
    /**
    * Sanal ağ ismi
    */
    name?: string;
   
    /**
    * Topoloji detaylarının bulunduğu veri yapısı.
    */
    topoInfo?: TopologyInfoDTO;
   
    /**
    * Geniş alan sanal ağı için seçilecek/seçilmiş kümelerin detayları
    */
    lanMvtnInfos?: Array<LanMvtnInfoDTO>;
   
    /**
    * Geniş alan ağına ait sanal ağın idsi
    */
    wanMvtnId?: number;

}


export var WanMvtnInfoDTODef:IModelDef = {
    meta: {
        className: 'WanMvtnInfoDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string' }, 

        topoInfo : { type: TopologyInfoDTODef }, 

        lanMvtnInfos : { type: 'Array' }, 

        wanMvtnId : { type: 'number' }

    }),
    toString:()=>{
        return 'WanMvtnInfoDTO';
    }
};



