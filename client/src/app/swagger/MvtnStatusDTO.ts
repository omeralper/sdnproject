//imports start MvtnStatusDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MVTNSTATUS,MVTNSTATUSDef} from "./MVTNSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnStatusDTO extends BaseDTO {
   
    /**
    * Sanal ağın durum bilgisi.
    */
    mvtnStatus?: MVTNSTATUS;

}


export var MvtnStatusDTODef:IModelDef = {
    meta: {
        className: 'MvtnStatusDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        mvtnStatus : { type: MVTNSTATUSDef }

    }),
    toString:()=>{
        return 'MvtnStatusDTO';
    }
};



