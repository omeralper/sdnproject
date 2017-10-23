//imports start FLOWSTATE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Akış durumunu belirten ENUM değeri.\nDeğerler şunlardır;\n\n| Adı            | Değeri                                              |\n|----------------|-----------------------------------------------------|\n| PENDING_ADD    | cihaza girilmek üzere bekleniyor                    |\n| ADDED          | cihaza eklenmiş                                     |\n| PENDING_REMOVE | cihazdan silinmek üzere bekleniyor                  |\n| REMOVED        | cihazdan silinmiş                                   |\n| FAILED         | akışın eklenmesinde ya da silinmesinde hata alınmış |
*/
export enum FLOWSTATE {
    PENDING_ADD = <any>'PENDING_ADD', 
    ADDED = <any>'ADDED', 
    PENDING_REMOVE = <any>'PENDING_REMOVE', 
    REMOVED = <any>'REMOVED', 
    FAILED = <any>'FAILED'

}

export var FLOWSTATEDef:IModelDef = {
    meta: {
        className: 'FLOWSTATE',
        isObject: false,
        isEnum: true,
    },
    map: {
    PENDING_ADD : 1, 
    ADDED : 2, 
    PENDING_REMOVE : 3, 
    REMOVED : 4, 
    FAILED : 5

    },
    toString:()=>{
        return 'FLOWSTATE';
    }
}

