'use strict';

//Model Definition File for PORT_STATE.js

'use strict';
/**
* Anahtarlayıcı Portunun kontrolcü tarafından yapılandırılamayan durum belirten ENUM değeridir. Değerler şunlardır;  | Adı          | Açıklama                                     | |:-------------|:---------------------------------------------| | LINK_DOWN    | Fiziksel link kopmuş.                        | | BLOCKED      | Port engellenmiş.                            | | LIVE         | Port aktif.                                  | | STP_LISTEN   | Stp aktif.                                   | 
*/
exports.PORT_STATE = {
    type:'enum',
    name:'PORT_STATE',
    values: ['LINK_DOWN', 'BLOCKED', 'LIVE', 'STP_LISTEN']
}

