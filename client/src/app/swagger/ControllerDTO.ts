//imports start ControllerDTO

import {AddressInfo,AddressInfoDef} from "./AddressInfo";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CONTROLLERSTATE,CONTROLLERSTATEDef} from "./CONTROLLERSTATE";
import {SECURITYMODE,SECURITYMODEDef} from "./SECURITYMODE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ControllerDTO extends BaseDTO {
   
    /**
    * Kontrolcü adres bilgilerinin bulunduğu veri yapısı.
    */
    address: AddressInfo;
   
    /**
    * Kontrolcüde bulunan anahtarlayıcı sayısı.
    */
    deviceCount: number;
   
    /**
    * Kontrolcü durumu.
    */
    controllerState: CONTROLLERSTATE;
   
    /**
    * Kontrolcü adı.
    */
    name: string;
   
    /**
    * Kontrolcü güvenlik modu.
    */
    securityMode: SECURITYMODE;
   
    /**
    * Kontrolcünün konuştuğu openflow versiyonları.
    */
    openflowVersions: string;

}


export var ControllerDTODef:IModelDef = {
    meta: {
        className: 'ControllerDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        address : { type: AddressInfoDef, required: true }, 

        deviceCount : { type: 'number', required: true }, 

        controllerState : { type: CONTROLLERSTATEDef, required: true }, 

        name : { type: 'string', required: true }, 

        securityMode : { type: SECURITYMODEDef, required: true }, 

        openflowVersions : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'ControllerDTO';
    }
};



