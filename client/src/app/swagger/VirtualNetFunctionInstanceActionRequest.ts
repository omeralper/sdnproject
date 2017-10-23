//imports start VirtualNetFunctionInstanceActionRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VirtualNetFunctionInstanceActionRequest extends GenericRequest {
   
    /**
    * VM id'si
    */
    vmInstanceId: string;
   
    /**
    * Stop ve Restart islemlerinde kullanılacak SOFT | HARD
    */
    actionType?: string;
   vimInstanceId: string;

}


export var VirtualNetFunctionInstanceActionRequestDef:IModelDef = {
    meta: {
        className: 'VirtualNetFunctionInstanceActionRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        vmInstanceId : { type: 'string', required: true }, 

        actionType : { type: 'string' }, 

        vimInstanceId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'VirtualNetFunctionInstanceActionRequest';
    }
};



