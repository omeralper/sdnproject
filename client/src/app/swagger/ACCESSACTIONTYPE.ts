//imports start ACCESSACTIONTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Erişim politikası aksiyon\ntipini belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı      | Açıklama             |\n|:---------|:---------------------|\n| ACCESS   | Erişim İzinli        |\n| DENIED   | Erişim Engellendi    |
*/
export enum ACCESSACTIONTYPE {
    ACCESS = <any>'ACCESS', 
    DENIED = <any>'DENIED'

}

export var ACCESSACTIONTYPEDef:IModelDef = {
    meta: {
        className: 'ACCESSACTIONTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACCESS : 1, 
    DENIED : 2

    },
    toString:()=>{
        return 'ACCESSACTIONTYPE';
    }
}

