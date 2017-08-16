//imports start TopologyInfoDTO

import {AlarmInfo,AlarmInfoDef} from "./AlarmInfo";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MVTNTYPE,MVTNTYPEDef} from "./MVTNTYPE";
import {StatsDetail,StatsDetailDef} from "./StatsDetail";
import {TOPOLOGYSTATUS,TOPOLOGYSTATUSDef} from "./TOPOLOGYSTATUS";
import {TOPOLOGYTYPE,TOPOLOGYTYPEDef} from "./TOPOLOGYTYPE";
import {TopologyGatewayDTO,TopologyGatewayDTODef} from "./TopologyGatewayDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyInfoDTO extends BaseDTO {
   
    /**
    * Sanal ağı kullanabilecek maksimum kullanıcı sayısını gösterir
    */
    maximumNumberOfUser?: number;
   
    /**
    * Sanal ağın akışlarında kullanılacak vlan etiketi bilgisi
    */
    vlanTag?: number;
   
    /**
    * Sanal ağ linklerinin güvnlik seviyesini gösterir
    */
    linkSecurityLevel?: number;
   
    /**
    * Topoloji tipi.
    */
    type: TOPOLOGYTYPE;
   
    /**
    * Sanal ağ oluşturulurken kullanılacak topolojideki paket kaybı oranı
    */
    packetLossRate?: number;
   
    /**
    * Topoloji istatistikleri.
    */
    stats?: StatsDetail;
   macAddresses?: Array<string>;
   
    /**
    * Sanal ağ talep değiştirilebilirliğnini bilgisi.
    */
    mvtnType?: MVTNTYPE;
   dnsServers?: Array<string>;
   
    /**
    * DNS Sunucusu.
    */
    dnsServer?: string;
   
    /**
    * Bağlantının bant genişliği değeri.
    */
    bandwidth?: number;
   
    /**
    * Alarmlar
    */
    alarms?: Array<AlarmInfo>;
   
    /**
    * ??
    */
    weight?: number;
   portRanges?: Array<string>;
   
    /**
    * ??
    */
    maxDepth?: number;
   
    /**
    * Sanal ağ oluşturulurken kullanılacak topolojideki çakışma bilgisi
    */
    collision?: number;
   
    /**
    * Aktif olduğu zaman.
    */
    activeSince?: Date;
   ipAddressess?: Array<string>;
   
    /**
    * Sanal ağ oluşturulurken kullanılacak topolojideki gecikme miktarını gösterir
    */
    delay?: number;
   
    /**
    * Sanal ağ oluşturulurken kullanılacak topolojideki jitter miktarını gösterir
    */
    jitter?: number;
   
    /**
    * Sanal ağ switchlerinin güvenlik seviyesini gösterir
    */
    switchSecurityLevel?: number;
   
    /**
    * Topoloji adı.
    */
    name: string;
   
    /**
    * ??
    */
    elementCountPerDepth?: Array<number>;
   
    /**
    * Topoloji gateway bilgisi.
    */
    topologyGateway?: TopologyGatewayDTO;
   
    /**
    * Topoloji durumu.
    */
    status: TOPOLOGYSTATUS;

}


export var TopologyInfoDTODef:IModelDef = {
    meta: {
        className: 'TopologyInfoDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        maximumNumberOfUser : { type: 'number' }, 

        vlanTag : { type: 'number' }, 

        linkSecurityLevel : { type: 'number' }, 

        type : { type: TOPOLOGYTYPEDef, required: true }, 

        packetLossRate : { type: 'number' }, 

        stats : { type: StatsDetailDef }, 

        macAddresses : { type: 'Array' }, 

        mvtnType : { type: MVTNTYPEDef }, 

        dnsServers : { type: 'Array' }, 

        dnsServer : { type: 'string' }, 

        bandwidth : { type: 'number' }, 

        alarms : { type: 'Array' }, 

        weight : { type: 'number' }, 

        portRanges : { type: 'Array' }, 

        maxDepth : { type: 'number' }, 

        collision : { type: 'number' }, 

        activeSince : { type: 'Date' }, 

        ipAddressess : { type: 'Array' }, 

        delay : { type: 'number' }, 

        jitter : { type: 'number' }, 

        switchSecurityLevel : { type: 'number' }, 

        name : { type: 'string', required: true }, 

        elementCountPerDepth : { type: 'Array' }, 

        topologyGateway : { type: TopologyGatewayDTODef }, 

        status : { type: TOPOLOGYSTATUSDef, required: true }

    }),
    toString:()=>{
        return 'TopologyInfoDTO';
    }
};



