//imports start FlowSearchOptions

import {AbstractSearchOptions,AbstractSearchOptionsDef} from "./AbstractSearchOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowSearchOptions extends AbstractSearchOptions {
   
    /**
    * Akışlarda arama yapılacak anahtarlayıcıya ait ID değeri.
    */
    id: string;

}


export var FlowSearchOptionsDef:IModelDef = {
    meta: {
        className: 'FlowSearchOptions',
        parentClassName: 'AbstractSearchOptions', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, AbstractSearchOptionsDef.fields,  {

        id : { type: 'string', required: true }

    }),
    toString:()=>{
        return 'FlowSearchOptions';
    }
};



