//imports start ALARMSOURCE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Alarm kaynak tipi
*/
export enum ALARMSOURCE {
    CONTROLLER = <any>'CONTROLLER', 
    DATABASE = <any>'DATABASE', 
    TOPOLOGY = <any>'TOPOLOGY', 
    MVTN = <any>'MVTN', 
    NAC = <any>'NAC', 
    TSDB_SERVICE = <any>'TSDB_SERVICE', 
    LOOP_DETECTION = <any>'LOOP_DETECTION', 
    FLOW_STAT = <any>'FLOW_STAT', 
    MONITOR = <any>'MONITOR', 
    PATHVALIDATION = <any>'PATHVALIDATION', 
    NONE = <any>'NONE', 
    POLICY_MANAGER = <any>'POLICY_MANAGER', 
    POWER_SAVER = <any>'POWER_SAVER', 
    PPP_MANAGER = <any>'PPP_MANAGER', 
    SNMP_TRAP = <any>'SNMP_TRAP', 
    PACKET_PROCESSOR = <any>'PACKET_PROCESSOR', 
    RABBIT_MQ = <any>'RABBIT_MQ', 
    RADIUS_SERVER = <any>'RADIUS_SERVER', 
    LDAP_CLIENT = <any>'LDAP_CLIENT', 
    SSL_AUTH = <any>'SSL_AUTH', 
    UNALLOWED_DEVICE = <any>'UNALLOWED_DEVICE', 
    WAN = <any>'WAN', 
    SDNIP = <any>'SDNIP', 
    INTEGRITY = <any>'INTEGRITY', 
    WAN_PORT = <any>'WAN_PORT', 
    IDS = <any>'IDS', 
    SYSLOG = <any>'SYSLOG'

}

export var ALARMSOURCEDef:IModelDef = {
    meta: {
        className: 'ALARMSOURCE',
        isObject: false,
        isEnum: true,
    },
    map: {
    CONTROLLER : 1, 
    DATABASE : 2, 
    TOPOLOGY : 3, 
    MVTN : 4, 
    NAC : 5, 
    TSDB_SERVICE : 6, 
    LOOP_DETECTION : 7, 
    FLOW_STAT : 8, 
    MONITOR : 9, 
    PATHVALIDATION : 10, 
    NONE : 11, 
    POLICY_MANAGER : 12, 
    POWER_SAVER : 13, 
    PPP_MANAGER : 14, 
    SNMP_TRAP : 15, 
    PACKET_PROCESSOR : 16, 
    RABBIT_MQ : 17, 
    RADIUS_SERVER : 18, 
    LDAP_CLIENT : 19, 
    SSL_AUTH : 20, 
    UNALLOWED_DEVICE : 21, 
    WAN : 22, 
    SDNIP : 23, 
    INTEGRITY : 24, 
    WAN_PORT : 25, 
    IDS : 26, 
    SYSLOG : 27

    },
    toString:()=>{
        return 'ALARMSOURCE';
    }
}

