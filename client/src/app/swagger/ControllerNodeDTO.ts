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
    * nm düğüm id'si
    */
    nmNodeId?: string;
   
    /**
    * Düğüm yöneten portu
    */
    managementPort?: string;
   
    /**
    * Görevler listesinin gösterilip gösterilmeyeceği bilgisi.
    */
    featureVisible?: boolean;
   
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

        clusterId : { type: 'string' }, 

        type : { type: CONTROLLERNODETYPEDef }, 

        openflowVersions : { type: 'string' }, 

        nmNodeId : { type: 'string' }, 

        managementPort : { type: 'string' }, 

        featureVisible : { type: 'boolean' }, 

        name : { type: 'string', required: true }, 

        deviceList : { type: 'Array' }, 

        location : { type: 'string' }, 

        status : { type: CONTROLLERSTATUSDef }

    }),
    toString:()=>{
        return 'ControllerNodeDTO';
    }
};



