//imports start NacUserDeviceDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {NacDeviceDTO,NacDeviceDTODef} from "./NacDeviceDTO";
import {NacGroupDTO,NacGroupDTODef} from "./NacGroupDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacUserDeviceDTO extends BaseDTO {
   
    /**
    * BYOD NAC Grup DTO nesnesi. Bu alanın boş(null) olması durumunda cihaz'da BYOD özelliği olmayacaktır.
    */
    byodNacGroup?: NacGroupDTO;
   
    /**
    * Son Kullanıcı ID değeri.
    */
    nacUserId: string;
   
    /**
    * Atanmış CihazDTO nesnesi.
    */
    nacDevice: NacDeviceDTO;
   
    /**
    * Son kullanıcıya cihaz eklemede BYOD olduğunu belirten parametre. true ise BYOD, false ise değil.
    */
    isBYOD?: boolean;
   
    /**
    * Cihazın 802.1x kimlik denetimi özelliğini desteklemisini belirten alan.(true) 802.1x denetimi var, (false) 802.1x denetimi yok.
    */
    has8021xSupport?: boolean;

}


export var NacUserDeviceDTODef:IModelDef = {
    meta: {
        className: 'NacUserDeviceDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        byodNacGroup : { type: NacGroupDTODef }, 

        nacUserId : { type: 'string', required: true }, 

        nacDevice : { type: NacDeviceDTODef, required: true }, 

        isBYOD : { type: 'boolean' }, 

        has8021xSupport : { type: 'boolean' }

    }),
    toString:()=>{
        return 'NacUserDeviceDTO';
    }
};



