//imports start VimVmStatusInfoDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimVmStatusInfoDTO extends BaseDTO {
   
    /**
    * Compute hostta bulunan VM in durumu
    */
    hostStatus?: string;
   
    /**
    * Mevcut VIM in id si
    */
    vimId?: string;
   
    /**
    * VM durumu
    */
    status?: string;

}


export var VimVmStatusInfoDTODef:IModelDef = {
    meta: {
        className: 'VimVmStatusInfoDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        hostStatus : { type: 'string' }, 

        vimId : { type: 'string' }, 

        status : { type: 'string' }

    }),
    toString:()=>{
        return 'VimVmStatusInfoDTO';
    }
};



