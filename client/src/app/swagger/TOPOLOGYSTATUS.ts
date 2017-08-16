//imports start TOPOLOGYSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Topoloji durumunu belirten ENUM değeridir.\nDeğerler şunlardır;\n\n| Adı      | Açıklama                                             |\n|:---------|:-----------------------------------------------------|\n| DOWN          | Topoloji çökmüş durumda                         |\n| PARTIAL_DOWN  | Topoloji sorunlu, düşük performansta çalışıyor. |\n| ACTIVE        | Topoloji problemsiz durumda                     |\n| DESIGNED      | Topoloji tasarlanmış durumda.                   |\n| SUBMITTED     | Topoloji onay bekliyor durumda                  |\n| SETUP         | Topoloji oluşturuluyor.                         |\n| SUSPENDED     | Topoloji askıda.                                |\n| REJECTED      | Topoloji red edilmiş.                           |\n| INVALID       | Topoloji kullanılamaz durumda.                  |
*/
export enum TOPOLOGYSTATUS {
    DOWN = <any>'DOWN', 
    PARTIAL_DOWN = <any>'PARTIAL_DOWN', 
    ACTIVE = <any>'ACTIVE', 
    DESIGNED = <any>'DESIGNED', 
    SUBMITTED = <any>'SUBMITTED', 
    SETUP = <any>'SETUP', 
    SUSPENDED = <any>'SUSPENDED', 
    REJECTED = <any>'REJECTED', 
    INVALID = <any>'INVALID'

}

export var TOPOLOGYSTATUSDef:IModelDef = {
    meta: {
        className: 'TOPOLOGYSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    DOWN : 1, 
    PARTIAL_DOWN : 2, 
    ACTIVE : 3, 
    DESIGNED : 4, 
    SUBMITTED : 5, 
    SETUP : 6, 
    SUSPENDED : 7, 
    REJECTED : 8, 
    INVALID : 9

    },
    toString:()=>{
        return 'TOPOLOGYSTATUS';
    }
}

