//imports start ServiceActionDTO

import {BWUNIT,BWUNITDef} from "./BWUNIT";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {ChangeHeadersInfo,ChangeHeadersInfoDef} from "./ChangeHeadersInfo";
import {FLOWBALANCECONSTRAINTTYPE,FLOWBALANCECONSTRAINTTYPEDef} from "./FLOWBALANCECONSTRAINTTYPE";
import {LINKTYPE,LINKTYPEDef} from "./LINKTYPE";
import {NTOPROUTE,NTOPROUTEDef} from "./NTOPROUTE";
import {RESERVEDPATH,RESERVEDPATHDef} from "./RESERVEDPATH";
import {RoutingServicesInfo,RoutingServicesInfoDef} from "./RoutingServicesInfo";
import {ServicePolicyClassDTO,ServicePolicyClassDTODef} from "./ServicePolicyClassDTO";
import {SfcTypeDTO,SfcTypeDTODef} from "./SfcTypeDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ServiceActionDTO extends BaseDTO {
   
    /**
    * Enerji kullanımı
    */
    energyConsumption?: number;
   
    /**
    * Kontrol Kanalı Kullanımı
    */
    useControlChannel?: boolean;
   
    /**
    * Politika isim bilgisi.
    */
    policyName?: string;
   
    /**
    * Patika içerisinde yer alması beklenen cihaz listesi.
    */
    includedDevices?: Array<string>;
   
    /**
    * Sanal Ağ ismi.
    */
    mvtnName?: string;
   
    /**
    * Sanal Ağ ID değeri
    */
    mvtnId?: number;
   
    /**
    * Politika öncelik seviyesi.
    */
    priority?: number;
   
    /**
    * Güvenlik seviyesi
    */
    securityLevel?: number;
   
    /**
    * Uygulanacak rotalama servisleri.
    */
    routingServices?: RoutingServicesInfo;
   
    /**
    * Patika rezervasyonu özelliği (reservedPath) açık ise patika rezervasyonu önceliğini belirtir.
    */
    reservedPathPriority?: number;
   
    /**
    * Patika içerisinde yer alması istenmeyen cihaz listesi.
    */
    excludedDevices?: Array<string>;
   
    /**
    * Çıkılabilecek maximum band genişliği
    */
    maxBandwidth?: number;
   
    /**
    * Patika rezervasyonu özelliğinin belirtildiği alandır.
    */
    reservedPath?: RESERVEDPATH;
   
    /**
    * NTOP rotalama durumunun beliritildiği alandır.
    */
    ntopRoute?: NTOPROUTE;
   
    /**
    * Akışın dengeli dağılması için kullanılacak constraint listesi
    */
    flowBalanceConstraintTypeList?: Array<FLOWBALANCECONSTRAINTTYPE>;
   
    /**
    * Patika için tercih edilecek link tipi
    */
    linkType?: LINKTYPE;
   
    /**
    * Değiştirilecek paket başlığı bilgileri.
    */
    changeHeaders?: ChangeHeadersInfo;
   
    /**
    * Düşük akış tanımı bulunan anahtarlayıcı kullan
    */
    useLowFlowSwitch?: boolean;
   
    /**
    * Uygulanacak sfc tip bilgisini alır.
    */
    sfcType?: SfcTypeDTO;
   
    /**
    * Min. HOP sayısı ile patiha kur
    */
    useMinHOP?: boolean;
   
    /**
    * Band genişliği birimi
    */
    maxBandwidthUnit?: BWUNIT;
   
    /**
    * Rotalama için kullanılacak servis class bilgileri
    */
    servicePolicyClass?: ServicePolicyClassDTO;

}


export var ServiceActionDTODef:IModelDef = {
    meta: {
        className: 'ServiceActionDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        energyConsumption : { type: 'number' }, 

        useControlChannel : { type: 'boolean' }, 

        policyName : { type: 'string' }, 

        includedDevices : { type: 'Array' }, 

        mvtnName : { type: 'string' }, 

        mvtnId : { type: 'number' }, 

        priority : { type: 'number' }, 

        securityLevel : { type: 'number' }, 

        routingServices : { type: RoutingServicesInfoDef }, 

        reservedPathPriority : { type: 'number' }, 

        excludedDevices : { type: 'Array' }, 

        maxBandwidth : { type: 'number' }, 

        reservedPath : { type: RESERVEDPATHDef }, 

        ntopRoute : { type: NTOPROUTEDef }, 

        flowBalanceConstraintTypeList : { type: 'Array' }, 

        linkType : { type: LINKTYPEDef }, 

        changeHeaders : { type: ChangeHeadersInfoDef }, 

        useLowFlowSwitch : { type: 'boolean' }, 

        sfcType : { type: SfcTypeDTODef }, 

        useMinHOP : { type: 'boolean' }, 

        maxBandwidthUnit : { type: BWUNITDef }, 

        servicePolicyClass : { type: ServicePolicyClassDTODef }

    }),
    toString:()=>{
        return 'ServiceActionDTO';
    }
};



