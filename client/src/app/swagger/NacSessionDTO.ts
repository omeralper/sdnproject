//imports start NacSessionDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {NacDeviceDTO,NacDeviceDTODef} from "./NacDeviceDTO";
import {NacGroupDTO,NacGroupDTODef} from "./NacGroupDTO";
import {NacUserDTO,NacUserDTODef} from "./NacUserDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacSessionDTO extends BaseDTO {
   
    /**
    * nacUserDTO
    */
    nacUserDTO?: NacUserDTO;
   
    /**
    * Mac Adresi
    */
    macAddress: string;
   
    /**
    * Kaynak Adresi
    */
    sourceAddress?: string;
   
    /**
    * Durum numarası
    */
    stateId?: number;
   
    /**
    * nacGroupDTO
    */
    nacGroupDTO?: NacGroupDTO;
   
    /**
    * nacDeviceDTO
    */
    nacDeviceDTO?: NacDeviceDTO;
   
    /**
    * Cihaz kimlik numarası
    */
    deviceId: string;
   
    /**
    * Port numarası
    */
    portNumber: number;

}


export var NacSessionDTODef:IModelDef = {
    meta: {
        className: 'NacSessionDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        nacUserDTO : { type: NacUserDTODef }, 

        macAddress : { type: 'string', required: true }, 

        sourceAddress : { type: 'string' }, 

        stateId : { type: 'number' }, 

        nacGroupDTO : { type: NacGroupDTODef }, 

        nacDeviceDTO : { type: NacDeviceDTODef }, 

        deviceId : { type: 'string', required: true }, 

        portNumber : { type: 'number', required: true }

    }),
    toString:()=>{
        return 'NacSessionDTO';
    }
};



