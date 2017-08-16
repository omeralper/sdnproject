//imports start LogDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {LOGLEVEL,LOGLEVELDef} from "./LOGLEVEL";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LogDTO extends BaseDTO {
   
    /**
    * Günlüğe eklenecek ekstra veriler.
    */
    extras?: any;
   
    /**
    * Günlük’e eklenecek mesaj.
    */
    message: string;
   
    /**
    * Günlük seviyesi.
    */
    level: LOGLEVEL;

}


export var LogDTODef:IModelDef = {
    meta: {
        className: 'LogDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        extras : { type: 'any' }, 

        message : { type: 'string', required: true }, 

        level : { type: LOGLEVELDef, required: true }

    }),
    toString:()=>{
        return 'LogDTO';
    }
};



