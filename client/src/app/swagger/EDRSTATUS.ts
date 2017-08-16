//imports start EDRSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* EDR nesnelerinin genel durumunu belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama                            |\n|:---------|:------------------------------------|\n| SUCCESS  | EDR da işaret edilen olay başarılı  |\n| FAIL     | EDR da işaret edilen olay başarısız |
*/
export enum EDRSTATUS {
    SUCCESS = <any>'SUCCESS', 
    FAIL = <any>'FAIL'

}

export var EDRSTATUSDef:IModelDef = {
    meta: {
        className: 'EDRSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    SUCCESS : 1, 
    FAIL : 2

    },
    toString:()=>{
        return 'EDRSTATUS';
    }
}

