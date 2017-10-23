//imports start AbstractSearchOptions

import {AbstractListOptions,AbstractListOptionsDef} from "./AbstractListOptions";
import {QueryOptions,QueryOptionsDef} from "./QueryOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface AbstractSearchOptions extends AbstractListOptions {
   queryOptions?: QueryOptions;

}


export var AbstractSearchOptionsDef:IModelDef = {
    meta: {
        className: 'AbstractSearchOptions',
        parentClassName: 'AbstractListOptions', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, AbstractListOptionsDef.fields,  {

        queryOptions : { type: QueryOptionsDef }

    }),
    toString:()=>{
        return 'AbstractSearchOptions';
    }
};



