//imports start NeighborRelationDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SdnipRouterDTO,SdnipRouterDTODef} from "./SdnipRouterDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NeighborRelationDTO extends BaseDTO {
   
    /**
    * Bağlantıyı canlı tutma süresi
    */
    keepaliveInterval?: number;
   speaker: SdnipRouterDTO;
   
    /**
    * Anons peryodu
    */
    minimumAdvertisementInterval?: number;
   
    /**
    * Yeniden bağlantı peryodu
    */
    connectRetry?: number;
   
    /**
    * Yönlendirici komşularının bulunduğu listedir.
    */
    peerList: Array<SdnipRouterDTO>;
   
    /**
    * Bağlı kalma süresi
    */
    holdTime?: number;

}


export var NeighborRelationDTODef:IModelDef = {
    meta: {
        className: 'NeighborRelationDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        keepaliveInterval : { type: 'number' }, 

        speaker : { type: SdnipRouterDTODef, required: true }, 

        minimumAdvertisementInterval : { type: 'number' }, 

        connectRetry : { type: 'number' }, 

        peerList : { type: 'Array', required: true }, 

        holdTime : { type: 'number' }

    }),
    toString:()=>{
        return 'NeighborRelationDTO';
    }
};



