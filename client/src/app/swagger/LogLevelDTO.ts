//imports start LogLevelDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {LOGLEVEL,LOGLEVELDef} from "./LOGLEVEL";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LogLevelDTO extends BaseDTO {
   
    /**
    * Günlük seviyesi.
    */
    level: LOGLEVEL;
   
    /**
    * Günlük verileri dosyasının adı
    */
    displayName: string;

}


export var LogLevelDTODef:IModelDef = {
    meta: {
        className: 'LogLevelDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        level : { type: LOGLEVELDef, required: true }, 

        displayName : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'LogLevelDTO';
    }
};



