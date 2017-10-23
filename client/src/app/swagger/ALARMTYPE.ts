//imports start ALARMTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alarm tipi
*/
export enum ALARMTYPE {
    ALARM = <any>'ALARM', 
    EVENT = <any>'EVENT', 
    NONE = <any>'NONE', 
    GENERIC_EVENT = <any>'GENERIC_EVENT'

}

export var ALARMTYPEDef:IModelDef = {
    meta: {
        className: 'ALARMTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    ALARM : 1, 
    EVENT : 2, 
    NONE : 3, 
    GENERIC_EVENT : 4

    },
    toString:()=>{
        return 'ALARMTYPE';
    }
}

