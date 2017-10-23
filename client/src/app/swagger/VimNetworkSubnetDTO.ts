//imports start VimNetworkSubnetDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimNetworkSubnetDTO extends BaseDTO {
   
    /**
    * 
    */
    name?: string;
   
    /**
    * 
    */
    networkId?: string;
   
    /**
    * 
    */
    cidr?: string;
   
    /**
    * 
    */
    gatewayIp?: string;
   
    /**
    * 
    */
    extId?: string;

}


export var VimNetworkSubnetDTODef:IModelDef = {
    meta: {
        className: 'VimNetworkSubnetDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string' }, 

        networkId : { type: 'string' }, 

        cidr : { type: 'string' }, 

        gatewayIp : { type: 'string' }, 

        extId : { type: 'string' }

    }),
    toString:()=>{
        return 'VimNetworkSubnetDTO';
    }
};



