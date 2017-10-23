//imports start MvtnRequestDeleteRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MvtnRequestDeleteDTO,MvtnRequestDeleteDTODef} from "./MvtnRequestDeleteDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnRequestDeleteRequest extends GenericRequest {
   data: MvtnRequestDeleteDTO;

}


export var MvtnRequestDeleteRequestDef:IModelDef = {
    meta: {
        className: 'MvtnRequestDeleteRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MvtnRequestDeleteDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnRequestDeleteRequest';
    }
};



