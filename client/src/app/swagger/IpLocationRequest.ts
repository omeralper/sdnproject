//imports start IpLocationRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {IpLocationDTO,IpLocationDTODef} from "./IpLocationDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface IpLocationRequest extends GenericRequest {
   data: IpLocationDTO;

}


export var IpLocationRequestDef:IModelDef = {
    meta: {
        className: 'IpLocationRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: IpLocationDTODef, required: true }

    }),
    toString:()=>{
        return 'IpLocationRequest';
    }
};



