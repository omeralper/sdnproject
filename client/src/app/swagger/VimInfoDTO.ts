//imports start VimInfoDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {ComputeHostInfoDTO,ComputeHostInfoDTODef} from "./ComputeHostInfoDTO";
import {VimLocationDTO,VimLocationDTODef} from "./VimLocationDTO";
import {VimNetworkListDTO,VimNetworkListDTODef} from "./VimNetworkListDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VimInfoDTO extends BaseDTO {
   
    /**
    * VIM'de bulunan ComputeHost'ların butunu
    */
    computeHostList?: Array<ComputeHostInfoDTO>;
   
    /**
    * VIM bilgisinin bulundugu yer/lokasyon
    */
    vimLocation: VimLocationDTO;
   
    /**
    * 
    */
    name?: string;
   
    /**
    * 
    */
    active?: boolean;
   
    /**
    * Ağ servis tanımı adı
    */
    type?: string;
   
    /**
    * 
    */
    projectId?: string;
   
    /**
    * VIM bilgisinde bulunan ag listesi
    */
    vimNetworks: VimNetworkListDTO;
   
    /**
    * 
    */
    vimInstanceName?: string;

}


export var VimInfoDTODef:IModelDef = {
    meta: {
        className: 'VimInfoDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        computeHostList : { type: 'Array' }, 

        vimLocation : { type: VimLocationDTODef, required: true }, 

        name : { type: 'string' }, 

        active : { type: 'boolean' }, 

        type : { type: 'string' }, 

        projectId : { type: 'string' }, 

        vimNetworks : { type: VimNetworkListDTODef, required: true }, 

        vimInstanceName : { type: 'string' }

    }),
    toString:()=>{
        return 'VimInfoDTO';
    }
};



