//imports start SdnipPolicyAssignmentDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SDNIPPOLICYTYPE,SDNIPPOLICYTYPEDef} from "./SDNIPPOLICYTYPE";
import {SDNIPRESOURCETYPE,SDNIPRESOURCETYPEDef} from "./SDNIPRESOURCETYPE";
import {SDNIPROUTEACTION,SDNIPROUTEACTIONDef} from "./SDNIPROUTEACTION";
import {SdnipPolicyListDTO,SdnipPolicyListDTODef} from "./SdnipPolicyListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipPolicyAssignmentDTO extends BaseDTO {
   
    /**
    * Politika listesine eşleşme olmadığında uygulanacak aksiyon
    */
    defaultRouteAction: SDNIPROUTEACTION;
   
    /**
    * Politikaların etkinlik alanı
    */
    resourceType: SDNIPRESOURCETYPE;
   
    /**
    * Politika etkinlik yönünü
    */
    policyType: SDNIPPOLICYTYPE;
   
    /**
    * politika listesi
    */
    policyList: SdnipPolicyListDTO;

}


export var SdnipPolicyAssignmentDTODef:IModelDef = {
    meta: {
        className: 'SdnipPolicyAssignmentDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        defaultRouteAction : { type: SDNIPROUTEACTIONDef, required: true }, 

        resourceType : { type: SDNIPRESOURCETYPEDef, required: true }, 

        policyType : { type: SDNIPPOLICYTYPEDef, required: true }, 

        policyList : { type: SdnipPolicyListDTODef, required: true }

    }),
    toString:()=>{
        return 'SdnipPolicyAssignmentDTO';
    }
};



