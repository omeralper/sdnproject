//imports start VNFRSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Vnfr durum bilgisi
*/
export enum VNFRSTATUS {
    ACTIVE = <any>'ACTIVE', 
    FAILED = <any>'FAILED', 
    INACTIVE = <any>'INACTIVE'

}

export var VNFRSTATUSDef:IModelDef = {
    meta: {
        className: 'VNFRSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACTIVE : 1, 
    FAILED : 2, 
    INACTIVE : 3

    },
    toString:()=>{
        return 'VNFRSTATUS';
    }
}

