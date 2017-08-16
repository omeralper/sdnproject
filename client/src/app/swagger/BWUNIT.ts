//imports start BWUNIT
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Bant genişliği birimi.\nDeğerler şunlardır;\n\n| Adı      | Açıklama             |\n|:---------|:---------------------|\n| BPS      | Bit/saniye           |\n| KBPS     | KiloBit/saniye       |\n| MBPS     | MegaBit/saniye       |\n| GBPS     | GigaBit/saniye       |
*/
export enum BWUNIT {
    BPS = <any>'BPS', 
    KBPS = <any>'KBPS', 
    MBPS = <any>'MBPS', 
    GBPS = <any>'GBPS'

}

export var BWUNITDef:IModelDef = {
    meta: {
        className: 'BWUNIT',
        isObject: false,
        isEnum: true,
    },
    map: {
    BPS : 1, 
    KBPS : 2, 
    MBPS : 3, 
    GBPS : 4

    },
    toString:()=>{
        return 'BWUNIT';
    }
}

