//imports start SortOptions

import {AbstractSortOptions,AbstractSortOptionsDef} from "./AbstractSortOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SortOptions extends AbstractSortOptions {

}


export var SortOptionsDef:IModelDef = {
    meta: {
        className: 'SortOptions',
        parentClassName: 'AbstractSortOptions', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, AbstractSortOptionsDef.fields,  {

    }),
    toString:()=>{
        return 'SortOptions';
    }
};



