//imports start HostNetworkDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface HostNetworkDTO extends BaseDTO {
   
    /**
    * Network ismi.
    */
    name: string;

}


export var HostNetworkDTODef:IModelDef = {
    meta: {
        className: 'HostNetworkDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'HostNetworkDTO';
    }
};



