'use strict';

//Model Definition File for OPTION_TYPE.js

'use strict';
/**
* DhcpOption türünü belirtir. Değerler şunlardır: | Adı             | Açıklama                             | |-----------------|--------------------------------------| | NUMBER          | DhcpOption türü &#x3D; Integer veya Long  | | STRING          | DhcpOption türü &#x3D; String             | | IP_ADDRESS      | DhcpOption türü &#x3D; Ip Addresi         | | DATE_TIME       | DhcpOption türü &#x3D;  tarih / zaman     | 
*/
exports.OPTION_TYPE = {
    type:'enum',
    name:'OPTION_TYPE',
    values: ['NUMBER', 'STRING', 'IP_ADDRESS', 'DATE_TIME']
}

