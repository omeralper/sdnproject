//imports start FixedIp



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* VNFR icin istenilen fixed ip bilgileri
*/
export interface FixedIp {
   
    /**
    * ip bilgisi
    */
    ipAddress?: string;
   
    /**
    * alt ag bilgileri
    */
    subnetId?: string;

}


export var FixedIpDef:IModelDef = {
    meta: {
        className: 'FixedIp',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        ipAddress : { type: 'string' }, 

        subnetId : { type: 'string' }

    },
    toString:()=>{
        return 'FixedIp';
    }
};



