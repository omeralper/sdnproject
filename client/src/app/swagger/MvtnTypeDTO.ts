//imports start MvtnTypeDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MVTNTYPE,MVTNTYPEDef} from "./MVTNTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnTypeDTO extends BaseDTO {
   
    /**
    * Sanal ağın tip bilgisi.
    */
    mvtnType?: MVTNTYPE;

}


export var MvtnTypeDTODef:IModelDef = {
    meta: {
        className: 'MvtnTypeDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        mvtnType : { type: MVTNTYPEDef }

    }),
    toString:()=>{
        return 'MvtnTypeDTO';
    }
};



