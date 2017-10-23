//imports start SdnipActionDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";
import {SDNIPROUTEACTION,SDNIPROUTEACTIONDef} from "./SDNIPROUTEACTION";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SdnipActionDTO extends BaseDTO {
   
    /**
    * Giriş-çıkış izni
    */
    routeAction: SDNIPROUTEACTION;

}


export var SdnipActionDTODef:IModelDef = {
    meta: {
        className: 'SdnipActionDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        routeAction : { type: SDNIPROUTEACTIONDef, required: true }

    }),
    toString:()=>{
        return 'SdnipActionDTO';
    }
};



