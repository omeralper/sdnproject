//imports start ZoneObjectDTO

import {ZoneInfoListDTO,ZoneInfoListDTODef} from "./ZoneInfoListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Zone bilgilerinin tutuldugu yer
*/
export interface ZoneObjectDTO {
   
    /**
    * Zone bilgilerinin her biri icin tutuldugu dizi objesi
    */
    zoneInfoList?: ZoneInfoListDTO;

}


export var ZoneObjectDTODef:IModelDef = {
    meta: {
        className: 'ZoneObjectDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        zoneInfoList : { type: ZoneInfoListDTODef }

    },
    toString:()=>{
        return 'ZoneObjectDTO';
    }
};



