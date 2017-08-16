'use strict';

//Model Definition File for CONNECTION_TYPE.js

'use strict';
/**
* Bağlantının hangi 2 tip cihaz arasında kurulduğunu belirten ENUM değeridir. | Adı          | Açıklama           | |:-------------|:-------------------| | OF_SWITCH    | OpenFlow Switch    | | OF_LEGACY    | OpenFlow - Legacy  | | OTHER        | Diğer              | 
*/
exports.CONNECTION_TYPE = {
    type:'enum',
    name:'CONNECTION_TYPE',
    values: ['OF_SWITCH', 'OF_LEGACY', 'OTHER']
}

