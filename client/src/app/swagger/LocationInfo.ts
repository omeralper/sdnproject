//imports start LocationInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Lokasyon bilgilerinin tutulduğu veri yapısı.
*/
export interface LocationInfo {
   
    /**
    * X koordinatı. (Longitude).
    */
    x: string;
   
    /**
    * Y koordinatı. (Latitude).
    */
    y: string;

}


export var LocationInfoDef:IModelDef = {
    meta: {
        className: 'LocationInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        x : { type: 'string', required: true }, 

        y : { type: 'string', required: true }

    },
    toString:()=>{
        return 'LocationInfo';
    }
};



