//imports start SMSSOURCE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Sms kaynak tipi
*/
export enum SMSSOURCE {
    NAS = <any>'NAS', 
    NONE = <any>'NONE'

}

export var SMSSOURCEDef:IModelDef = {
    meta: {
        className: 'SMSSOURCE',
        isObject: false,
        isEnum: true,
    },
    map: {
    NAS : 1, 
    NONE : 2

    },
    toString:()=>{
        return 'SMSSOURCE';
    }
}

