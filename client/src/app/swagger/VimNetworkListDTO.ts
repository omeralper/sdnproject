//imports start VimNetworkListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {VimNetworkDTO,VimNetworkDTODef} from "./VimNetworkDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimNetworkListDTO extends BaseListDTO {
   
    /**
    * 
    */
    list: Array<VimNetworkDTO>;

}


export var VimNetworkListDTODef:IModelDef = {
    meta: {
        className: 'VimNetworkListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'VimNetworkListDTO';
    }
};



