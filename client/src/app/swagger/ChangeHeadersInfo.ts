//imports start ChangeHeadersInfo

import {AddressInfo,AddressInfoDef} from "./AddressInfo";
import {PopPushHeaderInfo,PopPushHeaderInfoDef} from "./PopPushHeaderInfo";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Aksiyon olarak değiştirilmesi istenen paket başlıkları
*/
export interface ChangeHeadersInfo {
   
    /**
    * Değiştirme işlemi yapılacak kaynak mac adresi bilgisi.
    */
    srcMac?: string;
   
    /**
    * Değiştirme işlemi yapılacak hedef mac adresi bilgisi.
    */
    dstMac?: string;
   
    /**
    * Değiştirme işlemi yapılacak kaynak ip adresi bilgisi.
    */
    srcIp?: AddressInfo;
   
    /**
    * Değiştirme işlemi yapılacak hedef ip adresi bilgisi.
    */
    dstIp?: AddressInfo;
   
    /**
    * Değiştirme işlemi yapılacak vlan id bilgisi.
    */
    vlanId?: PopPushHeaderInfo;
   
    /**
    * Değiştirme işlemi yapılacak port bilgisi.
    */
    portNumber?: number;
   
    /**
    * Değiştirme işlemi yapılacak dhcp mark değeri
    */
    dhcpMark?: number;

}


export var ChangeHeadersInfoDef:IModelDef = {
    meta: {
        className: 'ChangeHeadersInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        srcMac : { type: 'string' }, 

        dstMac : { type: 'string' }, 

        srcIp : { type: AddressInfoDef }, 

        dstIp : { type: AddressInfoDef }, 

        vlanId : { type: PopPushHeaderInfoDef }, 

        portNumber : { type: 'number' }, 

        dhcpMark : { type: 'number' }

    },
    toString:()=>{
        return 'ChangeHeadersInfo';
    }
};



