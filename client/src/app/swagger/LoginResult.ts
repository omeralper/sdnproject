//imports start LoginResult

import {UserDTO,UserDTODef} from "./UserDTO";
/*###LoginResult*/


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Giriş işlemi sonunda dönülen veri yapısı.
*/
export interface LoginResult {
   
    /**
    * Giriş yapan kullanıcının detayları.
    */
    user: UserDTO;
   
    /**
    * Kullanıcıya ait ayarların bulunduğu bir map. Key/value olarak pekçok veri dönülebilir.
    */
    settings?: { [key: string]: string; };

}


export var LoginResultDef:IModelDef = {
    meta: {
        className: 'LoginResult',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        user : { type: UserDTODef, required: true }, 

        settings : { type: 'Array' }

    },
    toString:()=>{
        return 'LoginResult';
    }
};



