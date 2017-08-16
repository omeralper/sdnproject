//imports start CertificateDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface CertificateDTO extends BaseDTO {
   
    /**
    * Sertifikaların bulunduğu zip dosyası.
    */
    zipFile: string;

}


export var CertificateDTODef:IModelDef = {
    meta: {
        className: 'CertificateDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        zipFile : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'CertificateDTO';
    }
};



