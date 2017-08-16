//imports start InterfaceAttachment

import {FixedIps,FixedIpsDef} from "./FixedIps";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* VIM uzerinde bulunan arayuz bilgileri(Ex:OpenStack)
*/
export interface InterfaceAttachment {
   fixedIps?: FixedIps;
   
    /**
    * bulundugu mac adresi
    */
    macAddress?: string;
   
    /**
    * net numarası
    */
    netId?: string;
   
    /**
    * erisilecegi port
    */
    portId?: string;
   
    /**
    * mevcut durumda bulundugu port'un durumu
    */
    portState?: string;

}


export var InterfaceAttachmentDef:IModelDef = {
    meta: {
        className: 'InterfaceAttachment',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        fixedIps : { type: FixedIpsDef }, 

        macAddress : { type: 'string' }, 

        netId : { type: 'string' }, 

        portId : { type: 'string' }, 

        portState : { type: 'string' }

    },
    toString:()=>{
        return 'InterfaceAttachment';
    }
};



