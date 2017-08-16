//imports start UserRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {UserDTO,UserDTODef} from "./UserDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface UserRequest extends GenericRequest {
   data: UserDTO;

}


export var UserRequestDef:IModelDef = {
    meta: {
        className: 'UserRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: UserDTODef, required: true }

    }),
    toString:()=>{
        return 'UserRequest';
    }
};



