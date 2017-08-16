//imports start ControllerNodeDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CONTROLLERNODETYPE,CONTROLLERNODETYPEDef} from "./CONTROLLERNODETYPE";
import {CONTROLLERSTATUS,CONTROLLERSTATUSDef} from "./CONTROLLERSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ControllerNodeDTO extends BaseDTO {
   
    /**
    * Düğüm yönetici adresi
    */
    managementAddress?: string;
   
    /**
    * kontrolcü düğüm idsi
    */
    controllerNodeId?: string;
   
    /**
    * nm düğüm id'si
    */
    nmNodeId?: string;
   
    /**
    * Düğüm yöneten portu
    */
    managementPort?: string;
   
    /**
    * Düğüm Adı.
    */
    name: string;
   deviceList?: Array<string>;
   
    /**
    * Düğüm lokasyonu
    */
    location?: string;
   
    /**
    * küme id'si
    */
    clusterId?: string;
   
    /**
    * Düğüm Tipi.
    */
    type?: CONTROLLERNODETYPE;
   
    /**
    * Kontrolcünün konuştuğu openflow versiyonları.
    */
    openflowVersions?: string;
   
    /**
    * Düğüm Durumu.
    */
    status?: CONTROLLERSTATUS;

}


export var ControllerNodeDTODef:IModelDef = {
    meta: {
        className: 'ControllerNodeDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        managementAddress : { type: 'string' }, 

        controllerNodeId : { type: 'string' }, 

        nmNodeId : { type: 'string' }, 

        managementPort : { type: 'string' }, 

        name : { type: 'string', required: true }, 

        deviceList : { type: 'Array' }, 

        location : { type: 'string' }, 

        clusterId : { type: 'string' }, 

        type : { type: CONTROLLERNODETYPEDef }, 

        openflowVersions : { type: 'string' }, 

        status : { type: CONTROLLERSTATUSDef }

    }),
    toString:()=>{
        return 'ControllerNodeDTO';
    }
};



