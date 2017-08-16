//imports start VersionListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {VersionInfo,VersionInfoDef} from "./VersionInfo";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VersionListDTO extends BaseListDTO {
   
    /**
    * Uygulama versiyon bilgilerinin bulunduğu listedir.
    */
    list: Array<VersionInfo>;

}


export var VersionListDTODef:IModelDef = {
    meta: {
        className: 'VersionListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'VersionListDTO';
    }
};



