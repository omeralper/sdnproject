//imports start SubSwitchDTO

import {SwitchDTO,SwitchDTODef} from "./SwitchDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface SubSwitchDTO extends SwitchDTO {
   
    /**
    * Sanal ağ anahtarlayıcısı mı?
    */
    isMvtnSwitch: boolean;
   
    /**
    * Sanal ağ anahtarlayıcısı ise sanal ağ anahtarlayıcısı tekil (primary key) değeridir
    */
    mvtnDeviceId?: string;
   
    /**
    * Sanal ağ tarafından kullanılan bir anahtarlayıcı mı?
    */
    isMvtnUsed: boolean;

}


export var SubSwitchDTODef:IModelDef = {
    meta: {
        className: 'SubSwitchDTO',
        parentClassName: 'SwitchDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, SwitchDTODef.fields,  {

        isMvtnSwitch : { type: 'boolean', required: true }, 

        mvtnDeviceId : { type: 'string' }, 

        isMvtnUsed : { type: 'boolean', required: true }

    }),
    toString:()=>{
        return 'SubSwitchDTO';
    }
};



