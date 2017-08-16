//imports start FixedIps

import {FixedIp,FixedIpDef} from "./FixedIp";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* FixedIps listesini tutan obje
*/
export interface FixedIps {
   
    /**
    * 
    */
    fixedIp?: Array<FixedIp>;

}


export var FixedIpsDef:IModelDef = {
    meta: {
        className: 'FixedIps',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        fixedIp : { type: 'Array' }

    },
    toString:()=>{
        return 'FixedIps';
    }
};



