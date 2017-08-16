//imports start SwitchDTO

import {AddressInfo,AddressInfoDef} from "./AddressInfo";
import {AlarmInfo,AlarmInfoDef} from "./AlarmInfo";
import {BandwidthInfo,BandwidthInfoDef} from "./BandwidthInfo";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CONNECTIONMODE,CONNECTIONMODEDef} from "./CONNECTIONMODE";
import {DeviceInfo,DeviceInfoDef} from "./DeviceInfo";
import {DeviceProfileInfo,DeviceProfileInfoDef} from "./DeviceProfileInfo";
import {LocationInfo,LocationInfoDef} from "./LocationInfo";
import {MvtnPortInfo,MvtnPortInfoDef} from "./MvtnPortInfo";
import {OFFLINEMODE,OFFLINEMODEDef} from "./OFFLINEMODE";
import {PortInfo,PortInfoDef} from "./PortInfo";
import {SECURITYMODE,SECURITYMODEDef} from "./SECURITYMODE";
import {SWITCHMODE,SWITCHMODEDef} from "./SWITCHMODE";
import {SWITCHSTATUS,SWITCHSTATUSDef} from "./SWITCHSTATUS";
import {StatsDetail,StatsDetailDef} from "./StatsDetail";
import {SupportInfo,SupportInfoDef} from "./SupportInfo";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SwitchDTO extends BaseDTO {
   
    /**
    * Anahtarlayıcı veri katmanı için tanımlanacak değer (00:00:00:00:00:00:00:03 gibi)
    */
    datapathId: string;
   
    /**
    * Password for Netconf device
    */
    netconfPassword?: string;
   
    /**
    * Anahtarlayıcının bağlı olduğu topoloji kimlik numarası
    */
    topologyId: string;
   
    /**
    * Anahtarlayıcı kullanılan sanal ağ için engelli mi? 'true' ise engellidir.
    */
    isBlockedForMvtn?: boolean;
   
    /**
    * Anahtarlayıcının atandığı ağ topolojilerinin ID değerleri.
    */
    networks?: Array<string>;
   
    /**
    * Username for Netconf device
    */
    netconfName?: string;
   
    /**
    * Bu anahtarlayıcının topoloji'de her zaman yer alması gerektiği gösteren değer. Eğer bu anahtarlayıcı topolojiden kalkarsa sistemde bir problem var demektir.
    */
    required?: boolean;
   
    /**
    * Anahtarlayıcının cihaz modu.
    */
    mode?: SWITCHMODE;
   
    /**
    * Anahtarlayıcının güvenlik seviyesi.
    */
    securityLevel: number;
   
    /**
    * Devicea ait profili belirten veri modeli.
    */
    deviceProfile?: DeviceProfileInfo;
   
    /**
    * Anahtarlayıcının meter desteği olup olmadığı bilgisini tutar.
    */
    isMeterEnabled?: boolean;
   
    /**
    * Anahtarlayıcının bağlantı türü
    */
    connectionMode?: CONNECTIONMODE;
   
    /**
    * ??
    */
    blocked?: boolean;
   
    /**
    * Anahtarlayıcı istatistikleri.
    */
    stats?: StatsDetail;
   
    /**
    * Anahtarlayıcı üzerindeki flow sayısı.
    */
    flows?: number;
   
    /**
    * Anahtarlayıcının desteklediği özellikler ve sürümlerinin bulunduğu veri yapısı.
    */
    supports: SupportInfo;
   
    /**
    * Anahtarlayıcının enerji tasarrufu moduna geçebilme durumunu belirtir.
    */
    powerSaverModeEnabled?: boolean;
   
    /**
    * Anahtarlayıcının tipini belirtir (OVSDB vs.)
    */
    deviceType: string;
   
    /**
    * Anahtarlayıcının bağlı olduğu kontrolcüleri belirtir
    */
    slaveControllerIds: Array<string>;
   
    /**
    * Anahtarlayıcının çevrimdışı modu
    */
    offlineMode?: OFFLINEMODE;
   
    /**
    * Anahtarlayıcıya ait kontrol adres bilgilerinin bulunduğu veri yapısı. (IPv4,IPv6,MAC)
    */
    address: AddressInfo;
   
    /**
    * Kontrolcü kimlik numarası.
    */
    controllerId?: string;
   
    /**
    * Anahtarlayıcının bant genişliği kullanım bilgileri.
    */
    bandwidth?: BandwidthInfo;
   
    /**
    * Anahtarlayıcının Watt birimi cinsinden harcadığı gücü belirtir.
    */
    powerUsage?: number;
   
    /**
    * Alarmlar
    */
    alarms?: Array<AlarmInfo>;
   
    /**
    * Anahtarlayıcının OpenStack desteği olup olmadığı bilgisini tutar.
    */
    isOpenStackSupported?: boolean;
   
    /**
    * Anahtarlayıcının kullanım oranı (0-100 aralığında bir string değeri).
    */
    utilization?: string;
   
    /**
    * Anahtarlayıcının port bilgileri.
    */
    portInfo: PortInfo;
   
    /**
    * Anahtarlayıcının güvenlik modu.
    */
    securityMode?: SECURITYMODE;
   
    /**
    * Anahtarlayıcının OpenStack bilgisini tutar.
    */
    openStackNodeName?: string;
   
    /**
    * Anahtarlayıcı cihaz hakkında bilgilerin tutulduğu veri yapısı.
    */
    deviceInfo: DeviceInfo;
   
    /**
    * Sanal aga ayrilan portlar
    */
    mvtnPortInfo?: MvtnPortInfo;
   
    /**
    * Anahtarlayıcının ssl desteği olup olmadığı bilgisini tutar.
    */
    isSSLSupported?: boolean;
   
    /**
    * Anahtarlayıcının Kontrol katmanında olup olmadığını söyler.
    */
    isControllerDevice?: boolean;
   
    /**
    * Switch's group name
    */
    groupName?: string;
   
    /**
    * Anahtarlayıcının aktif olduğu zaman.
    */
    activeSince?: Date;
   
    /**
    * ??
    */
    depth?: number;
   
    /**
    * Anahtarlayıcının Ovs için kullandığı portun adıdır
    */
    managementPort?: string;
   
    /**
    * Anahtarlayıcı'ya Uç Birim bağlanabilir mi? 'True' ise uç birim bağlanabilir.
    */
    isEdgeSwitch?: boolean;
   
    /**
    * Anahtarlayıcının toplam bant genişliğini belirtir.
    */
    totalBandwidth?: string;
   
    /**
    * Anahtarlayıcının adı.
    */
    name?: string;
   
    /**
    * Anahtarlayıcının lokasyon bilgisi bu alanda tutlacaktır.
    */
    location?: LocationInfo;
   
    /**
    * ??
    */
    colorCode?: string;
   
    /**
    * Is dpdk enabled ?
    */
    dpdk?: boolean;
   
    /**
    * Anahtarlayıcının sağlık durumu.
    */
    status: SWITCHSTATUS;

}


