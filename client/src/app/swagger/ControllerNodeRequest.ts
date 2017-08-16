//imports start ControllerNodeRequest

import {ControllerNodeDTO,ControllerNodeDTODef} from "./ControllerNodeDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ControllerNodeRequest extends GenericRequest {
   data: ControllerNodeDTO;

}


export var ControllerNodeRequestDef:IModelDef = {
    meta: {
        className: 'ControllerNodeRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: ControllerNodeDTODef, required: true }

    }),
    toString:()=>{
        return 'ControllerNodeRequest';
    }
};



