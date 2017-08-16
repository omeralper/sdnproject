//imports start VirtualNetFunctionInstanceDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {InterfaceAttachments,InterfaceAttachmentsDef} from "./InterfaceAttachments";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionInstanceDTO extends BaseDTO {
   
    /**
    * 
    */
    vnfrVersion?: string;
   
    /**
    * 
    */
    vnfrId?: string;
   
    /**
    * Bulundugu server'ın id'si
    */
    vnfServerId?: string;
   
    /**
    * 
    */
    vnfdId?: string;
   interfaceAttachments?: InterfaceAttachments;
   
    /**
    * 
    */
    vmIp?: string;
   
    /**
    * 
    */
    vnfciHostname?: string;
   
    /**
    * 
    */
    computeHostName?: string;
   
    /**
    * Ham data
    */
    rawData?: string;
   
    /**
    * 
    */
    nsrId?: string;
   
    /**
    * 
    */
    vduId?: string;
   
    /**
    * CompuHost e baglı olan ip adresi
    */
    computeIpaddr?: string;
   
    /**
    * Bulundugu vim adı
    */
    vimInstanceName?: string;
   
    /**
    * 
    */
    vnfciId?: string;
   
    /**
    * Türü , (ex : server,client etc.)
    */
    vnfType?: string;
   
    /**
    * Hangi zone'da oldugunu belirtmek icin
    */
    zone?: string;
   
    /**
    * 
    */
    failOverDescription?: string;
   
    /**
    * 
    */
    nsdId?: string;
   
    /**
    * Aktif olup olmadıgını belirtmek icin
    */
    state?: string;
   
    /**
    * Bulundugu VIM yeri
    */
    vimInstanceId?: string;
   
    /**
    * Hangi projede bulundugu yer
    */
    projectId?: string;
   
    /**
    * 
    */
    computeHostId?: string;

}


export var VirtualNetFunctionInstanceDTODef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionInstanceDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        vnfrVersion : { type: 'string' }, 

        vnfrId : { type: 'string' }, 

        vnfServerId : { type: 'string' }, 

        vnfdId : { type: 'string' }, 

        interfaceAttachments : { type: InterfaceAttachmentsDef }, 

        vmIp : { type: 'string' }, 

        vnfciHostname : { type: 'string' }, 

        computeHostName : { type: 'string' }, 

        rawData : { type: 'string' }, 

        nsrId : { type: 'string' }, 

        vduId : { type: 'string' }, 

        computeIpaddr : { type: 'string' }, 

        vimInstanceName : { type: 'string' }, 

        vnfciId : { type: 'string' }, 

        vnfType : { type: 'string' }, 

        zone : { type: 'string' }, 

        failOverDescription : { type: 'string' }, 

        nsdId : { type: 'string' }, 

        state : { type: 'string' }, 

        vimInstanceId : { type: 'string' }, 

        projectId : { type: 'string' }, 

        computeHostId : { type: 'string' }

    }),
    toString:()=>{
        return 'VirtualNetFunctionInstanceDTO';
    }
};



