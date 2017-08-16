//imports start CertificateRequest

import {CertificateRequestDTO,CertificateRequestDTODef} from "./CertificateRequestDTO";
import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface CertificateRequest extends GenericRequest {
   data: CertificateRequestDTO;

}


export var CertificateRequestDef:IModelDef = {
    meta: {
        className: 'CertificateRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        data : { type: CertificateRequestDTODef, required: true }

    }),
    toString:()=>{
        return 'CertificateRequest';
    }
};



