//imports start SdnipRouteListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {SdnipRouteDTO,SdnipRouteDTODef} from "./SdnipRouteDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipRouteListDTO extends BaseListDTO {
   
    /**
    * Sdnip rotalarının bulunduğu listedir.
    */
    list: Array<SdnipRouteDTO>;

}


export var SdnipRouteListDTODef:IModelDef = {
    meta: {
        className: 'SdnipRouteListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'SdnipRouteListDTO';
    }
};



