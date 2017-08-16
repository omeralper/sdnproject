//imports start WanDomainDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {WANDOMAINSTATUS,WANDOMAINSTATUSDef} from "./WANDOMAINSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanDomainDTO extends BaseDTO {
   
    /**
    * Alan adı
    */
    name: string;
   
    /**
    * merkezi kontrolcü yönetim adresi
    */
    centerAddress?: string;
   
    /**
    * Alan ID değeri
    */
    domainId: string;
   
    /**
    * Alan durumu
    */
    status?: WANDOMAINSTATUS;
   
    /**
    * yönetim adresi
    */
    ip?: string;

}


export var WanDomainDTODef:IModelDef = {
    meta: {
        className: 'WanDomainDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string', required: true }, 

        centerAddress : { type: 'string' }, 

        domainId : { type: 'string', required: true }, 

        status : { type: WANDOMAINSTATUSDef }, 

        ip : { type: 'string' }

    }),
    toString:()=>{
        return 'WanDomainDTO';
    }
};



