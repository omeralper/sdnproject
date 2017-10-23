//imports start MvtnRequestDeleteDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface MvtnRequestDeleteDTO extends BaseDTO {
   
    /**
    * Silinecek sanal ağ taleplerinin bilgilerinin bulunduğu liste bilgisi
    */
    deleteIdList?: Array<number>;

}


export var MvtnRequestDeleteDTODef:IModelDef = {
    meta: {
        className: 'MvtnRequestDeleteDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        deleteIdList : { type: 'Array' }

    }),
    toString:()=>{
        return 'MvtnRequestDeleteDTO';
    }
};



