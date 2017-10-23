//imports start MvtnChangeStatusRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MvtnStatusDTO,MvtnStatusDTODef} from "./MvtnStatusDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnChangeStatusRequest extends GenericRequest {
   data: MvtnStatusDTO;

}


export var MvtnChangeStatusRequestDef:IModelDef = {
    meta: {
        className: 'MvtnChangeStatusRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: MvtnStatusDTODef, required: true }

    }),
    toString:()=>{
        return 'MvtnChangeStatusRequest';
    }
};



