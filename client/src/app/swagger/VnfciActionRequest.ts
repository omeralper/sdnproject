//imports start VnfciActionRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface VnfciActionRequest extends GenericRequest {
   
    /**
    * Bu objede eger stopByIp&startByIp cagiriliacaksa zorunlu
    */
    vimId: string;
   
    /**
    * Bu objede eger start&stop cagiriliacaksa zorunlu
    */
    vnfrId: string;
   
    /**
    * Bu objede eger stopByIp&startByIp cagiriliacaksa zorunlu
    */
    ipAddress: string;
   
    /**
    * Bu objede eger start&stop cagiriliacaksa zorunlu
    */
    nsrId: string;
   
    /**
    * Bu objede eger start&stop cagiriliacaksa zorunlu
    */
    vduId: string;
   
    /**
    * Bu objede eger start&stop cagiriliacaksa zorunlu
    */
    vnfciId: string;

}


export var VnfciActionRequestDef:IModelDef = {
    meta: {
        className: 'VnfciActionRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        vimId : { type: 'string', required: true }, 

        vnfrId : { type: 'string', required: true }, 

        ipAddress : { type: 'string', required: true }, 

        nsrId : { type: 'string', required: true }, 

        vduId : { type: 'string', required: true }, 

        vnfciId : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'VnfciActionRequest';
    }
};



