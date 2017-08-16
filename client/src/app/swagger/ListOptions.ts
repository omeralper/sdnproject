//imports start ListOptions

import {AbstractListOptions,AbstractListOptionsDef} from "./AbstractListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ListOptions extends AbstractListOptions {

}


export var ListOptionsDef:IModelDef = {
    meta: {
        className: 'ListOptions',
        parentClassName: 'AbstractListOptions', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, AbstractListOptionsDef.fields,  {

    }),
    toString:()=>{
        return 'ListOptions';
    }
};



