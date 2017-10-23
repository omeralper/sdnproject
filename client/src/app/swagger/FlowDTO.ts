//imports start FlowDTO

import {AddressInfo,AddressInfoDef} from "./AddressInfo";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {FLOWSTATE,FLOWSTATEDef} from "./FLOWSTATE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowDTO extends BaseDTO {
   
    /**
    * Akış'a atanmış çerez değeri
    */
    cookie?: number;
   
    /**
    * Bu süre bitiminde akış mutlaka silinecektir (Şu an ONOS'da yok)
    */
    hardTimeout?: number;
   
    /**
    * Akışın hangi gruba ait olduğu. Cihaz içindeki grup tablo no'su.
    */
    groupId?: number;
   
    /**
    * Akışın önceliği.
    */
    priority?: number;
   
    /**
    * Akışın kurulduğu kontrolcünün portu
    */
    controllerPort?: string;
   
    /**
    * Akışın tanımlandığı anahtarlayıcının ID değeri.
    */
    deviceId?: string;
   
    /**
    * Akış cihaza eklendiğinden beri ne kadar süre geçmiş
    */
    life?: number;
   
    /**
    * Akışa eşleşen paket sayısı
    */
    packets?: number;
   
    /**
    * Aktif olduğu son zaman. Unix timestamp?
    */
    lastSeen?: number;
   
    /**
    * Hata tipi (ENUM olması gerekmez mi?)
    */
    errType?: number;
   
    /**
    * Akışa eşleşme olduğunda yapılacaklar işlemler listesi.
    */
    instructionList?: Array<string>;
   
    /**
    * Akışın eşleşme listesi (örneğin in_port = 2, eth_src = xx)
    */
    matchList?: Array<string>;
   
    /**
    * Akışa eşleşen byte sayısı
    */
    bytes?: number;
   
    /**
    * Hata kodu
    */
    errCode?: number;
   
    /**
    * Akışın hangi application tarafından eklendiği Rest, CLI, OVSDB.
    */
    appId?: number;
   
    /**
    * Bu süre içinde paket eşleşmesi olmadığı takdirde akış silinecektir (Şu an ONOS'da yok)
    */
    idleTimeout?: number;
   
    /**
    * Akışın kurulduğu kontrolcünün ismi
    */
    controllerName?: string;
   
    /**
    * Akışın bulunduğu cihaz içindeki akış tablo no'su.
    */
    tableId?: number;
   state?: FLOWSTATE;
   
    /**
    * Akışın kurulduğu kontrolcünün adresi
    */
    controllerAddress?: AddressInfo;

}


export var FlowDTODef:IModelDef = {
    meta: {
        className: 'FlowDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        cookie : { type: 'number' }, 

        hardTimeout : { type: 'number' }, 

        groupId : { type: 'number' }, 

        priority : { type: 'number' }, 

        controllerPort : { type: 'string' }, 

        deviceId : { type: 'string' }, 

        life : { type: 'number' }, 

        packets : { type: 'number' }, 

        lastSeen : { type: 'number' }, 

        errType : { type: 'number' }, 

        instructionList : { type: 'Array' }, 

        matchList : { type: 'Array' }, 

        bytes : { type: 'number' }, 

        errCode : { type: 'number' }, 

        appId : { type: 'number' }, 

        idleTimeout : { type: 'number' }, 

        controllerName : { type: 'string' }, 

        tableId : { type: 'number' }, 

        state : { type: FLOWSTATEDef }, 

        controllerAddress : { type: AddressInfoDef }

    }),
    toString:()=>{
        return 'FlowDTO';
    }
};



