//imports start UserListResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {UserListDTO,UserListDTODef} from "./UserListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface UserListResponse extends GenericResponse {
   data: UserListDTO;

}


export var UserListResponseDef:IModelDef = {
    meta: {
        className: 'UserListResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: UserListDTODef, required: true }

    }),
    toString:()=>{
        return 'UserListResponse';
    }
};



