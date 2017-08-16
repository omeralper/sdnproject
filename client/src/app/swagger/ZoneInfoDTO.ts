//imports start ZoneInfoDTO

import {ZoneHostInfoDTO,ZoneHostInfoDTODef} from "./ZoneHostInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* 
*/
export interface ZoneInfoDTO {
   
    /**
    * Zone adı
    */
    zoneName?: string;
   zoneHostList?: Array<ZoneHostInfoDTO>;

}


export var ZoneInfoDTODef:IModelDef = {
    meta: {
        className: 'ZoneInfoDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        zoneName : { type: 'string' }, 

        zoneHostList : { type: 'Array' }

    },
    toString:()=>{
        return 'ZoneInfoDTO';
    }
};



