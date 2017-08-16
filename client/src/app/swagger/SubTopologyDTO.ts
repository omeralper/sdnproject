//imports start SubTopologyDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {HostDTO,HostDTODef} from "./HostDTO";
import {LinkDTO,LinkDTODef} from "./LinkDTO";
import {SubLinkDTO,SubLinkDTODef} from "./SubLinkDTO";
import {SubSwitchDTO,SubSwitchDTODef} from "./SubSwitchDTO";
import {TopologyInfoDTO,TopologyInfoDTODef} from "./TopologyInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SubTopologyDTO extends BaseDTO {
   
    /**
    * Topolojideki anahtarlayıcıların listesi.
    */
    switches?: Array<SubSwitchDTO>;
   
    /**
    * Topolojideki bağlantıların listesi.
    */
    links?: Array<LinkDTO>;
   
    /**
    * Sanal topolojideki bağlantıların listesi.
    */
    subLinks?: Array<SubLinkDTO>;
   
    /**
    * Topolojideki uç birimlerinin listesi.
    */
    hosts?: Array<HostDTO>;
   
    /**
    * Topoloji detaylarının bulunduğu veri yapısı.
    */
    info: TopologyInfoDTO;

}


export var SubTopologyDTODef:IModelDef = {
    meta: {
        className: 'SubTopologyDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        switches : { type: 'Array' }, 

        links : { type: 'Array' }, 

        subLinks : { type: 'Array' }, 

        hosts : { type: 'Array' }, 

        info : { type: TopologyInfoDTODef, required: true }

    }),
    toString:()=>{
        return 'SubTopologyDTO';
    }
};



