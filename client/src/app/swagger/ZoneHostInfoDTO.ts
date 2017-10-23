//imports start ZoneHostInfoDTO



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Her bir zone bilgisini tutan veri
*/
export interface ZoneHostInfoDTO {
   
    /**
    * Bulundugu yer
    */
    hostName?: string;
   
    /**
    * ip adresi
    */
    ipAddress?: string;
   
    /**
    * uygunlugu
    */
    available?: boolean;
   
    /**
    * aktifligi
    */
    active?: boolean;
   
    /**
    * en son guncellendigi zaman
    */
    updateAt?: string;
   
    /**
    * hypervisor listesiden gelen deger
    */
    zoneHostId?: number;

}


export var ZoneHostInfoDTODef:IModelDef = {
    meta: {
        className: 'ZoneHostInfoDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        hostName : { type: 'string' }, 

        ipAddress : { type: 'string' }, 

        available : { type: 'boolean' }, 

        active : { type: 'boolean' }, 

        updateAt : { type: 'string' }, 

        zoneHostId : { type: 'number' }

    },
    toString:()=>{
        return 'ZoneHostInfoDTO';
    }
};



