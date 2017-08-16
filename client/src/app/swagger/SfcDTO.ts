//imports start SfcDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SFCSTATUS,SFCSTATUSDef} from "./SFCSTATUS";
import {VnfrDTO,VnfrDTODef} from "./VnfrDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SfcDTO extends BaseDTO {
   
    /**
    * Sfc status bilgisi
    */
    sfcStatus?: SFCSTATUS;
   
    /**
    * Vnfr tiplerinin bulunduğu listedir.
    */
    vnfrList?: Array<VnfrDTO>;
   
    /**
    * sfc tip id'si.
    */
    sfcTypeId?: number;
   
    /**
    * Sfc adı.
    */
    sfcName?: string;
   
    /**
    * Sfc type adı.
    */
    sfcTypeName?: string;
   
    /**
    * Sfc id'si.
    */
    sfcId?: number;

}


export var SfcDTODef:IModelDef = {
    meta: {
        className: 'SfcDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        sfcStatus : { type: SFCSTATUSDef }, 

        vnfrList : { type: 'Array' }, 

        sfcTypeId : { type: 'number' }, 

        sfcName : { type: 'string' }, 

        sfcTypeName : { type: 'string' }, 

        sfcId : { type: 'number' }

    }),
    toString:()=>{
        return 'SfcDTO';
    }
};



