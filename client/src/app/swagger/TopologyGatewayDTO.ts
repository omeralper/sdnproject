//imports start TopologyGatewayDTO



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Topoloji gateway transfer modeli.
*/
export interface TopologyGatewayDTO {
   
    /**
    * Gateway kullanılacak mı bilgisi.
    */
    gatewayRequired?: boolean;
   
    /**
    * Gateway ip değeri.
    */
    gatewayIp?: string;
   
    /**
    * Gateway subnet değeri.
    */
    gatewaySubnet?: string;

}


export var TopologyGatewayDTODef:IModelDef = {
    meta: {
        className: 'TopologyGatewayDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        gatewayRequired : { type: 'boolean' }, 

        gatewayIp : { type: 'string' }, 

        gatewaySubnet : { type: 'string' }

    },
    toString:()=>{
        return 'TopologyGatewayDTO';
    }
};



