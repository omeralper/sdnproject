'use strict';

//Model Definition File for EDR_FIELDS.js

'use strict';
/**
* EDR tarafından kullanılan alanları belirten ENUM&#39;dur Değerleri şunlardır; + timeStart + timeEnd + status + userId + sourceIp + destinationIp + sourceMAC + destinationMAC + sourcePort + destinationPort + protocol + xid + moduleId + data 
*/
exports.EDR_FIELDS = {
    type:'enum',
    name:'EDR_FIELDS',
    values: ['TIMESTART', 'TIMEEND', 'STATUS', 'USERID', 'SOURCEIP', 'DESTINATIONIP', 'SOURCEMAC', 'DESTINATIONMAC', 'SOURCEPORT', 'DESTINATIONPORT', 'PROTOCOL', 'XID', 'MODULEID', 'DATA']
}

