//imports start GenericResponse

import {ErrorInfo,ErrorInfoDef} from "./ErrorInfo";
import {RETURNSTATUS,RETURNSTATUSDef} from "./RETURNSTATUS";
import {SecurityToken,SecurityTokenDef} from "./SecurityToken";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* API sisteminde tüm cevaplar için kullanılacak veri modelleri bu veri modeli temel alınarak tanımlanacaktır.
*/
export interface GenericResponse {
   token: SecurityToken;
   
    /**
    * Önbellek kontrolü için kullanılacak alan.
    */
    etag?: string;
   
    /**
    * İstek verilerinin bütünlüğünün kontrol edilmesi için kullanılacak bir sayısal imza verisi olacaktır.
    */
    digest?: string;
   
    /**
    * İstek durumunun belirtildiği enum tipi.
    */
    status: RETURNSTATUS;
   
    /**
    * Hata durumlarında, hata detaylarının iletilmesi için kullanılabilecek veri tipi.
    */
    errorInfo?: ErrorInfo;

}


export var GenericResponseDef:IModelDef = {
    meta: {
        className: 'GenericResponse',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        token : { type: SecurityTokenDef, required: true }, 

        etag : { type: 'string' }, 

        digest : { type: 'string' }, 

        status : { type: RETURNSTATUSDef, required: true }, 

        errorInfo : { type: ErrorInfoDef }

    },
    toString:()=>{
        return 'GenericResponse';
    }
};



