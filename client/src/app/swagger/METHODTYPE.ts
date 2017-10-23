//imports start METHODTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Ölçerin hesaplanma metodu türünü belirtir. Değerler şunlardır:\n| Adı             | Açıklama                   |\n|-----------------|----------------------------|\n| AVERAGE         | Hesaplama metodu = average |\n| SUM             | Hesaplama metodu = sum     |\n| MIN             | Hesaplama metodu = min     |\n| MAX             | Hesaplama metodu = max     |\n| CUSTOM          | Hesaplama metodu = custom  |
*/
export enum METHODTYPE {
    AVERAGE = <any>'AVERAGE', 
    SUM = <any>'SUM', 
    MIN = <any>'MIN', 
    MAX = <any>'MAX', 
    CUSTOM = <any>'CUSTOM'

}

export var METHODTYPEDef:IModelDef = {
    meta: {
        className: 'METHODTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    AVERAGE : 1, 
    SUM : 2, 
    MIN : 3, 
    MAX : 4, 
    CUSTOM : 5

    },
    toString:()=>{
        return 'METHODTYPE';
    }
}

