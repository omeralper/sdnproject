'use strict';

//Model Definition File for IP_VERSION_TYPE.js

'use strict';
/**
* IP versiyon türünü belirtir. Değerler şunlardır: | Adı             | Açıklama                   | |-----------------|----------------------------| | IPV4            | Ip versiyonu &#x3D; ipv4        | | IPV6            | Ip versiyonu &#x3D; ipv6        | 
*/
exports.IP_VERSION_TYPE = {
    type:'enum',
    name:'IP_VERSION_TYPE',
    values: ['IPV4', 'IPV6']
}

