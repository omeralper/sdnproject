//imports start VnfComputeZonePair



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* 
*/
export interface VnfComputeZonePair {
   
    /**
    * 
    */
    zone: string;
   
    /**
    * 
    */
    computeHostName: string;
   
    /**
    * 
    */
    vimInstanceName?: string;

}


export var VnfComputeZonePairDef:IModelDef = {
    meta: {
        className: 'VnfComputeZonePair',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        zone : { type: 'string', required: true }, 

        computeHostName : { type: 'string', required: true }, 

        vimInstanceName : { type: 'string' }

    },
    toString:()=>{
        return 'VnfComputeZonePair';
    }
};



