//imports start NacUserDeviceSearchRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SearchOptions,SearchOptionsDef} from "./SearchOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserDeviceSearchRequest extends GenericRequest {
   options: SearchOptions;
   
    /**
    * Son kullanıcı ID değeri
    */
    nacUserId: string;

}


export var NacUserDeviceSearchRequestDef:IModelDef = {
    meta: {
        className: 'NacUserDeviceSearchRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        options : { type: SearchOptionsDef, required: true }, 

        nacUserId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'NacUserDeviceSearchRequest';
    }
};



