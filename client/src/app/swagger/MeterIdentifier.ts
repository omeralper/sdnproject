//imports start MeterIdentifier



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* OF meter kimliği
*/
export interface MeterIdentifier {
   deviceId: string;
   meterId: number;

}


export var MeterIdentifierDef:IModelDef = {
    meta: {
        className: 'MeterIdentifier',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        deviceId : { type: 'string', required: true }, 

        meterId : { type: 'number', required: true }

    },
    toString:()=>{
        return 'MeterIdentifier';
    }
};



