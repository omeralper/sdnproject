//imports start AccessPolicyDTO

import {ACCESSACTIONTYPE,ACCESSACTIONTYPEDef} from "./ACCESSACTIONTYPE";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CommonHeaderCriteriaInfo,CommonHeaderCriteriaInfoDef} from "./CommonHeaderCriteriaInfo";
import {PacketHeaderCriteriaInfo,PacketHeaderCriteriaInfoDef} from "./PacketHeaderCriteriaInfo";
import {ScheduleCriteriaInfo,ScheduleCriteriaInfoDef} from "./ScheduleCriteriaInfo";
import {ServiceActionDTO,ServiceActionDTODef} from "./ServiceActionDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessPolicyDTO extends BaseDTO {
   
    /**
    * Politikanın oluşma zamanı.
    */
    creationTime?: Date;
   
    /**
    * Politika isim bilgisi.
    */
    policyName?: string;
   
    /**
    * Politkanın çalışma zamanını ayarlayan veri modeli.
    */
    schedulerCriteria?: ScheduleCriteriaInfo;
   
    /**
    * Eşleştirme işlemi yapılacak kaynak/hedef kullanıcı idleri.
    */
    userIds?: CommonHeaderCriteriaInfo;
   
    /**
    * Uygulanacak Hizmet Kalitesi politikası detayları.
    */
    serviceAction?: ServiceActionDTO;
   
    /**
    * Çakışan politika id değerleri listesi.
    */
    conflictedPolicyIds?: Array<string>;
   
    /**
    * Kriter sayısı
    */
    criteriaCount?: number;
   
    /**
    * Politikanın güncellenme zamanı.
    */
    updateTime?: Date;
   
    /**
    * Paket eşleşme bilgilerinin olduğu veri modeli.
    */
    packetHeaderCriteria?: PacketHeaderCriteriaInfo;
   
    /**
    * Politika öncelik seviyesi.
    */
    priority?: number;
   
    /**
    * Erişim izni olup olmadığını tutar.
    */
    accessPolicyAction?: ACCESSACTIONTYPE;

}


export var AccessPolicyDTODef:IModelDef = {
    meta: {
        className: 'AccessPolicyDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        creationTime : { type: 'Date' }, 

        policyName : { type: 'string' }, 

        schedulerCriteria : { type: ScheduleCriteriaInfoDef }, 

        userIds : { type: CommonHeaderCriteriaInfoDef }, 

        serviceAction : { type: ServiceActionDTODef }, 

        conflictedPolicyIds : { type: 'Array' }, 

        criteriaCount : { type: 'number' }, 

        updateTime : { type: 'Date' }, 

        packetHeaderCriteria : { type: PacketHeaderCriteriaInfoDef }, 

        priority : { type: 'number' }, 

        accessPolicyAction : { type: ACCESSACTIONTYPEDef }

    }),
    toString:()=>{
        return 'AccessPolicyDTO';
    }
};



