//imports start PEERSTATUSTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Yönlendirici bağlantı durumu bilgisini tutar.\nDeğerler şunlardır;\n\n| Adı    | Açıklama                                  |\n|:-------|:------------------------------------------|\n| ACTIVE | Eş yönelndirici ile bağlantı sağlanamış   |\n| PASSIVE| Eş yönelndirici ile bağlantı sağlanamamış |
*/
export enum PEERSTATUSTYPE {
    ACTIVE = <any>'ACTIVE', 
    PASSIVE = <any>'PASSIVE'

}

export var PEERSTATUSTYPEDef:IModelDef = {
    meta: {
        className: 'PEERSTATUSTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    ACTIVE : 1, 
    PASSIVE : 2

    },
    toString:()=>{
        return 'PEERSTATUSTYPE';
    }
}

