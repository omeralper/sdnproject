//imports start REPORTINGMETHOD
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alarm bildiriminin ne şekilde yapılacağı.
*/
export enum REPORTINGMETHOD {
    UI = <any>'UI', 
    E_MAIL = <any>'E_MAIL'

}

export var REPORTINGMETHODDef:IModelDef = {
    meta: {
        className: 'REPORTINGMETHOD',
        isObject: false,
        isEnum: true,
    },
    map: {
    UI : 1, 
    E_MAIL : 2

    },
    toString:()=>{
        return 'REPORTINGMETHOD';
    }
}

