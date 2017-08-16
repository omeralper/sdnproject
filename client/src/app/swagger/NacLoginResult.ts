//imports start NacLoginResult

import {NacUserDTO,NacUserDTODef} from "./NacUserDTO";
/*###NacLoginResult*/


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Son kullanıcı giriş işlemi sonunda dönülen veri yapısı.
*/
export interface NacLoginResult {
   
    /**
    * Giriş yapan son kullanıcının detayları.
    */
    user: NacUserDTO;
   
    /**
    * Son kullanıcıya ait ayarların bulunduğu bir map. Key/value olarak pekçok veri dönülebilir.
    */
    settings?: { [key: string]: string; };

}


export var NacLoginResultDef:IModelDef = {
    meta: {
        className: 'NacLoginResult',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        user : { type: NacUserDTODef, required: true }, 

        settings : { type: 'Array' }

    },
    toString:()=>{
        return 'NacLoginResult';
    }
};



