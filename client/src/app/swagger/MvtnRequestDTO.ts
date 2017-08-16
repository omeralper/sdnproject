//imports start MvtnRequestDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MVTNREQUESTSTATUS,MVTNREQUESTSTATUSDef} from "./MVTNREQUESTSTATUS";
import {MVTNTYPE,MVTNTYPEDef} from "./MVTNTYPE";
import {TopologyDTO,TopologyDTODef} from "./TopologyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnRequestDTO extends BaseDTO {
   
    /**
    * Talebin son güncellenme zamanı
    */
    lastUpdateDate?: Date;
   
    /**
    * Talebin ait olduğu sanal ağ ismi
    */
    mvtnName?: string;
   
    /**
    * Sanal ağ talep değiştirilebilirliğnini bilgisi.
    */
    mvtnType?: MVTNTYPE;
   
    /**
    * Talebin ait olduğu sanal ağ id bilgisi
    */
    mvtnId?: number;
   
    /**
    * Sanal ağ talebi topoloji bilgisi.
    */
    topologyData?: TopologyDTO;
   
    /**
    * Talebin yaratılma zamanı
    */
    creationDate?: Date;
   
    /**
    * Sanal ağ talep statüsü
    */
    status?: MVTNREQUESTSTATUS;
   
    /**
    * Sanal ağ talebini yapan kişi bilgisi
    */
    username?: string;

}


export var MvtnRequestDTODef:IModelDef = {
    meta: {
        className: 'MvtnRequestDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        lastUpdateDate : { type: 'Date' }, 

        mvtnName : { type: 'string' }, 

        mvtnType : { type: MVTNTYPEDef }, 

        mvtnId : { type: 'number' }, 

        topologyData : { type: TopologyDTODef }, 

        creationDate : { type: 'Date' }, 

        status : { type: MVTNREQUESTSTATUSDef }, 

        username : { type: 'string' }

    }),
    toString:()=>{
        return 'MvtnRequestDTO';
    }
};



