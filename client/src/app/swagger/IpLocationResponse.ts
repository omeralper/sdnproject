//imports start IpLocationResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {IpLocationDTO,IpLocationDTODef} from "./IpLocationDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface IpLocationResponse extends GenericResponse {
   data: IpLocationDTO;

}


export var IpLocationResponseDef:IModelDef = {
    meta: {
        className: 'IpLocationResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: IpLocationDTODef, required: true }

    }),
    toString:()=>{
        return 'IpLocationResponse';
    }
};



