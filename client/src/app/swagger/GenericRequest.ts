//imports start GenericRequest

import {SecurityToken,SecurityTokenDef} from "./SecurityToken";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* API sisteminde tüm istekler için kullanılacak veri modelleri bu veri modeli temel alınarak tanımlanacaktır.
*/
export interface GenericRequest {
   token: SecurityToken;
   
    /**
    * Önbellek kontrolü için kullanılacak alan.
    */
    etag?: string;
   
    /**
    * İstek verilerinin bütünlüğünün kontrol edilmesi için kullanılacak bir sayısal imza verisi olacaktır.
    */
    digest?: string;

}


export var GenericRequestDef:IModelDef = {
    meta: {
        className: 'GenericRequest',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        token : { type: SecurityTokenDef, required: true }, 

        etag : { type: 'string' }, 

        digest : { type: 'string' }

    },
    toString:()=>{
        return 'GenericRequest';
    }
};