export var SwitchDTODef:IModelDef = {
    meta: {
        className: 'SwitchDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        datapathId : { type: 'string', required: true }, 

        netconfPassword : { type: 'string' }, 

        topologyId : { type: 'string', required: true }, 

        isBlockedForMvtn : { type: 'boolean' }, 

        networks : { type: 'Array' }, 

        netconfName : { type: 'string' }, 

        required : { type: 'boolean' }, 

        mode : { type: SWITCHMODEDef }, 

        securityLevel : { type: 'number', required: true }, 

        deviceProfile : { type: DeviceProfileInfoDef }, 

        isMeterEnabled : { type: 'boolean' }, 

        connectionMode : { type: CONNECTIONMODEDef }, 

        blocked : { type: 'boolean' }, 

        stats : { type: StatsDetailDef }, 

        flows : { type: 'number' }, 

        supports : { type: SupportInfoDef, required: true }, 

        powerSaverModeEnabled : { type: 'boolean' }, 

        deviceType : { type: 'string', required: true }, 

        slaveControllerIds : { type: 'Array', required: true }, 

        offlineMode : { type: OFFLINEMODEDef }, 

        address : { type: AddressInfoDef, required: true }, 

        controllerId : { type: 'string' }, 

        bandwidth : { type: BandwidthInfoDef }, 

        powerUsage : { type: 'number' }, 

        alarms : { type: 'Array' }, 

        isOpenStackSupported : { type: 'boolean' }, 

        utilization : { type: 'string' }, 

        portInfo : { type: PortInfoDef, required: true }, 

        securityMode : { type: SECURITYMODEDef }, 

        openStackNodeName : { type: 'string' }, 

        deviceInfo : { type: DeviceInfoDef, required: true }, 

        mvtnPortInfo : { type: MvtnPortInfoDef }, 

        isSSLSupported : { type: 'boolean' }, 

        isControllerDevice : { type: 'boolean' }, 

        groupName : { type: 'string' }, 

        activeSince : { type: 'Date' }, 

        depth : { type: 'number' }, 

        managementPort : { type: 'string' }, 

        isEdgeSwitch : { type: 'boolean' }, 

        totalBandwidth : { type: 'string' }, 

        name : { type: 'string' }, 

        location : { type: LocationInfoDef }, 

        colorCode : { type: 'string' }, 

        dpdk : { type: 'boolean' }, 

        status : { type: SWITCHSTATUSDef, required: true }

    }),
    toString:()=>{
        return 'SwitchDTO';
    }
};



