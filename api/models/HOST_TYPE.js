'use strict';

//Model Definition File for HOST_TYPE.js

'use strict';
/**
* Uç Birimlerin tipini belirten ENUM değeridir. Değerler şunlardır;  | Adı          | Açıklama           | |:-------------|:-------------------| | COMPUTER     | Bilgisayar.        | | PRINTER      | Yazıcı.            | | PHONE        | Telefon.           | | IPTV_STB     | IPTV Cihazı.       | | SMART_TV     | Akıllı Televizyon. | | MEDIA_PLAYER | Medya Oynatıcı.    | | CELL_PHONE   | Cep Telefonu       | | CAMERA       | Video Kamera.      | | SERVER       | Sunucu.            | | SFC_FIREWALL | Güvenlik Duvarı.   | | LOAD_BALANCER| Yük Dengeleyici.   | | DPI          | Derin Paket İncl.  | | UNKNOWN      | Bilinmiyor.        | 
*/
exports.HOST_TYPE = {
    type:'enum',
    name:'HOST_TYPE',
    values: ['COMPUTER', 'PRINTER', 'PHONE', 'IPTV_STB', 'SMART_TV', 'MEDIA_PLAYER', 'CELL_PHONE', 'CAMERA', 'SERVER', 'SFC_FIREWALL', 'LOAD_BALANCER', 'DPI', 'UNKNOWN']
}

