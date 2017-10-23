//imports start CERTIFICATETYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Sertifika tipi.
*/
export enum CERTIFICATETYPE {
    SWITCH = <any>'SWITCH', 
    CONTROLLER = <any>'CONTROLLER', 
    NM = <any>'NM', 
    AYB = <any>'AYB', 
    RABBITMQ = <any>'RABBITMQ'

}

export var CERTIFICATETYPEDef:IModelDef = {
    meta: {
        className: 'CERTIFICATETYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    SWITCH : 1, 
    CONTROLLER : 2, 
    NM : 3, 
    AYB : 4, 
    RABBITMQ : 5

    },
    toString:()=>{
        return 'CERTIFICATETYPE';
    }
}

