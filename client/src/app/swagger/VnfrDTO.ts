//imports start VnfrDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {VNFRSTATUS,VNFRSTATUSDef} from "./VNFRSTATUS";
import {VNFRTYPE,VNFRTYPEDef} from "./VNFRTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfrDTO extends BaseDTO {
   
    /**
    * Vnfr metadata.
    */
    metaData?: string;
   
    /**
    * Vnfr status bilgisi
    */
    vnfrStatus?: VNFRSTATUS;
   
    /**
    * Vnfr id'si
    */
    vnfrId?: string;
   
    /**
    * vnfr host in port numarası.
    */
    inPort?: number;
   
    /**
    * Vnfd id'si
    */
    vnfdId?: string;
   
    /**
    * Vnfr host id'si.
    */
    vnfrHostId?: string;
   
    /**
    * Vnfr type bilgisi.
    */
    vnfrType?: VNFRTYPE;
   
    /**
    * vnfr host out port numarası.
    */
    outPort?: number;
   
    /**
    * Vnfd adı.
    */
    vnfdName?: string;
   
    /**
    * Vnfr adı.
    */
    vnfrName?: string;
   
    /**
    * sfc id'si.
    */
    sfcId?: number;

}


export var VnfrDTODef:IModelDef = {
    meta: {
        className: 'VnfrDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        metaData : { type: 'string' }, 

        vnfrStatus : { type: VNFRSTATUSDef }, 

        vnfrId : { type: 'string' }, 

        inPort : { type: 'number' }, 

        vnfdId : { type: 'string' }, 

        vnfrHostId : { type: 'string' }, 

        vnfrType : { type: VNFRTYPEDef }, 

        outPort : { type: 'number' }, 

        vnfdName : { type: 'string' }, 

        vnfrName : { type: 'string' }, 

        sfcId : { type: 'number' }

    }),
    toString:()=>{
        return 'VnfrDTO';
    }
};



