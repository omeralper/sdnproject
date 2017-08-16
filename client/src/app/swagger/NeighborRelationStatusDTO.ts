//imports start NeighborRelationStatusDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {PEERSTATUSTYPE,PEERSTATUSTYPEDef} from "./PEERSTATUSTYPE";
import {SdnipRouterDTO,SdnipRouterDTODef} from "./SdnipRouterDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NeighborRelationStatusDTO extends BaseDTO {
   
    /**
    * Eş yönlendirici bağlantı durumu açıklaması
    */
    description?: string;
   peerStatus: PEERSTATUSTYPE;
   peer: SdnipRouterDTO;

}


export var NeighborRelationStatusDTODef:IModelDef = {
    meta: {
        className: 'NeighborRelationStatusDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        description : { type: 'string' }, 

        peerStatus : { type: PEERSTATUSTYPEDef, required: true }, 

        peer : { type: SdnipRouterDTODef, required: true }

    }),
    toString:()=>{
        return 'NeighborRelationStatusDTO';
    }
};



