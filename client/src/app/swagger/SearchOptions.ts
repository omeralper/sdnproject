//imports start SearchOptions

import {AbstractSearchOptions,AbstractSearchOptionsDef} from "./AbstractSearchOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SearchOptions extends AbstractSearchOptions {

}


export var SearchOptionsDef:IModelDef = {
    meta: {
        className: 'SearchOptions',
        parentClassName: 'AbstractSearchOptions', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, AbstractSearchOptionsDef.fields,  {

    }),
    toString:()=>{
        return 'SearchOptions';
    }
};



