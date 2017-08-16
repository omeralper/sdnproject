//imports start HOSTTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Uç Birimlerin tipini belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı          | Açıklama           |\n|:-------------|:-------------------|\n| COMPUTER     | Bilgisayar.        |\n| PRINTER      | Yazıcı.            |\n| PHONE        | Telefon.           |\n| IPTV_STB     | IPTV Cihazı.       |\n| SMART_TV     | Akıllı Televizyon. |\n| MEDIA_PLAYER | Medya Oynatıcı.    |\n| CELL_PHONE   | Cep Telefonu       |\n| CAMERA       | Video Kamera.      |\n| SERVER       | Sunucu.            |\n| SFC_FIREWALL | Güvenlik Duvarı.   |\n| LOAD_BALANCER| Yük Dengeleyici.   |\n| DPI          | Derin Paket İncl.  |\n| UNKNOWN      | Bilinmiyor.        |
*/
export enum HOSTTYPE {
    COMPUTER = <any>'COMPUTER', 
    PRINTER = <any>'PRINTER', 
    PHONE = <any>'PHONE', 
    IPTV_STB = <any>'IPTV_STB', 
    SMART_TV = <any>'SMART_TV', 
    MEDIA_PLAYER = <any>'MEDIA_PLAYER', 
    CELL_PHONE = <any>'CELL_PHONE', 
    CAMERA = <any>'CAMERA', 
    SERVER = <any>'SERVER', 
    SFC_FIREWALL = <any>'SFC_FIREWALL', 
    LOAD_BALANCER = <any>'LOAD_BALANCER', 
    DPI = <any>'DPI', 
    UNKNOWN = <any>'UNKNOWN'

}

export var HOSTTYPEDef:IModelDef = {
    meta: {
        className: 'HOSTTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    COMPUTER : 1, 
    PRINTER : 2, 
    PHONE : 3, 
    IPTV_STB : 4, 
    SMART_TV : 5, 
    MEDIA_PLAYER : 6, 
    CELL_PHONE : 7, 
    CAMERA : 8, 
    SERVER : 9, 
    SFC_FIREWALL : 10, 
    LOAD_BALANCER : 11, 
    DPI : 12, 
    UNKNOWN : 13

    },
    toString:()=>{
        return 'HOSTTYPE';
    }
}

