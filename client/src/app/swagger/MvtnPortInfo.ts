//imports start MvtnPortInfo

import {PortDetail,PortDetailDef} from "./PortDetail";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Sanal ag talebinde hostlarin baglanacagi port bilgilerini tanimlayan veri modeli.
*/
export interface MvtnPortInfo {
   
    /**
    * Sanal ag icin ayirilacak port sayisi
    */
    portCount?: number;
   
    /**
    * Sanal ag icin ayirilacak port detaylari
    */
    portDetails?: Array<PortDetail>;

}


export var MvtnPortInfoDef:IModelDef = {
    meta: {
        className: 'MvtnPortInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        portCount : { type: 'number' }, 

        portDetails : { type: 'Array' }

    },
    toString:()=>{
        return 'MvtnPortInfo';
    }
};



