//imports start VnfdDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {VNFDTYPE,VNFDTYPEDef} from "./VNFDTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfdDTO extends BaseDTO {
   
    /**
    * Vnfd id'si
    */
    vnfdId?: string;
   
    /**
    * Vnfd metadata.
    */
    metaData?: string;
   
    /**
    * Vnfd adı.
    */
    vnfdName?: string;
   
    /**
    * Vnfd tipi
    */
    vnfdType?: VNFDTYPE;

}


export var VnfdDTODef:IModelDef = {
    meta: {
        className: 'VnfdDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        vnfdId : { type: 'string' }, 

        metaData : { type: 'string' }, 

        vnfdName : { type: 'string' }, 

        vnfdType : { type: VNFDTYPEDef }

    }),
    toString:()=>{
        return 'VnfdDTO';
    }
};



