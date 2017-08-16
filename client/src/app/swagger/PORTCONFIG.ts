//imports start PORTCONFIG
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Anahtarlayıcı Portunun durumunu belirten ENUM değeridir. Bunlar port davranışlarını yapılandırmak için kullanılırlar.\nDeğerler şunlardır;\n\n| Adı          | Açıklama                                     |\n|:-------------|:---------------------------------------------|\n| PORT_DOWN    | Port, yönetimsel olarak kapatılmış.          |\n| NO_RECV      | Açıklama için SITD Dokümanı EK-B’ye bakınız. |\n| NO_FWD       | Açıklama için SITD Dokümanı EK-B’ye bakınız. |\n| NO_PACKET_IN | Açıklama için SITD Dokümanı EK-B’ye bakınız. |
*/
export enum PORTCONFIG {
    PORT_DOWN = <any>'PORT_DOWN', 
    NO_RECV = <any>'NO_RECV', 
    NO_FWD = <any>'NO_FWD', 
    NO_PACKET_IN = <any>'NO_PACKET_IN'

}

export var PORTCONFIGDef:IModelDef = {
    meta: {
        className: 'PORTCONFIG',
        isObject: false,
        isEnum: true,
    },
    map: {
    PORT_DOWN : 1, 
    NO_RECV : 2, 
    NO_FWD : 3, 
    NO_PACKET_IN : 4

    },
    toString:()=>{
        return 'PORTCONFIG';
    }
}

