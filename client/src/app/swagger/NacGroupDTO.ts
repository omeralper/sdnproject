//imports start NacGroupDTO

import {AAAServerDTO,AAAServerDTODef} from "./AAAServerDTO";
import {AccessProfileDTO,AccessProfileDTODef} from "./AccessProfileDTO";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {MvtnDTO,MvtnDTODef} from "./MvtnDTO";
import {NACENTITYTYPE,NACENTITYTYPEDef} from "./NACENTITYTYPE";
import {NACSTATUS,NACSTATUSDef} from "./NACSTATUS";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface NacGroupDTO extends BaseDTO {
   
    /**
    * Nac Grup tipi.
    */
    groupType: NACENTITYTYPE;
   
    /**
    * Nac Grup hakkında alınabilecek notlar için ayrılmış alan.
    */
    notes?: string;
   
    /**
    * Nac Grupun oluşturulduğu tarih.
    */
    created?: Date;
   
    /**
    * Kimlik Denetim Sunucusu.
    */
    aaaServer?: AAAServerDTO;
   
    /**
    * nacgroupid başına online user sayısı
    */
    onlineUserNumber?: number;
   
    /**
    * Otomatik BYOD ekleme izni.(true) izin var, (false) izin yok.
    */
    allowAutoBYOD?: boolean;
   
    /**
    * Sanal ağ ismi.
    */
    mvtnName?: string;
   
    /**
    * Sanal ağ idsi.
    */
    mvtnId?: number;
   
    /**
    * Nac Group öncelik seviyesi.
    */
    priority?: number;
   
    /**
    * Gruba ilişkili sanal ağ
    */
    virtualNetwork?: MvtnDTO;
   
    /**
    * Nac Grup adı.
    */
    name: string;
   
    /**
    * Nac Grupun son güncellendiği tarih.
    */
    modified?: Date;
   
    /**
    * Erişim Kontrol Politikası.
    */
    accessPolicy: AccessProfileDTO;
   
    /**
    * NacGroup a bağlı kullanıcı sayısı.
    */
    userNumber?: number;
   
    /**
    * Nac Grup durumu.
    */
    status: NACSTATUS;

}


export var NacGroupDTODef:IModelDef = {
    meta: {
        className: 'NacGroupDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        groupType : { type: NACENTITYTYPEDef, required: true }, 

        notes : { type: 'string' }, 

        created : { type: 'Date' }, 

        aaaServer : { type: AAAServerDTODef }, 

        onlineUserNumber : { type: 'number' }, 

        allowAutoBYOD : { type: 'boolean' }, 

        mvtnName : { type: 'string' }, 

        mvtnId : { type: 'number' }, 

        priority : { type: 'number' }, 

        virtualNetwork : { type: MvtnDTODef }, 

        name : { type: 'string', required: true }, 

        modified : { type: 'Date' }, 

        accessPolicy : { type: AccessProfileDTODef, required: true }, 

        userNumber : { type: 'number' }, 

        status : { type: NACSTATUSDef, required: true }

    }),
    toString:()=>{
        return 'NacGroupDTO';
    }
};



