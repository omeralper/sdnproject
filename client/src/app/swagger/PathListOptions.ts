//imports start PathListOptions

import {AbstractListOptions,AbstractListOptionsDef} from "./AbstractListOptions";
import {PathDTO,PathDTODef} from "./PathDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface PathListOptions extends AbstractListOptions {
   data?: PathDTO;

}


export var PathListOptionsDef:IModelDef = {
    meta: {
        className: 'PathListOptions',
        parentClassName: 'AbstractListOptions', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, AbstractListOptionsDef.fields,  {

        data : { type: PathDTODef }

    }),
    toString:()=>{
        return 'PathListOptions';
    }
};



