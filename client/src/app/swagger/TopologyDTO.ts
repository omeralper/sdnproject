//imports start TopologyDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {ControllerDTO,ControllerDTODef} from "./ControllerDTO";
import {DomainDTO,DomainDTODef} from "./DomainDTO";
import {HostDTO,HostDTODef} from "./HostDTO";
import {LinkDTO,LinkDTODef} from "./LinkDTO";
import {MVTNREQUESTSTATUS,MVTNREQUESTSTATUSDef} from "./MVTNREQUESTSTATUS";
import {NetworkDeviceDTO,NetworkDeviceDTODef} from "./NetworkDeviceDTO";
import {SdnipRouterDTO,SdnipRouterDTODef} from "./SdnipRouterDTO";
import {SwitchDTO,SwitchDTODef} from "./SwitchDTO";
import {TopologyInfoDTO,TopologyInfoDTODef} from "./TopologyInfoDTO";
import {WanPortInfoDTO,WanPortInfoDTODef} from "./WanPortInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyDTO extends BaseDTO {
   
    /**
    * Topolojideki uç birimlerinin listesi.
    */
    hosts?: Array<HostDTO>;
   
    /**
    * Topolojideki anahtarlayıcıların listesi.
    */
    switches?: Array<SwitchDTO>;
   
    /**
    * Topolojideki kontrolcülerin listesi.
    */
    controllers?: Array<ControllerDTO>;
   
    /**
    * Topolojideki domain listesi.
    */
    domains?: Array<DomainDTO>;
   
    /**
    * Topolojideki bağlantıların listesi.
    */
    links?: Array<LinkDTO>;
   
    /**
    * Topolojideki ağ cihazları listesi.
    */
    networkdevices?: Array<NetworkDeviceDTO>;
   
    /**
    * Topolojideki internet çıkışları listesi.
    */
    ports?: Array<WanPortInfoDTO>;
   
    /**
    * Topolojinin internete çıkış birimleri
    */
    routers?: Array<SdnipRouterDTO>;
   
    /**
    * Topolojinin eğer talep durumundaysa bulunduğu statü bilgisi
    */
    requestStatus?: MVTNREQUESTSTATUS;
   
    /**
    * Topoloji detaylarının bulunduğu veri yapısı.
    */
    info: TopologyInfoDTO;
   
    /**
    * Topoloji keşfini açıp kapatan enum değeri
    */
    isLldpDisabled?: boolean;

}


export var TopologyDTODef:IModelDef = {
    meta: {
        className: 'TopologyDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        hosts : { type: 'Array' }, 

        switches : { type: 'Array' }, 

        controllers : { type: 'Array' }, 

        domains : { type: 'Array' }, 

        links : { type: 'Array' }, 

        networkdevices : { type: 'Array' }, 

        ports : { type: 'Array' }, 

        routers : { type: 'Array' }, 

        requestStatus : { type: MVTNREQUESTSTATUSDef }, 

        info : { type: TopologyInfoDTODef, required: true }, 

        isLldpDisabled : { type: 'boolean' }

    }),
    toString:()=>{
        return 'TopologyDTO';
    }
};



