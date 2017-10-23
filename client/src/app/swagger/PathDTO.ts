//imports start PathDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {LinkDTO,LinkDTODef} from "./LinkDTO";
import {PATHSTATE,PATHSTATEDef} from "./PATHSTATE";
import {PATHTYPE,PATHTYPEDef} from "./PATHTYPE";
import {TOPOLOGYTYPE,TOPOLOGYTYPEDef} from "./TOPOLOGYTYPE";
import {TRANSPORTPROTOCOL,TRANSPORTPROTOCOLDef} from "./TRANSPORTPROTOCOL";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PathDTO extends BaseDTO {
   
    /**
    * Sanal ağ için sanal ağ id'si ile doldurulmalıdır.
    */
    topologyId?: string;
   
    /**
    * Source hostun bağlı olduğu anahtarlayıcının ID değeri.
    */
    srcDeviceId?: string;
   
    /**
    * Source hosttaki protocol (TCP/UDP) port numarası
    */
    srcPort?: number;
   
    /**
    * Gecikme ölçüm paketinin gönderileceğini gösterir.
    */
    sendMeasurePacket?: boolean;
   
    /**
    * Patika tipi.
    */
    type?: PATHTYPE;
   
    /**
    * Patikanın güvenlik seviyesi.
    */
    securityLevel?: number;
   
    /**
    * Internet transport protokolü: TCP, UDP, vb
    */
    protocol?: TRANSPORTPROTOCOL;
   
    /**
    * Destination hosttaki protocol (TCP/UDP) port numarası
    */
    dstPort?: number;
   
    /**
    * Minimum/Granti edilen bant genişliği kısıtı için kullanılmaktadır.
    */
    bandwidthConstraint?: number;
   
    /**
    * Listelenmek istenen topolojilerin tipini belirtmek için kullanılır.
    */
    topologyType?: TOPOLOGYTYPE;
   
    /**
    * Monitor paketleri arasındaki zamanın saniye cinsinden değeri.
    */
    validatePathPacketInterval?: number;
   
    /**
    * Patikanın hangi application tarafından eklendiği Rest, CLI, OVSDB.
    */
    appId?: string;
   
    /**
    * Maksimum/İlave bant genişliği kısıtı için kullanılmaktadır.
    */
    maxBandwidthConstraint?: number;
   
    /**
    * Patika linki veri transfer modellerinin bulunduğu listedir.
    */
    links?: Array<LinkDTO>;
   
    /**
    * Patika durumu.
    */
    state?: PATHSTATE;
   
    /**
    * Source hostun ID değeri.
    */
    srcHostId?: string;
   
    /**
    * Destination hostun anahtarlayıcısına bağlı olduğu port numarası değeri.
    */
    dstPortNumber?: number;
   
    /**
    * Patikada route hopping işleminin durumunu gösteren alandır.\n- '0' değeri route hopping *YOK* anlamındadır.\n- Diğer değerler route hopping işleminin frekansını milisaniye cinsinden belirtir.
    */
    routeHopFrequency?: number;
   
    /**
    * Eğer patika intentse, intent key değeri.
    */
    intentKey?: string;
   
    /**
    * Monitor paket ortalama gecikmesi.
    */
    validatePathAvgDelay?: number;
   
    /**
    * Patikanın doğrulanıp doğrulanmayacağını gösteren değer.
    */
    validatePath?: boolean;
   
    /**
    * Patikanın önceliği.
    */
    priority?: number;
   
    /**
    * Destination hostun ID değeri.
    */
    dstHostId?: string;
   
    /**
    * Monitor paket sayısı.
    */
    validatePathPacketNo?: number;
   
    /**
    * Source hostun anahtarlayıcısına bağlı olduğu port numarası değeri.
    */
    srcPortNumber?: number;
   
    /**
    * Destination hostun bağlı olduğu anahtarlayıcının ID değeri.
    */
    dstDeviceId?: string;

}


export var PathDTODef:IModelDef = {
    meta: {
        className: 'PathDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        topologyId : { type: 'string' }, 

        srcDeviceId : { type: 'string' }, 

        srcPort : { type: 'number' }, 

        sendMeasurePacket : { type: 'boolean' }, 

        type : { type: PATHTYPEDef }, 

        securityLevel : { type: 'number' }, 

        protocol : { type: TRANSPORTPROTOCOLDef }, 

        dstPort : { type: 'number' }, 

        bandwidthConstraint : { type: 'number' }, 

        topologyType : { type: TOPOLOGYTYPEDef }, 

        validatePathPacketInterval : { type: 'number' }, 

        appId : { type: 'string' }, 

        maxBandwidthConstraint : { type: 'number' }, 

        links : { type: 'Array' }, 

        state : { type: PATHSTATEDef }, 

        srcHostId : { type: 'string' }, 

        dstPortNumber : { type: 'number' }, 

        routeHopFrequency : { type: 'number' }, 

        intentKey : { type: 'string' }, 

        validatePathAvgDelay : { type: 'number' }, 

        validatePath : { type: 'boolean' }, 

        priority : { type: 'number' }, 

        dstHostId : { type: 'string' }, 

        validatePathPacketNo : { type: 'number' }, 

        srcPortNumber : { type: 'number' }, 

        dstDeviceId : { type: 'string' }

    }),
    toString:()=>{
        return 'PathDTO';
    }
};



