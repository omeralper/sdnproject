//imports start VimInstanceBase



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* VIM instance tem.
*/
export interface VimInstanceBase {
   id: string;
   name: string;
   type: string;

}


export var VimInstanceBaseDef:IModelDef = {
    meta: {
        className: 'VimInstanceBase',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        id : { type: 'string', required: true }, 

        name : { type: 'string', required: true }, 

        type : { type: 'string', required: true }

    },
    toString:()=>{
        return 'VimInstanceBase';
    }
};



