//imports start SubLinkDTO

import {LinkDTO,LinkDTODef} from "./LinkDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SubLinkDTO extends LinkDTO {
   
    /**
    * Sanal bağlantının kullandığı fiziksel bağlantı listesi
    */
    physicalLinks?: Array<LinkDTO>;

}


export var SubLinkDTODef:IModelDef = {
    meta: {
        className: 'SubLinkDTO',
        parentClassName: 'LinkDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, LinkDTODef.fields,  {

        physicalLinks : { type: 'Array' }

    }),
    toString:()=>{
        return 'SubLinkDTO';
    }
};



