//imports start MVTNSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* MVTN taleplerinin durum bilgisi
*/
export enum MVTNSTATUS {
    SUBMITTED = <any>'SUBMITTED', 
    REJECTED = <any>'REJECTED', 
    ACTIVE = <any>'ACTIVE', 
    SUSPENDED = <any>'SUSPENDED', 
    INVALID = <any>'INVALID'

}

export var MVTNSTATUSDef:IModelDef = {
    meta: {
        className: 'MVTNSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    SUBMITTED : 1, 
    REJECTED : 2, 
    ACTIVE : 3, 
    SUSPENDED : 4, 
    INVALID : 5

    },
    toString:()=>{
        return 'MVTNSTATUS';
    }
}

