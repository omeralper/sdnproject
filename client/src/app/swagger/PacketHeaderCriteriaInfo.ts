//imports start PacketHeaderCriteriaInfo

import {CommonHeaderCriteriaInfo,CommonHeaderCriteriaInfoDef} from "./CommonHeaderCriteriaInfo";
import {ETHTYPE,ETHTYPEDef} from "./ETHTYPE";
import {EndUserApplicationDTO,EndUserApplicationDTODef} from "./EndUserApplicationDTO";
import {InportsInfo,InportsInfoDef} from "./InportsInfo";
import {IpLocationDTO,IpLocationDTODef} from "./IpLocationDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Paket eşleşme bilgilerini içeren veri modeli
*/
export interface PacketHeaderCriteriaInfo {
   
    /**
    * Eşleştirme işlemi yapılacak kaynak/hedef mac adresleri.
    */
    macAddresses?: CommonHeaderCriteriaInfo;
   
    /**
    * Eşleştirme işlemi yapılacak kaynak/hedef ip adresleri.
    */
    ipAddressess?: CommonHeaderCriteriaInfo;
   
    /**
    * Eşleştirme işlemi yapılacak kaynak/hedef port aralıkları bilgisi.
    */
    portRanges?: CommonHeaderCriteriaInfo;
   
    /**
    * Eşleştirme işlemi yapılacak son kullanıcı uygulaması bilgileri.
    */
    endUserApplications?: Array<EndUserApplicationDTO>;
   
    /**
    * Eşleştirme işlemi yapılacak sanal ağ id bilgisi.
    */
    vtnIds?: Array<string>;
   
    /**
    * Eşleştirme işlemi yapılacak eth protokol tipi bilgisi.
    */
    ethTypes?: ETHTYPE;
   
    /**
    * Eşleştirme işlemi yapılacak paket protokol bilgileri.
    */
    protocols?: Array<string>;
   
    /**
    * Eşleştirme işlemi yapılacak VLAN etiketleri bilgisi
    */
    vlanTags?: Array<string>;
   
    /**
    * Eşleştirme işlemi yapılacak MPLS etiketleri bilgisi
    */
    mplsTags?: Array<string>;
   
    /**
    * Eşleştirme işlemi yapılacak in port bilgileri
    */
    inPorts?: Array<InportsInfo>;
   
    /**
    * Eşleştirme işlemi yapılacak lokasyon tabanlı ip bilgileri
    */
    srcIpLocations?: Array<IpLocationDTO>;
   
    /**
    * Eşleştirme işlemi yapılacak lokasyon tabanlı hedef ip bilgileri
    */
    destIpLocations?: Array<IpLocationDTO>;

}


export var PacketHeaderCriteriaInfoDef:IModelDef = {
    meta: {
        className: 'PacketHeaderCriteriaInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        macAddresses : { type: CommonHeaderCriteriaInfoDef }, 

        ipAddressess : { type: CommonHeaderCriteriaInfoDef }, 

        portRanges : { type: CommonHeaderCriteriaInfoDef }, 

        endUserApplications : { type: 'Array' }, 

        vtnIds : { type: 'Array' }, 

        ethTypes : { type: ETHTYPEDef }, 

        protocols : { type: 'Array' }, 

        vlanTags : { type: 'Array' }, 

        mplsTags : { type: 'Array' }, 

        inPorts : { type: 'Array' }, 

        srcIpLocations : { type: 'Array' }, 

        destIpLocations : { type: 'Array' }

    },
    toString:()=>{
        return 'PacketHeaderCriteriaInfo';
    }
};



