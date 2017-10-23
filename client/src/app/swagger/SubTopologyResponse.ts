//imports start SubTopologyResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MvtnSubTopologyDTO,MvtnSubTopologyDTODef} from "./MvtnSubTopologyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SubTopologyResponse extends GenericResponse {
   data: MvtnSubTopologyDTO;

}


export var SubTopologyResponseDef:IModelDef = {
    meta: {
        className: 'SubTopologyResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MvtnSubTopologyDTODef, required: true }

    }),
    toString:()=>{
        return 'SubTopologyResponse';
    }
};



