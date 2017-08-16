//imports start PathConstraintInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Patika kurulum isteği sırasında gönderilen constraint veri modeli.
*/
export interface PathConstraintInfo {
   
    /**
    * Link için gerekli bandwith değeridir.
    */
    availableBandwidth?: number;
   
    /**
    * Link için gerekli security değeridir.
    */
    securityLevel?: number;

}


export var PathConstraintInfoDef:IModelDef = {
    meta: {
        className: 'PathConstraintInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        availableBandwidth : { type: 'number' }, 

        securityLevel : { type: 'number' }

    },
    toString:()=>{
        return 'PathConstraintInfo';
    }
};



