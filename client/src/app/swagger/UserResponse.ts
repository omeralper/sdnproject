//imports start UserResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {UserDTO,UserDTODef} from "./UserDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface UserResponse extends GenericResponse {
   data?: UserDTO;

}


export var UserResponseDef:IModelDef = {
    meta: {
        className: 'UserResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: UserDTODef }

    }),
    toString:()=>{
        return 'UserResponse';
    }
};



