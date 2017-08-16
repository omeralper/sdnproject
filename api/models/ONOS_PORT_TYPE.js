'use strict';

//Model Definition File for ONOS_PORT_TYPE.js

'use strict';
/**
* PortType nesnesine karşılık gelen ENUM değerleri. Değerler şunlardır;  | Adı      | Açıklama                               | |:---------|:---------------------------------------| | UNKNOWN  | Bilinmeyen port tipi                   | | COPPER   | Bakır tabanlı port                     | | FIBER    | Optik fiber tabanlı port               | | PACKET   | Optik fiber tabanlı paket portu        | | ODUCLT   | Optik fiber tabanlı T-port (tributary) | | OCH      | Optik fiber tabanlı L-port (line-side) | | OMS      | Optik fiber tabanlı W-port (WDM)       | | VIRTUAL  | Sanal port                             | | OTU      | Optik fiber tabanlı OTN portu          | 
*/
exports.ONOS_PORT_TYPE = {
    type:'enum',
    name:'ONOS_PORT_TYPE',
    values: ['UNKNOWN', 'COPPER', 'FIBER', 'PACKET', 'ODUCLT', 'OCH', 'OMS', 'VIRTUAL', 'OTU']
}

