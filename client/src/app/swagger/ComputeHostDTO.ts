//imports start ComputeHostDTO

import {ComputeHostListDTO,ComputeHostListDTODef} from "./ComputeHostListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Compute bilgilerinin listesi tutmak icin kullanılacak veri modeli
*/
export interface ComputeHostDTO {
   computeHostList: ComputeHostListDTO;
   
    /**
    * Sunucudan dönen bütün veriyi saglar
    */
    rawResponseData: string;

}


export var ComputeHostDTODef:IModelDef = {
    meta: {
        className: 'ComputeHostDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        computeHostList : { type: ComputeHostListDTODef, required: true }, 

        rawResponseData : { type: 'string', required: true }

    },
    toString:()=>{
        return 'ComputeHostDTO';
    }
};



