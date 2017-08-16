//imports start IpLocationListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {IpLocationDTO,IpLocationDTODef} from "./IpLocationDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface IpLocationListDTO extends BaseListDTO {
   
    /**
    * Lokasyon tabanlı IP istekleri veri yapısı.
    */
    list: Array<IpLocationDTO>;

}


export var IpLocationListDTODef:IModelDef = {
    meta: {
        className: 'IpLocationListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'IpLocationListDTO';
    }
};



