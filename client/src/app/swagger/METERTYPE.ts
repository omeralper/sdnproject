//imports start METERTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Meter talebinin ağ bilgisi
*/
export enum METERTYPE {
    MVTN = <any>'MVTN', 
    USER = <any>'USER'

}

export var METERTYPEDef:IModelDef = {
    meta: {
        className: 'METERTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    MVTN : 1, 
    USER : 2

    },
    toString:()=>{
        return 'METERTYPE';
    }
}

