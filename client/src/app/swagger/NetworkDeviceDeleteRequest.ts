//imports start NetworkDeviceDeleteRequest

import {GenericDeleteRequest,GenericDeleteRequestDef} from "./GenericDeleteRequest";
import {NetworkDeviceDTO,NetworkDeviceDTODef} from "./NetworkDeviceDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NetworkDeviceDeleteRequest extends GenericDeleteRequest {
   data: NetworkDeviceDTO;

}


export var NetworkDeviceDeleteRequestDef:IModelDef = {
    meta: {
        className: 'NetworkDeviceDeleteRequest',
        parentClassName: 'GenericDeleteRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericDeleteRequestDef.fields,  {

        data : { type: NetworkDeviceDTODef, required: true }

    }),
    toString:()=>{
        return 'NetworkDeviceDeleteRequest';
    }
};



