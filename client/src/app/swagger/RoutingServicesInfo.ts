//imports start RoutingServicesInfo



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Aksiyon olarak kullanılacak rotalama servislerinin bilgileri
*/
export interface RoutingServicesInfo {
   
    /**
    * Trafik atlatma içerisinde yer alması beklenen cihaz listesi.
    */
    includedDevices?: Array<string>;
   
    /**
    * Trafik atlatma içerisinde yer alması istenmeyen cihaz listesi.
    */
    excludedDevices?: Array<string>;
   
    /**
    * Rota atlama yönteminin kullanılıp kullanılmayacağı
    */
    useRouteHopping?: boolean;
   
    /**
    * Kaç rota atlama kullanılacağı bilgisi
    */
    hopCount?: number;
   
    /**
    * Hangi sıklıkta rota atlama kullanılacağı bilgisi
    */
    hopPeriod?: number;
   
    /**
    * Güvenli rotalama kullanılıp kullanılmayacağı
    */
    useSecureRouting?: boolean;

}


export var RoutingServicesInfoDef:IModelDef = {
    meta: {
        className: 'RoutingServicesInfo',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        includedDevices : { type: 'Array' }, 

        excludedDevices : { type: 'Array' }, 

        useRouteHopping : { type: 'boolean' }, 

        hopCount : { type: 'number' }, 

        hopPeriod : { type: 'number' }, 

        useSecureRouting : { type: 'boolean' }

    },
    toString:()=>{
        return 'RoutingServicesInfo';
    }
};



