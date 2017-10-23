'use strict';

//Model Definition File for ALARM_SOURCE.js

'use strict';
/**
* Alarm kaynak tipi
*/
exports.ALARM_SOURCE = {
    type:'enum',
    name:'ALARM_SOURCE',
    values: ['CONTROLLER', 'DATABASE', 'TOPOLOGY', 'MVTN', 'NAC', 'TSDB_SERVICE', 'LOOP_DETECTION', 'FLOW_STAT', 'MONITOR', 'PATHVALIDATION', 'NONE', 'POLICY_MANAGER', 'POWER_SAVER', 'PPP_MANAGER', 'SNMP_TRAP', 'PACKET_PROCESSOR', 'RABBIT_MQ', 'RADIUS_SERVER', 'LDAP_CLIENT', 'SSL_AUTH', 'UNALLOWED_DEVICE', 'WAN', 'SDNIP', 'INTEGRITY', 'WAN_PORT', 'IDS', 'SYSLOG']
}

