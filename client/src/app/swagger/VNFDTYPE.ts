//imports start VNFDTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Vnfd tip bilgisi
*/
export enum VNFDTYPE {
    FIREWALL = <any>'FIREWALL', 
    DPI = <any>'DPI', 
    LOAD_BALANCER = <any>'LOAD_BALANCER', 
    PF_SENSE = <any>'PF_SENSE'

}

export var VNFDTYPEDef:IModelDef = {
    meta: {
        className: 'VNFDTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    FIREWALL : 1, 
    DPI : 2, 
    LOAD_BALANCER : 3, 
    PF_SENSE : 4

    },
    toString:()=>{
        return 'VNFDTYPE';
    }
}

