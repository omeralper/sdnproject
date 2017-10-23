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
    CONTROLLER_MODE = <any>'CONTROLLER_MODE', 
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
    EMERGENCY_POLICY = <any>'EMERGENCY_POLICY', 
    INTRUSION_DETECTION_SYSTEM = <any>'INTRUSION_DETECTION_SYSTEM', 
    PORT = <any>'PORT', 
    SYSLOG = <any>'SYSLOG'

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
    CONTROLLER_MODE : 3, 
    MVTN_LINK : 4, 
    LINK : 5, 
    MVTN_DEVICE : 6, 
    DB : 7, 
    NAS_MANAGER : 8, 
    TSDB_PROVIDER : 9, 
    HBASE : 10, 
    MONITOR : 11, 
    PATHVLIDATION : 12, 
    NONE : 13, 
    POLICY_MANAGER : 14, 
    PPP_MANAGER : 15, 
    SNMP_TRAP : 16, 
    PACKET_PROCESSOR : 17, 
    RABBIT_MQ : 18, 
    RADIUS_SERVER : 19, 
    LDAP_CLIENT : 20, 
    SSL_AUTH : 21, 
    UNALLOWED_DEVICE : 22, 
    LOCAL_CONTROLLER : 23, 
    CENTRAL_CONTROLLER : 24, 
    DRILL : 25, 
    SDNIP : 26, 
    INTEGRITY : 27, 
    EMERGENCY_POLICY : 28, 
    INTRUSION_DETECTION_SYSTEM : 29, 
    PORT : 30, 
    SYSLOG : 31

    },
    toString:()=>{
        return 'ALARMRESOURCE';
    }
}

