//imports start SEVERITY
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alarm önem derecesi
*/
export enum SEVERITY {
    MINOR = <any>'MINOR', 
    MAJOR = <any>'MAJOR', 
    CRITICAL = <any>'CRITICAL', 
    FATAL = <any>'FATAL', 
    NONE = <any>'NONE'

}

export var SEVERITYDef:IModelDef = {
    meta: {
        className: 'SEVERITY',
        isObject: false,
        isEnum: true,
    },
    map: {
    MINOR : 1, 
    MAJOR : 2, 
    CRITICAL : 3, 
    FATAL : 4, 
    NONE : 5

    },
    toString:()=>{
        return 'SEVERITY';
    }
}

