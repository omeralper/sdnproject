//imports start VirtualNetFunctionListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {ListOptions,ListOptionsDef} from "./ListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionListRequest extends GenericRequest {
   vnfOptions: ListOptions;
   
    /**
    * Ağ servis tanımı (NSD) ID değeri. Bu değer sağlandığı durumda, belirtilen NSD tarafından tanımlanan VNF'ler listelenecektir.
    */
    nsdId?: string;

}


export var VirtualNetFunctionListRequestDef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        vnfOptions : { type: ListOptionsDef, required: true }, 

        nsdId : { type: 'string' }

    }),
    toString:()=>{
        return 'VirtualNetFunctionListRequest';
    }
};



