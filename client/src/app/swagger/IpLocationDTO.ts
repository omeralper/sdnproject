//imports start IpLocationDTO

import {BaseDTO,BaseDTODef} from "./BaseDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface IpLocationDTO extends BaseDTO {
   
    /**
    * IP lokasyonun ismi
    */
    name: string;
   
    /**
    * IP listesi
    */
    ipList: Array<string>;
   
    /**
    * Lokasyonun cografi enlem bilgisi
    */
    latitude?: string;
   
    /**
    * Lokasyonun cografi boylam bilgisi
    */
    longitude?: string;

}


export var IpLocationDTODef:IModelDef = {
    meta: {
        className: 'IpLocationDTO',
        parentClassName: 'BaseDTO', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, BaseDTODef.fields,  {

        name : { type: 'string', required: true }, 

        ipList : { type: 'Array', required: true }, 

        latitude : { type: 'string' }, 

        longitude : { type: 'string' }

    }),
    toString:()=>{
        return 'IpLocationDTO';
    }
};



