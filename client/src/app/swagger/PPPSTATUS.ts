//imports start PPPSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Proaktif patikaların durum bilgisi
*/
export enum PPPSTATUS {
    NONE = <any>'NONE', 
    ON_HOLD = <any>'ON_HOLD', 
    ACTIVE = <any>'ACTIVE', 
    FINISHED = <any>'FINISHED'

}

export var PPPSTATUSDef:IModelDef = {
    meta: {
        className: 'PPPSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    NONE : 1, 
    ON_HOLD : 2, 
    ACTIVE : 3, 
    FINISHED : 4

    },
    toString:()=>{
        return 'PPPSTATUS';
    }
}

