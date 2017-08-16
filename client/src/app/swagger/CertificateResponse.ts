//imports start CertificateResponse

import {CertificateDTO,CertificateDTODef} from "./CertificateDTO";
import {GenericResponse,GenericResponseDef} from "./GenericResponse";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface CertificateResponse extends GenericResponse {
   data: CertificateDTO;

}


export var CertificateResponseDef:IModelDef = {
    meta: {
        className: 'CertificateResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        data : { type: CertificateDTODef, required: true }

    }),
    toString:()=>{
        return 'CertificateResponse';
    }
};



