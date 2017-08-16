//imports start WanPortInfoListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {WanPortInfoDTO,WanPortInfoDTODef} from "./WanPortInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface WanPortInfoListDTO extends BaseListDTO {
   
    /**
    * Geniş alan ağlarının gerişlerinin bilgi profillerinin listesi.
    */
    list?: Array<WanPortInfoDTO>;

}


export var WanPortInfoListDTODef:IModelDef = {
    meta: {
        className: 'WanPortInfoListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array' }

    }),
    toString:()=>{
        return 'WanPortInfoListDTO';
    }
};



