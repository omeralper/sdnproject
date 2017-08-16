//imports start TopologyListOptions

import {AbstractListOptions,AbstractListOptionsDef} from "./AbstractListOptions";
import {TOPOLOGYTYPE,TOPOLOGYTYPEDef} from "./TOPOLOGYTYPE";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TopologyListOptions extends AbstractListOptions {
   
    /**
    * Listelenmek istenen topolojilerin tipini belirtmek için kullanılır.
    */
    topologyType: TOPOLOGYTYPE;

}


export var TopologyListOptionsDef:IModelDef = {
    meta: {
        className: 'TopologyListOptions',
        parentClassName: 'AbstractListOptions', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, AbstractListOptionsDef.fields,  {

        topologyType : { type: TOPOLOGYTYPEDef, required: true }

    }),
    toString:()=>{
        return 'TopologyListOptions';
    }
};



