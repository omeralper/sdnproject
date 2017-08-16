//imports start ComputeHostListDTO

import {BaseListDTO,BaseListDTODef} from "./BaseListDTO";
import {ComputeHostInfoDTO,ComputeHostInfoDTODef} from "./ComputeHostInfoDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface ComputeHostListDTO extends BaseListDTO {
   
    /**
    * Her bir alt Zone bilgilerini tutan dizi
    */
    computeHostList?: Array<ComputeHostInfoDTO>;

}


export var ComputeHostListDTODef:IModelDef = {
    meta: {
        className: 'ComputeHostListDTO',
        parentClassName: 'BaseListDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseListDTODef.fields,  {

        computeHostList : { type: 'Array' }

    }),
    toString:()=>{
        return 'ComputeHostListDTO';
    }
};



