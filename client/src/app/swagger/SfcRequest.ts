//imports start SfcRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {SfcDTO,SfcDTODef} from "./SfcDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SfcRequest extends GenericRequest {
   data: SfcDTO;

}


export var SfcRequestDef:IModelDef = {
    meta: {
        className: 'SfcRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: SfcDTODef, required: true }

    }),
    toString:()=>{
        return 'SfcRequest';
    }
};



