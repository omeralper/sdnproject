//imports start NacDeviceDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {HOSTTYPE,HOSTTYPEDef} from "./HOSTTYPE";
import {NACSTATUS,NACSTATUSDef} from "./NACSTATUS";
import {NacAccessPortDTO,NacAccessPortDTODef} from "./NacAccessPortDTO";
import {NacGroupDTO,NacGroupDTODef} from "./NacGroupDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacDeviceDTO extends BaseDTO {
   
    /**
    * Cihaz hakkında alınabilecek notlar için ayrılmış alan.
    */
    notes?: string;
   
    /**
    * Cihazın NAC Grup DTO nesnesi. Bu alanın boş(null) olması durumunda cihaz'da kimlik denetimi kapalı olacaktır.
    */
    nacGroup?: NacGroupDTO;
   
    /**
    * Cihazın oluşturulduğu tarih.
    */
    created?: Date;
   
    /**
    * Sanal ağ ismi.
    */
    mvtnName?: string;
   
    /**
    * Sanal ağ idsi
    */
    mvtnId?: number;
   
    /**
    * Cihaz tipi.
    */
    type: HOSTTYPE;
   
    /**
    * Cihaz mac adresi.
    */
    mac: string;
   
    /**
    * Cihazın güvenlik seviyesi.
    */
    securityLevel: number;
   
    /**
    * Cihaz ip'si.
    */
    ipv4: string;
   
    /**
    * Cihaz adı.
    */
    name?: string;
   
    /**
    * Kimlik denetimi dışı olup olmama bilgisi.
    */
    isExempt: boolean;
   
    /**
    * Cihazın son güncellendiği tarih.
    */
    modified?: Date;
   
    /**
    * Cihazın erişim yetkisi olduğu erişim portlarının listesi.
    */
    accessPortList?: Array<NacAccessPortDTO>;
   
    /**
    * Cihaz sağlık durumu.
    */
    status: NACSTATUS;

}


export var NacDeviceDTODef:IModelDef = {
    meta: {
        className: 'NacDeviceDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        notes : { type: 'string' }, 

        nacGroup : { type: NacGroupDTODef }, 

        created : { type: 'Date' }, 

        mvtnName : { type: 'string' }, 

        mvtnId : { type: 'number' }, 

        type : { type: HOSTTYPEDef, required: true }, 

        mac : { type: 'string', required: true }, 

        securityLevel : { type: 'number', required: true }, 

        ipv4 : { type: 'string', required: true }, 

        name : { type: 'string' }, 

        isExempt : { type: 'boolean', required: true }, 

        modified : { type: 'Date' }, 

        accessPortList : { type: 'Array' }, 

        status : { type: NACSTATUSDef, required: true }

    }),
    toString:()=>{
        return 'NacDeviceDTO';
    }
};



