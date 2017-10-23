//imports start DeviceProfileDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MvtnPortInfo,MvtnPortInfoDef} from "./MvtnPortInfo";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DeviceProfileDTO extends BaseDTO {
   
    /**
    * Devicea ait profile ismi.
    */
    profileName?: string;
   
    /**
    * Devicea ait profile id bilgisi.
    */
    profileId?: string;
   mvtnPortInfo?: MvtnPortInfo;

}


export var DeviceProfileDTODef:IModelDef = {
    meta: {
        className: 'DeviceProfileDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        profileName : { type: 'string' }, 

        profileId : { type: 'string' }, 

        mvtnPortInfo : { type: MvtnPortInfoDef }

    }),
    toString:()=>{
        return 'DeviceProfileDTO';
    }
};



