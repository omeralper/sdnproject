//imports start MeterIdListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";
import {MeterIdentifier,MeterIdentifierDef} from "./MeterIdentifier";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MeterIdListRequest extends GenericRequest {
   
    /**
    * ID listesi
    */
    idList: Array<MeterIdentifier>;

}


export var MeterIdListRequestDef:IModelDef = {
    meta: {
        className: 'MeterIdListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        idList : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'MeterIdListRequest';
    }
};



