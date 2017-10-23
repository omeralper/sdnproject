//imports start TopologyEventDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {TOPOLOGYEVENTTYPE,TOPOLOGYEVENTTYPEDef} from "./TOPOLOGYEVENTTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyEventDTO extends BaseDTO {
   
    /**
    * Topoloji ID değeri
    */
    topologyId?: string;
   
    /**
    * Event tipi.
    */
    type: TOPOLOGYEVENTTYPE;
   
    /**
    * Topolojide meydana gelen değişikliklere göre dönülecek veri yapısı.\nDönülecek veri yapısı \"type\" alanındaki değere göre aşağıdaki şekilde belirlenecektir.\n\n| Event Tipi            | Dönülen Veri Tipi | Açıklama                                                           |\n|:----------------------|:------------------|:-------------------------------------------------------------------|\n| TOPOLOGYUPDATED      | TopologyOptions   | Değişiklik olan topolojiye ait istek veri modeli                   |\n| SWITCHADDED          | SwitchDTO         | Eklenen anahtarlayıcıya ait veri transfer modeli                   |\n| SWITCHREMOVED        | String            | Anahtarlayıcının ID değeri                                         |\n| SWITCHUPDATED        | SwitchDTO         | Güncellenen anahtarlayıcıya ait veri trasnfer modeli               |\n| HOSTADDED            | HostDTO           | Eklenen uç birim cihazına ait veri transfer modeli                 |\n| HOSTREMOVED          | String            | Uç birim cihazının ID değeri                                       |\n| HOSTUPDATED          | HostDTO           | Güncellenen uç birim cihazına ait veri transfer modeli             |\n| LINKADDED            | LinkDTO           | Eklenen bağlantıya ait veri transfer modeli                        |\n| LINKREMOVED          | String            | Bağlantının ID değeri                                              |\n| LINKUPDATED          | LinkDTO           | Güncellenen bağlantıya ait veri transfer modeli                    |\n| STATS_UPDATED         | TopologyDTO       | Güncellenen istatistiğe ait veri transfer modeli                   |\n| PORTS_UPDATED         | SwitchDTO         | Güncellenen port bilgilerine ait veri transfer modeli              |\n| NETWORK_DEVICE_ADDED  | NetworkDeviceDTO  | Yeni network cihazı bilgilerine ait veri transfer modeli           |\n| NETWORK_DEVICE_UPDATED| NetworkDeviceDTO  | Güncellenen network cihazı bilgileri veri transfer modeli          |\n| NETWORK_DEVICE_REMOVED| NetworkDeviceDTO  | Silinen network cihazı bilgilerine ait veri transfer modeli        |\n| DOMAIN_ADDED          | WanDomainDTO      | Eklenen geniş alan ağına ait veri transfer modeli                  |\n| DOMAIN_REMOVED        | WanDomainDTO      | Silinen geniş alan ağına ait veri transfer modeli                  |\n| DOMAIN_UPDATED        | WanDomainDTO      | Güncellenen geniş alan ağına ait veri transfer modeli              |\n| WAN_PORT_ADDED        | WanPortInfoDTO    | Eklenen uç birime ait veri transfer modeli                         |\n| WAN_PORT_REMOVED      | WanPortInfoDTO    | Silinen uç birime ait veri transfer modeli                         |\n| WAN_PORT_UPDATED      | WanPortInfoDTO    | Güncellenen uç birime ait veri transfer modeli                     |\n| ROUTER_ADDED          | SdnipRouterDTO    | Eklenen internete çıkış birime ait veri transfer modeli            |\n| ROUTER_REMOVED        | SdnipRouterDTO    | Silinen internete çıkış birime ait veri transfer modeli            |\n| ROUTER_UPDATED        | SdnipRouterDTO    | Güncellenen internete çıkış birime ait veri transfer modeli        |\n| DOMAIN_INFO_UPDATED   | BaseDTO           | Değişiklik olan domainlere ait istek veri modeli                   |
    */
    value?: any;

}


export var TopologyEventDTODef:IModelDef = {
    meta: {
        className: 'TopologyEventDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        topologyId : { type: 'string' }, 

        type : { type: TOPOLOGYEVENTTYPEDef, required: true }, 

        value : { type: 'any' }

    }),
    toString:()=>{
        return 'TopologyEventDTO';
    }
};



