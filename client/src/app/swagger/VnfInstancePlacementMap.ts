//imports start VnfInstancePlacementMap

import {VnfComputeZonePair,VnfComputeZonePairDef} from "./VnfComputeZonePair";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* 
*/
export interface VnfInstancePlacementMap {
   
    /**
    * 
    */
    vnfName: string;
   
    /**
    * 
    */
    vnfComputeZonePair: Array<VnfComputeZonePair>;

}


export var VnfInstancePlacementMapDef:IModelDef = {
    meta: {
        className: 'VnfInstancePlacementMap',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        vnfName : { type: 'string', required: true }, 

        vnfComputeZonePair : { type: 'Array', required: true }

    },
    toString:()=>{
        return 'VnfInstancePlacementMap';
    }
};



