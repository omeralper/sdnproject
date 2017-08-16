//imports start ProactivePathPolicyDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {PPPSubPathDTO,PPPSubPathDTODef} from "./PPPSubPathDTO";
import {PPPSTATUS,PPPSTATUSDef} from "./PPPSTATUS";
import {ServiceActionDTO,ServiceActionDTODef} from "./ServiceActionDTO";
import {SwitchDTO,SwitchDTODef} from "./SwitchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ProactivePathPolicyDTO extends BaseDTO {
   
    /**
    * Politikanin uygulanacagi hedef id
    */
    toId?: string;
   
    /**
    * Intent idsi
    */
    intentId?: string;
   
    /**
    * Politikanin bagli oldugu mvtn ismi.
    */
    mvtnName?: string;
   
    /**
    * Sanal agin fiziksel topolojideki karsiliklari bilgisi
    */
    subPathList?: Array<PPPSubPathDTO>;
   
    /**
    * Politikanin bagli oldugu mvtn idsi
    */
    mvtnId?: number;
   
    /**
    * Sanal agin fizikseldeki topoloji karsiliklarindan secili olan topolojinin id bilgisi
    */
    selectedSubPathId?: string;
   
    /**
    * Politika öncelik degeri
    */
    priority?: number;
   
    /**
    * Politika tipi
    */
    type?: number;
   
    /**
    * Politikanin uygulanacagi kaynak id
    */
    fromId?: string;
   
    /**
    * Patikanın uğraması gereken anahtarlayıcı listesi
    */
    mustVisitDeviceList?: Array<SwitchDTO>;
   
    /**
    * Uygulanacak Hizmet Kalitesi politikası detayları.
    */
    serviceAction?: ServiceActionDTO;
   
    /**
    * Politika ismi
    */
    name?: string;
   
    /**
    * Politika baslangic zamani
    */
    startTime?: Date;
   
    /**
    * Politika bitis zamani
    */
    stopTime?: Date;
   
    /**
    * Politika durumu
    */
    status?: PPPSTATUS;

}


export var ProactivePathPolicyDTODef:IModelDef = {
    meta: {
        className: 'ProactivePathPolicyDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        toId : { type: 'string' }, 

        intentId : { type: 'string' }, 

        mvtnName : { type: 'string' }, 

        subPathList : { type: 'Array' }, 

        mvtnId : { type: 'number' }, 

        selectedSubPathId : { type: 'string' }, 

        priority : { type: 'number' }, 

        type : { type: 'number' }, 

        fromId : { type: 'string' }, 

        mustVisitDeviceList : { type: 'Array' }, 

        serviceAction : { type: ServiceActionDTODef }, 

        name : { type: 'string' }, 

        startTime : { type: 'Date' }, 

        stopTime : { type: 'Date' }, 

        status : { type: PPPSTATUSDef }

    }),
    toString:()=>{
        return 'ProactivePathPolicyDTO';
    }
};



