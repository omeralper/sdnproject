//imports start VnfMetadataMap

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {VnfMetadataMapArray,VnfMetadataMapArrayDef} from "./VnfMetadataMapArray";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfMetadataMap extends BaseListDTO {
   
    /**
    * 
    */
    vnfName: string;
   
    /**
    * Her bir VNF objesinin sahip oldugu bilgiler butunlugu
    */
    vnfMetadataMapArray: Array<VnfMetadataMapArray>;

}


export var VnfMetadataMapDef:IModelDef = {
    meta: {
        className: 'VnfMetadataMap',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        vnfName : { type: 'string', required: true }, 

        vnfMetadataMapArray : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'VnfMetadataMap';
    }
};



