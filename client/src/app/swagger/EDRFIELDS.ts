//imports start EDRFIELDS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* EDR tarafından kullanılan alanları belirten ENUM&#39;dur\nDeğerleri şunlardır;\n+ timeStart\n+ timeEnd\n+ status\n+ userId\n+ sourceIp\n+ destinationIp\n+ sourceMAC\n+ destinationMAC\n+ sourcePort\n+ destinationPort\n+ protocol\n+ xid\n+ moduleId\n+ data
*/
export enum EDRFIELDS {
    TIMESTART = <any>'TIMESTART', 
    TIMEEND = <any>'TIMEEND', 
    STATUS = <any>'STATUS', 
    USERID = <any>'USERID', 
    SOURCEIP = <any>'SOURCEIP', 
    DESTINATIONIP = <any>'DESTINATIONIP', 
    SOURCEMAC = <any>'SOURCEMAC', 
    DESTINATIONMAC = <any>'DESTINATIONMAC', 
    SOURCEPORT = <any>'SOURCEPORT', 
    DESTINATIONPORT = <any>'DESTINATIONPORT', 
    PROTOCOL = <any>'PROTOCOL', 
    XID = <any>'XID', 
    MODULEID = <any>'MODULEID', 
    DATA = <any>'DATA'

}

export var EDRFIELDSDef:IModelDef = {
    meta: {
        className: 'EDRFIELDS',
        isObject: false,
        isEnum: true,
    },
    map: {
    TIMESTART : 1, 
    TIMEEND : 2, 
    STATUS : 3, 
    USERID : 4, 
    SOURCEIP : 5, 
    DESTINATIONIP : 6, 
    SOURCEMAC : 7, 
    DESTINATIONMAC : 8, 
    SOURCEPORT : 9, 
    DESTINATIONPORT : 10, 
    PROTOCOL : 11, 
    XID : 12, 
    MODULEID : 13, 
    DATA : 14

    },
    toString:()=>{
        return 'EDRFIELDS';
    }
}

