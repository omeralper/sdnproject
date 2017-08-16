//imports start ALARMRESOURCE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alarmın sebep tipi
*/
export enum ALARMRESOURCE {
    DEVICE = <any>'DEVICE', 
    CONTROLLER = <any>'CONTROLLER', 
    MVTN_LINK = <any>'MVTN_LINK', 
    LINK = <any>'LINK', 
    MVTN_DEVICE = <any>'MVTN_DEVICE', 
    DB = <any>'DB', 
    NAS_MANAGER = <any>'NAS_MANAGER', 
    TSDB_PROVIDER = <any>'TSDB_PROVIDER', 
    HBASE = <any>'HBASE', 
    MONITOR = <any>'MONITOR', 
    PATHVLIDATION = <any>'PATHVLIDATION', 
    NONE = <any>'NONE', 
    POLICY_MANAGER = <any>'POLICY_MANAGER', 
    PPP_MANAGER = <any>'PPP_MANAGER', 
    SNMP_TRAP = <any>'SNMP_TRAP', 
    PACKET_PROCESSOR = <any>'PACKET_PROCESSOR', 
    RABBIT_MQ = <any>'RABBIT_MQ', 
    RADIUS_SERVER = <any>'RADIUS_SERVER', 
    LDAP_CLIENT = <any>'LDAP_CLIENT', 
    SSL_AUTH = <any>'SSL_AUTH', 
    UNALLOWED_DEVICE = <any>'UNALLOWED_DEVICE', 
    LOCAL_CONTROLLER = <any>'LOCAL_CONTROLLER', 
    CENTRAL_CONTROLLER = <any>'CENTRAL_CONTROLLER', 
    DRILL = <any>'DRILL', 
    SDNIP = <any>'SDNIP', 
    INTEGRITY = <any>'INTEGRITY', 
    EMERGENCY_POLICY = <any>'EMERGENCY_POLICY'

}

export var ALARMRESOURCEDef:IModelDef = {
    meta: {
        className: 'ALARMRESOURCE',
        isObject: false,
        isEnum: true,
    },
    map: {
    DEVICE : 1, 
    CONTROLLER : 2, 
    MVTN_LINK : 3, 
    LINK : 4, 
    MVTN_DEVICE : 5, 
    DB : 6, 
    NAS_MANAGER : 7, 
    TSDB_PROVIDER : 8, 
    HBASE : 9, 
    MONITOR : 10, 
    PATHVLIDATION : 11, 
    NONE : 12, 
    POLICY_MANAGER : 13, 
    PPP_MANAGER : 14, 
    SNMP_TRAP : 15, 
    PACKET_PROCESSOR : 16, 
    RABBIT_MQ : 17, 
    RADIUS_SERVER : 18, 
    LDAP_CLIENT : 19, 
    SSL_AUTH : 20, 
    UNALLOWED_DEVICE : 21, 
    LOCAL_CONTROLLER : 22, 
    CENTRAL_CONTROLLER : 23, 
    DRILL : 24, 
    SDNIP : 25, 
    INTEGRITY : 26, 
    EMERGENCY_POLICY : 27

    },
    toString:()=>{
        return 'ALARMRESOURCE';
    }
}

