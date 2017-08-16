//imports start AddressInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Cihaz ağ adreslerinin bulunduğu veri yapısı.
*/
export interface AddressInfo {
   
    /**
    * MAC adresi.
    */
    mac?: string;
   
    /**
    * IPv4 adresi.
    */
    ipv4?: string;
   
    /**
    * IPv6 adresi.
    */
    ipv6?: string;

}


export var AddressInfoDef:IModelDef = {
    meta: {
        className: 'AddressInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        mac : { type: 'string' }, 

        ipv4 : { type: 'string' }, 

        ipv6 : { type: 'string' }

    },
    toString:()=>{
        return 'AddressInfo';
    }
};



