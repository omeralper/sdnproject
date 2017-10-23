//imports start PrognetDeviceListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SwitchListDTO,SwitchListDTODef} from "./SwitchListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PrognetDeviceListRequest extends GenericRequest {
   data: SwitchListDTO;

}


export var PrognetDeviceListRequestDef:IModelDef = {
    meta: {
        className: 'PrognetDeviceListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: SwitchListDTODef, required: true }

    }),
    toString:()=>{
        return 'PrognetDeviceListRequest';
    }
};



