//imports start Vnfd



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Sanal ağ fonksiyon tipi.
*/
export interface Vnfd {
   id: string;
   name: string;

}


export var VnfdDef:IModelDef = {
    meta: {
        className: 'Vnfd',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string', required: true }, 

        name : { type: 'string', required: true }

    },
    toString:()=>{
        return 'Vnfd';
    }
};



