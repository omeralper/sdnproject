//imports start VirtualNetFunctionInstanceListRequest

import {GenericListRequest,GenericListRequestDef} from "./GenericListRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionInstanceListRequest extends GenericListRequest {
   
    /**
    * 
    */
    computeHostIp?: string;
   
    /**
    * 
    */
    vnfType?: string;
   
    /**
    * 
    */
    vnfServerId?: string;
   
    /**
    * 
    */
    vnfIp?: string;
   
    /**
    * 
    */
    zoneId?: string;
   
    /**
    * 
    */
    vnfciHostName?: string;
   
    /**
    * Bulundugu VIM yeri
    */
    vimInstanceId: string;
   
    /**
    * 
    */
    computeHostId?: string;

}


export var VirtualNetFunctionInstanceListRequestDef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionInstanceListRequest',
        parentClassName: 'GenericListRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericListRequestDef.fields,  {

        computeHostIp : { type: 'string' }, 

        vnfType : { type: 'string' }, 

        vnfServerId : { type: 'string' }, 

        vnfIp : { type: 'string' }, 

        zoneId : { type: 'string' }, 

        vnfciHostName : { type: 'string' }, 

        vimInstanceId : { type: 'string', required: true }, 

        computeHostId : { type: 'string' }

    }),
    toString:()=>{
        return 'VirtualNetFunctionInstanceListRequest';
    }
};



