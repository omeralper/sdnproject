//imports start MvtnRequestListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {MvtnRequestListDTO,MvtnRequestListDTODef} from "./MvtnRequestListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnRequestListResponse extends GenericResponse {
   data?: MvtnRequestListDTO;

}


export var MvtnRequestListResponseDef:IModelDef = {
    meta: {
        className: 'MvtnRequestListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: MvtnRequestListDTODef }

    }),
    toString:()=>{
        return 'MvtnRequestListResponse';
    }
};



