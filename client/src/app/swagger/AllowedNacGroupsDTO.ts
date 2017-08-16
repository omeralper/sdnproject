//imports start AllowedNacGroupsDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {NacGroupDTO,NacGroupDTODef} from "./NacGroupDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AllowedNacGroupsDTO extends BaseDTO {
   
    /**
    * İzinli NAC Grupları
    */
    allowedNacGroups?: Array<NacGroupDTO>;
   
    /**
    * Tüm NAC gruplarına izin ver
    */
    allowAll: boolean;

}


export var AllowedNacGroupsDTODef:IModelDef = {
    meta: {
        className: 'AllowedNacGroupsDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        allowedNacGroups : { type: 'Array' }, 

        allowAll : { type: 'boolean', required: true }

    }),
    toString:()=>{
        return 'AllowedNacGroupsDTO';
    }
};



