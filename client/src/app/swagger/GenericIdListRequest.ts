//imports start GenericIdListRequest

import {GenericRequest,GenericRequestDef} from "./GenericRequest";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface GenericIdListRequest extends GenericRequest {
   
    /**
    * ID listesi
    */
    idList: Array<string>;

}


export var GenericIdListRequestDef:IModelDef = {
    meta: {
        className: 'GenericIdListRequest',
        parentClassName: 'GenericRequest', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericRequestDef.fields,  {

        idList : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'GenericIdListRequest';
    }
};



