//imports start VnfInstancePlacementMap



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
    vnfId: string;
   
    /**
    * 
    */
    zone: string;
   
    /**
    * 
    */
    hostName: string;

}


export var VnfInstancePlacementMapDef:IModelDef = {
    meta: {
        className: 'VnfInstancePlacementMap',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        vnfId : { type: 'string', required: true }, 

        zone : { type: 'string', required: true }, 

        hostName : { type: 'string', required: true }

    },
    toString:()=>{
        return 'VnfInstancePlacementMap';
    }
};



