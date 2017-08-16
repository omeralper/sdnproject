//imports start LanMvtnInfoDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MVTNSTATUS,MVTNSTATUSDef} from "./MVTNSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface LanMvtnInfoDTO extends BaseDTO {
   
    /**
    * Küme seçili mi bilgisi.
    */
    isSelected?: boolean;
   
    /**
    * Bağlı olduğu geniş alan ağına ait sanal ağın idsi
    */
    wanMvtnId?: number;
   
    /**
    * Sanal ağın durum bilgisi.
    */
    mvtnStatus?: MVTNSTATUS;
   
    /**
    * Yerel sanal ağ kümesinin idsi
    */
    domainId?: number;
   
    /**
    * Yerel sanal ağ kümesinin adı
    */
    domainName?: string;

}


export var LanMvtnInfoDTODef:IModelDef = {
    meta: {
        className: 'LanMvtnInfoDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        isSelected : { type: 'boolean' }, 

        wanMvtnId : { type: 'number' }, 

        mvtnStatus : { type: MVTNSTATUSDef }, 

        domainId : { type: 'number' }, 

        domainName : { type: 'string' }

    }),
    toString:()=>{
        return 'LanMvtnInfoDTO';
    }
};



