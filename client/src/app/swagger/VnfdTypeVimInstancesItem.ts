//imports start VnfdTypeVimInstancesItem

import {VimInstanceBase,VimInstanceBaseDef} from "./VimInstanceBase";
import {Vnfd,VnfdDef} from "./Vnfd";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Sanal ağ fonksiyon tipi ve çalışacak Vim bilgisidir.
*/
export interface VnfdTypeVimInstancesItem {
   vnfd: Vnfd;
   vimInstances: Array<VimInstanceBase>;

}


export var VnfdTypeVimInstancesItemDef:IModelDef = {
    meta: {
        className: 'VnfdTypeVimInstancesItem',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        vnfd : { type: VnfdDef, required: true }, 

        vimInstances : { type: 'Array', required: true }

    },
    toString:()=>{
        return 'VnfdTypeVimInstancesItem';
    }
};



