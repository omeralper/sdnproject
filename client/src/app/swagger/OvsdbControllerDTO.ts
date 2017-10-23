//imports start OvsdbControllerDTO



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Ağ anahtarlayıcı başına ağ kontrolcü listesi
*/
export interface OvsdbControllerDTO {
   
    /**
    * Ağ anahtarlayıcı tekil numarası
    */
    deviceId: string;
   
    /**
    * Ağ kontrolcü listesi
    */
    controllerInfoList: Array<string>;

}


export var OvsdbControllerDTODef:IModelDef = {
    meta: {
        className: 'OvsdbControllerDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        deviceId : { type: 'string', required: true }, 

        controllerInfoList : { type: 'Array', required: true }

    },
    toString:()=>{
        return 'OvsdbControllerDTO';
    }
};



