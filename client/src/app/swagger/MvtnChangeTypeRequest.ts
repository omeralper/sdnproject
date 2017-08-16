//imports start MvtnChangeTypeRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MvtnTypeDTO,MvtnTypeDTODef} from "./MvtnTypeDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnChangeTypeRequest extends GenericRequest {
   data: MvtnTypeDTO;

}


export var MvtnChangeTypeRequestDef:IModelDef = {
    meta: {
        className: 'MvtnChangeTypeRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MvtnTypeDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnChangeTypeRequest';
    }
};



