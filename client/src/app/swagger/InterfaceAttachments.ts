//imports start InterfaceAttachments

import {InterfaceAttachment,InterfaceAttachmentDef} from "./InterfaceAttachment";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* InterfaceAttachment listesini tutan obje
*/
export interface InterfaceAttachments {
   
    /**
    * 
    */
    interfaceAttachment?: Array<InterfaceAttachment>;

}


export var InterfaceAttachmentsDef:IModelDef = {
    meta: {
        className: 'InterfaceAttachments',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        interfaceAttachment : { type: 'Array' }

    },
    toString:()=>{
        return 'InterfaceAttachments';
    }
};



