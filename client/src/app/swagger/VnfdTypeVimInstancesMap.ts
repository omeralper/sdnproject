//imports start VnfdTypeVimInstancesMap

import {VnfdTypeVimInstancesItem,VnfdTypeVimInstancesItemDef} from "./VnfdTypeVimInstancesItem";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Sanal ağ fonksiyon tanım tipinin çalışacan Vim lerle eşleme bilgisi.
*/
export interface VnfdTypeVimInstancesMap {
   vimInstances?: Array<VnfdTypeVimInstancesItem>;

}


export var VnfdTypeVimInstancesMapDef:IModelDef = {
    meta: {
        className: 'VnfdTypeVimInstancesMap',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        vimInstances : { type: 'Array' }

    },
    toString:()=>{
        return 'VnfdTypeVimInstancesMap';
    }
};



