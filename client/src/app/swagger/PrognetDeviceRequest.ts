//imports start PrognetDeviceRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SwitchDTO,SwitchDTODef} from "./SwitchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PrognetDeviceRequest extends GenericRequest {
   data: SwitchDTO;

}


export var PrognetDeviceRequestDef:IModelDef = {
    meta: {
        className: 'PrognetDeviceRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: SwitchDTODef, required: true }

    }),
    toString:()=>{
        return 'PrognetDeviceRequest';
    }
};



