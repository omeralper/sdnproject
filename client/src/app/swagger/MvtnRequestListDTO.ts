//imports start MvtnRequestListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {MvtnRequestDTO,MvtnRequestDTODef} from "./MvtnRequestDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnRequestListDTO extends BaseListDTO {
   
    /**
    * Sanal ağ taleplerinin listesi.
    */
    list?: Array<MvtnRequestDTO>;

}


export var MvtnRequestListDTODef:IModelDef = {
    meta: {
        className: 'MvtnRequestListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array' }

    }),
    toString:()=>{
        return 'MvtnRequestListDTO';
    }
};



