//imports start CONNECTIONTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Bağlantının hangi 2 tip cihaz arasında kurulduğunu belirten ENUM değeridir.\n| Adı          | Açıklama           |\n|:-------------|:-------------------|\n| OF_SWITCH    | OpenFlow Switch    |\n| OF_LEGACY    | OpenFlow - Legacy  |\n| OTHER        | Diğer              |
*/
export enum CONNECTIONTYPE {
    OF_SWITCH = <any>'OF_SWITCH', 
    OF_LEGACY = <any>'OF_LEGACY', 
    OTHER = <any>'OTHER'

}

export var CONNECTIONTYPEDef:IModelDef = {
    meta: {
        className: 'CONNECTIONTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    OF_SWITCH : 1, 
    OF_LEGACY : 2, 
    OTHER : 3

    },
    toString:()=>{
        return 'CONNECTIONTYPE';
    }
}

