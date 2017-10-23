//imports start MvtnEditStatusDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MVTNREQUESTSTATUS,MVTNREQUESTSTATUSDef} from "./MVTNREQUESTSTATUS";
import {MVTNTYPE,MVTNTYPEDef} from "./MVTNTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnEditStatusDTO extends BaseDTO {
   
    /**
    * İstek talebinin type bilgisi
    */
    mvtnType?: MVTNTYPE;
   
    /**
    * İstek talebinin statü bilgisi
    */
    status?: MVTNREQUESTSTATUS;

}


export var MvtnEditStatusDTODef:IModelDef = {
    meta: {
        className: 'MvtnEditStatusDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        mvtnType : { type: MVTNTYPEDef }, 

        status : { type: MVTNREQUESTSTATUSDef }

    }),
    toString:()=>{
        return 'MvtnEditStatusDTO';
    }
};



