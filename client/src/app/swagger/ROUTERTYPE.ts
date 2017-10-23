//imports start ROUTERTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Router komşuluk bilgisini tutar.\nDeğerler şunlardır;\n\n| Adı             | Açıklama                      |\n|:----------------|:------------------------------|\n| SPEAKER         | BGP Speaker                   |\n| PEER            | BGP Peer                      |\n| ROUTE REFLECTOR | BGP Route Reflector           |
*/
export enum ROUTERTYPE {
    SPEAKER = <any>'SPEAKER', 
    PEER = <any>'PEER', 
    ROUTE_REFLECTOR = <any>'ROUTE_REFLECTOR'

}

export var ROUTERTYPEDef:IModelDef = {
    meta: {
        className: 'ROUTERTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    SPEAKER : 1, 
    PEER : 2, 
    ROUTE_REFLECTOR : 3

    },
    toString:()=>{
        return 'ROUTERTYPE';
    }
}

