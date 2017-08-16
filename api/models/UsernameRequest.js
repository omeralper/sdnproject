'use strict';

//Model Definition File for UsernameRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Kullanıcı adı ile yapılan isteklerde kullanılan veri yapısı.
*/
exports.UsernameRequest =  {
    type:'class',
    name:'UsernameRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        username : { name: 'username', type: 'String', isRequired: true }
    }
}


//Mockup System for UsernameRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUsernameRequest';
var dto_name = 'UsernameRequest';

function UsernameRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUsernameRequestData();
    }
}

function genUsernameRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUsernameRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUsernameRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findUsernameRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUsernameRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUsernameRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveUsernameRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUsernameRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = UsernameRequestDataInit;
exports.genData = genUsernameRequestData;
exports.getData = getUsernameRequestData;
exports.findData = findUsernameRequestData;
exports.getListData = getUsernameRequestListData;
exports.deleteData = deleteUsernameRequestData;
exports.saveData = saveUsernameRequestData;
exports.saveListData = saveUsernameRequestListData;
exports.getAllData = getAllUsernameRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    UsernameRequestDataInit();
}

var overrideModule = '../overrides/UsernameRequest';
try {
    var override = require(overrideModule);

    if (override && override.init) {
        console.info('DTO Override found :'+overrideModule);
        mockup.initDatabase(data_key,override.process_options);
        override.init(exports);
    } else {
        autoInit();
    }

} catch (e) {
    if (e.code == 'MODULE_NOT_FOUND') {
        console.warn('DTO Override NOT found :'+overrideModule);
        autoInit();
    } else {
        throw e;
    }
}



