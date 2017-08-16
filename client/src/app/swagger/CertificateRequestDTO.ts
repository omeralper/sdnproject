//imports start CertificateRequestDTO

import {AddressInfo,AddressInfoDef} from "./AddressInfo";
import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {CERTIFICATETYPE,CERTIFICATETYPEDef} from "./CERTIFICATETYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface CertificateRequestDTO extends BaseDTO {
   
    /**
    * Sertifika öznesinin adı.
    */
    name: string;
   
    /**
    * Sertifika üretilen makineye  ait kontrol adres bilgilerinin bulunduğu veri yapısı. (IPv4,IPv6,MAC)
    */
    address?: AddressInfo;
   
    /**
    * Sertifika istenilen düğümün tipi.
    */
    nodeType: CERTIFICATETYPE;
   
    /**
    * Sertifika dosya yapısına yazılsın mı? 'True' ise kaydedilecektir.
    */
    isSaved?: boolean;

}


export var CertificateRequestDTODef:IModelDef = {
    meta: {
        className: 'CertificateRequestDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string', required: true }, 

        address : { type: AddressInfoDef }, 

        nodeType : { type: CERTIFICATETYPEDef, required: true }, 

        isSaved : { type: 'boolean' }

    }),
    toString:()=>{
        return 'CertificateRequestDTO';
    }
};



