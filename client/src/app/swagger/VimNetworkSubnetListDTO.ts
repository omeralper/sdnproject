//imports start VimNetworkSubnetListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {VimNetworkSubnetDTO,VimNetworkSubnetDTODef} from "./VimNetworkSubnetDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimNetworkSubnetListDTO extends BaseListDTO {
   
    /**
    * VIM bilgilerinin her biri icin ayrı objelerinin tutuldugu yer
    */
    list: Array<VimNetworkSubnetDTO>;

}


export var VimNetworkSubnetListDTODef:IModelDef = {
    meta: {
        className: 'VimNetworkSubnetListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'VimNetworkSubnetListDTO';
    }
};



