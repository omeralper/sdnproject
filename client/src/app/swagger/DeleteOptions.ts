//imports start DeleteOptions

import {AbstractDeleteOptions,AbstractDeleteOptionsDef} from "./AbstractDeleteOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface DeleteOptions extends AbstractDeleteOptions {

}


export var DeleteOptionsDef:IModelDef = {
    meta: {
        className: 'DeleteOptions',
        parentClassName: 'AbstractDeleteOptions', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, AbstractDeleteOptionsDef.fields,  {

    }),
    toString:()=>{
        return 'DeleteOptions';
    }
};



