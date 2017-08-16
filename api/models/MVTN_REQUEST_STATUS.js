'use strict';

//Model Definition File for MVTN_REQUEST_STATUS.js

'use strict';
/**
* MVTN taleplerinin durum bilgisi
*/
exports.MVTN_REQUEST_STATUS = {
    type:'enum',
    name:'MVTN_REQUEST_STATUS',
    values: ['CREATED', 'EDITED', 'ACCEPTED', 'EDIT_REJECTED', 'CREATE_REJECTED']
}

