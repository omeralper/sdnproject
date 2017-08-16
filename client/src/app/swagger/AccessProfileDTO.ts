//imports start AccessProfileDTO

import {AccessPolicyDTO,AccessPolicyDTODef} from "./AccessPolicyDTO";
import {AllowedNacGroupsDTO,AllowedNacGroupsDTODef} from "./AllowedNacGroupsDTO";
import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AccessProfileDTO extends BaseDTO {
   
    /**
    * Politikaya ait profile ismi.
    */
    profileName?: string;
   
    /**
    * İzinli nac grubu listesi
    */
    allowedNacGroups?: AllowedNacGroupsDTO;
   
    /**
    * Profil içerisindeki erişim politika listesi.
    */
    accessPolicies?: Array<AccessPolicyDTO>;
   
    /**
    * Profil öncelik seviyesi.
    */
    profilePriority?: number;
   
    /**
    * Sanal ağ ismi.
    */
    mvtnName?: string;
   
    /**
    * Sanal ağ idsi
    */
    mvtnId?: number;

}


export var AccessProfileDTODef:IModelDef = {
    meta: {
        className: 'AccessProfileDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        profileName : { type: 'string' }, 

        allowedNacGroups : { type: AllowedNacGroupsDTODef }, 

        accessPolicies : { type: 'Array' }, 

        profilePriority : { type: 'number' }, 

        mvtnName : { type: 'string' }, 

        mvtnId : { type: 'number' }

    }),
    toString:()=>{
        return 'AccessProfileDTO';
    }
};



