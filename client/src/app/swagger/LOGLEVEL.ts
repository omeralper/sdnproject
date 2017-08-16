//imports start LOGLEVEL
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Günlük seviyesini belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı   | Açıklama                      |\n|:------|:------------------------------|\n| OFF   | Günlük Kapalı.                |\n| FATAL | Ölümcül  Günlük Seviyesi.     |\n| ERROR | Hata Günlük Seviyesi.         |\n| WARN  | Uyarı Günlük Seviyesi         |\n| INFO  | Bilgi Günlük Seviyesi         |\n| DEBUG | Hata Ayıklama Günlük Seviyesi |\n| TRACE | Takip Günlük Seviyesi         |\n| ALL   | Tüm Seviyeler.                |
*/
export enum LOGLEVEL {
    OFF = <any>'OFF', 
    FATAL = <any>'FATAL', 
    ERROR = <any>'ERROR', 
    WARN = <any>'WARN', 
    INFO = <any>'INFO', 
    DEBUG = <any>'DEBUG', 
    TRACE = <any>'TRACE', 
    ALL = <any>'ALL'

}

export var LOGLEVELDef:IModelDef = {
    meta: {
        className: 'LOGLEVEL',
        isObject: false,
        isEnum: true,
    },
    map: {
    OFF : 1, 
    FATAL : 2, 
    ERROR : 3, 
    WARN : 4, 
    INFO : 5, 
    DEBUG : 6, 
    TRACE : 7, 
    ALL : 8

    },
    toString:()=>{
        return 'LOGLEVEL';
    }
}

