//imports start VNFRTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Vnfr type bilgisi
*/
export enum VNFRTYPE {
    PHYSICAL = <any>'PHYSICAL', 
    VIRTUAL = <any>'VIRTUAL'

}

export var VNFRTYPEDef:IModelDef = {
    meta: {
        className: 'VNFRTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    PHYSICAL : 1, 
    VIRTUAL : 2

    },
    toString:()=>{
        return 'VNFRTYPE';
    }
}

