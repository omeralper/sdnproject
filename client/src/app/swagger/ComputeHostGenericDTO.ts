//imports start ComputeHostGenericDTO

import {ComputeHostInfoDTO,ComputeHostInfoDTODef} from "./ComputeHostInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Compute bilgilerinin listesi tutmak icin kullanılacak veri modeli
*/
export interface ComputeHostGenericDTO {
   computeHostInfo: ComputeHostInfoDTO;
   
    /**
    * Sunucudan dönen bütün veriyi saglar
    */
    rawResponseData: string;

}


export var ComputeHostGenericDTODef:IModelDef = {
    meta: {
        className: 'ComputeHostGenericDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        computeHostInfo : { type: ComputeHostInfoDTODef, required: true }, 

        rawResponseData : { type: 'string', required: true }

    },
    toString:()=>{
        return 'ComputeHostGenericDTO';
    }
};



