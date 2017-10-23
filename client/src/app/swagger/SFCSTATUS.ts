//imports start SFCSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Sfc durum bilgisi
*/
export enum SFCSTATUS {
    ACTIVE = <any>'ACTIVE', 
    FAILED = <any>'FAILED', 
    INACTIVE = <any>'INACTIVE'

}

export var SFCSTATUSDef:IModelDef = {
    meta: {
        className: 'SFCSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACTIVE : 1, 
    FAILED : 2, 
    INACTIVE : 3

    },
    toString:()=>{
        return 'SFCSTATUS';
    }
}

