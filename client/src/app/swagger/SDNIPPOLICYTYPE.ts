//imports start SDNIPPOLICYTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Politikaların etkinlik yönünü tanımlar.\nDeğerler şunlardır;\n\n| Adı       | Açıklama   |\n|:----------|:-----------|\n| IMPORT    | İçe doğru  |\n| EXPORT    | Dışa doğru |
*/
export enum SDNIPPOLICYTYPE {
    IMPORT = <any>'IMPORT', 
    EXPORT = <any>'EXPORT'

}

export var SDNIPPOLICYTYPEDef:IModelDef = {
    meta: {
        className: 'SDNIPPOLICYTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    IMPORT : 1, 
    EXPORT : 2

    },
    toString:()=>{
        return 'SDNIPPOLICYTYPE';
    }
}

