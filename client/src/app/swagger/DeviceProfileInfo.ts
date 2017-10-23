//imports start DeviceProfileInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Cihaz profil bilgilerinin bulunduğu veri yapısı
*/
export interface DeviceProfileInfo {
   
    /**
    * Device'a ait profile id bilgisi.
    */
    profileId?: string;
   
    /**
    * Device'a ait profile ismi.
    */
    profileName?: string;

}


export var DeviceProfileInfoDef:IModelDef = {
    meta: {
        className: 'DeviceProfileInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        profileId : { type: 'string' }, 

        profileName : { type: 'string' }

    },
    toString:()=>{
        return 'DeviceProfileInfo';
    }
};



