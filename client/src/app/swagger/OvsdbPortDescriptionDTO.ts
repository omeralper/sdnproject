//imports start OvsdbPortDescriptionDTO

import {ONOSPORTTYPE,ONOSPORTTYPEDef} from "./ONOSPORTTYPE";
import {OvsdbPortNumberDTO,OvsdbPortNumberDTODef} from "./OvsdbPortNumberDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Portun genel bilgisini tutar
*/
export interface OvsdbPortDescriptionDTO {
   
    /**
    * Port tanımı
    */
    portNumber: OvsdbPortNumberDTO;
   
    /**
    * Portun aktif pasif bilgisini tutar
    */
    enabled: boolean;
   
    /**
    * Port tipini tutar
    */
    portType: ONOSPORTTYPE;
   
    /**
    * Port maksimum hızını tutar
    */
    portSpeed: number;

}


export var OvsdbPortDescriptionDTODef:IModelDef = {
    meta: {
        className: 'OvsdbPortDescriptionDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        portNumber : { type: OvsdbPortNumberDTODef, required: true }, 

        enabled : { type: 'boolean', required: true }, 

        portType : { type: ONOSPORTTYPEDef, required: true }, 

        portSpeed : { type: 'number', required: true }

    },
    toString:()=>{
        return 'OvsdbPortDescriptionDTO';
    }
};



