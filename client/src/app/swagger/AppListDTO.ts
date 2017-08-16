//imports start AppListDTO

import {AppDTO,AppDTODef} from "./AppDTO";
import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AppListDTO extends BaseListDTO {
   
    /**
    * Uygulama veri transfer modellerinin bulunduğu listedir.
    */
    list: Array<AppDTO>;

}


export var AppListDTODef:IModelDef = {
    meta: {
        className: 'AppListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'AppListDTO';
    }
};



