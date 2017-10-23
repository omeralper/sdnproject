//imports start MvtnDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MVTNSTATUS,MVTNSTATUSDef} from "./MVTNSTATUS";
import {MVTNTYPE,MVTNTYPEDef} from "./MVTNTYPE";
import {TopologyDTO,TopologyDTODef} from "./TopologyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnDTO extends BaseDTO {
   
    /**
    * Sanal ağın fiziksel karşılığında üstünden geçilmesi istenmeyen anahtarlayıcı listesi bilgisi
    */
    excludedDevices?: Array<string>;
   
    /**
    * Talebin son güncellenme zamanı
    */
    lastUpdateDate?: Date;
   
    /**
    * Sanal ağ ismi
    */
    name?: string;
   
    /**
    * Talep durumunun değiştirilebilirliğinin belirtildiği enum tipi.
    */
    mvtnType?: MVTNTYPE;
   
    /**
    * Bağlı olduğu geniş alan ağına ait sanal ağın idsi
    */
    wanMvtnId?: number;
   
    /**
    * Talebi yapan kullanıcıya air username bilgisi
    */
    userName?: string;
   
    /**
    * Talebin yaratılma zamanı
    */
    creationDate?: Date;
   
    /**
    * Sanal topologi bilgisi.
    */
    topologyData?: TopologyDTO;
   
    /**
    * Talep durumunun belirtildiği enum tipi.
    */
    mvtnStatus?: MVTNSTATUS;

}


export var MvtnDTODef:IModelDef = {
    meta: {
        className: 'MvtnDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        excludedDevices : { type: 'Array' }, 

        lastUpdateDate : { type: 'Date' }, 

        name : { type: 'string' }, 

        mvtnType : { type: MVTNTYPEDef }, 

        wanMvtnId : { type: 'number' }, 

        userName : { type: 'string' }, 

        creationDate : { type: 'Date' }, 

        topologyData : { type: TopologyDTODef }, 

        mvtnStatus : { type: MVTNSTATUSDef }

    }),
    toString:()=>{
        return 'MvtnDTO';
    }
};



