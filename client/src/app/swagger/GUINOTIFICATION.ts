//imports start GUINOTIFICATION
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alarmın UI&#39;da gösterilirliği
*/
export enum GUINOTIFICATION {
    VISIBLE = <any>'VISIBLE', 
    INVISIBLE = <any>'INVISIBLE'

}

export var GUINOTIFICATIONDef:IModelDef = {
    meta: {
        className: 'GUINOTIFICATION',
        isObject: false,
        isEnum: true,
    },
    map: {
    VISIBLE : 1, 
    INVISIBLE : 2

    },
    toString:()=>{
        return 'GUINOTIFICATION';
    }
}

