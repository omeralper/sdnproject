//imports start FlowStatFilter



import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Akış istatistiklerinin hepsini değil de sadece eşleşme alanları belirtilen değerlerde olanları almaya yarar
*/
export interface FlowStatFilter {
   
    /**
    * a.b.c.d biçiminde IPv4 kaynak adresi
    */
    srcIP?: string;
   
    /**
    * a.b.c.d biçiminde IPv4 hedef adresi
    */
    dstIP?: string;
   
    /**
    * tcp, udp, veya internet taşıyıcı protokollerinden biri
    */
    protocol?: string;
   srcPort?: number;
   dstPort?: number;
   
    /**
    * anahtarlayıcı limlik numarası. örneğin of:000000000007'nin kimlik numarası 7'dir
    */
    device?: number;

}


export var FlowStatFilterDef:IModelDef = {
    meta: {
        className: 'FlowStatFilter',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        srcIP : { type: 'string' }, 

        dstIP : { type: 'string' }, 

        protocol : { type: 'string' }, 

        srcPort : { type: 'number' }, 

        dstPort : { type: 'number' }, 

        device : { type: 'number' }

    },
    toString:()=>{
        return 'FlowStatFilter';
    }
};



