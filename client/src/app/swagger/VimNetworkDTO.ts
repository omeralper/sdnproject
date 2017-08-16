//imports start VimNetworkDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {VimNetworkSubnetListDTO,VimNetworkSubnetListDTODef} from "./VimNetworkSubnetListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimNetworkDTO extends BaseDTO {
   
    /**
    * 
    */
    name?: string;
   external?: string;
   
    /**
    * 
    */
    subnetList?: VimNetworkSubnetListDTO;

}


export var VimNetworkDTODef:IModelDef = {
    meta: {
        className: 'VimNetworkDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string' }, 

        external : { type: 'string' }, 

        subnetList : { type: VimNetworkSubnetListDTODef }

    }),
    toString:()=>{
        return 'VimNetworkDTO';
    }
};



