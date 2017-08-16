//imports start IpLocationListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {IpLocationListDTO,IpLocationListDTODef} from "./IpLocationListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface IpLocationListResponse extends GenericResponse {
   data: IpLocationListDTO;

}


export var IpLocationListResponseDef:IModelDef = {
    meta: {
        className: 'IpLocationListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: IpLocationListDTODef, required: true }

    }),
    toString:()=>{
        return 'IpLocationListResponse';
    }
};



