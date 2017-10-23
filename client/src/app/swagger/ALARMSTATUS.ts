//imports start ALARMSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alarm durumu
*/
export enum ALARMSTATUS {
    ON = <any>'ON', 
    OFF = <any>'OFF', 
    NONE = <any>'NONE'

}

export var ALARMSTATUSDef:IModelDef = {
    meta: {
        className: 'ALARMSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    ON : 1, 
    OFF : 2, 
    NONE : 3

    },
    toString:()=>{
        return 'ALARMSTATUS';
    }
}

