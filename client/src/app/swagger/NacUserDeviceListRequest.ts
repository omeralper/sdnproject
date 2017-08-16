//imports start NacUserDeviceListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {ListOptions,ListOptionsDef} from "./ListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserDeviceListRequest extends GenericRequest {
   options: ListOptions;
   
    /**
    * Son kullanıcı ID değeri
    */
    nacUserId: string;

}


export var NacUserDeviceListRequestDef:IModelDef = {
    meta: {
        className: 'NacUserDeviceListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: ListOptionsDef, required: true }, 

        nacUserId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'NacUserDeviceListRequest';
    }
};



