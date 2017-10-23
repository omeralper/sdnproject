//imports start FlowListOptions

import {AbstractListOptions,AbstractListOptionsDef} from "./AbstractListOptions";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface FlowListOptions extends AbstractListOptions {
   
    /**
    * Akışların listeleneceği anahtarlayıcıya ait ID değeri.
    */
    id: string;
   
    /**
    * Akışların listeleneceği sanal ağ anahtarlayıcısına ait ID değeri.
    */
    mvtnNetworkId?: string;

}


export var FlowListOptionsDef:IModelDef = {
    meta: {
        className: 'FlowListOptions',
        parentClassName: 'AbstractListOptions', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, AbstractListOptionsDef.fields,  {

        id : { type: 'string', required: true }, 

        mvtnNetworkId : { type: 'string' }

    }),
    toString:()=>{
        return 'FlowListOptions';
    }
};



