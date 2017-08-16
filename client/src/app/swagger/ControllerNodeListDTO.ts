//imports start ControllerNodeListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ControllerNodeDTO,ControllerNodeDTODef} from "./ControllerNodeDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ControllerNodeListDTO extends BaseListDTO {
   
    /**
    * Controller profillerinin listesi.
    */
    list?: Array<ControllerNodeDTO>;

}


export var ControllerNodeListDTODef:IModelDef = {
    meta: {
        className: 'ControllerNodeListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        list : { type: 'Array' }

    }),
    toString:()=>{
        return 'ControllerNodeListDTO';
    }
};



