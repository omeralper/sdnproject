'use strict';

//Model Definition File for NacUsernameRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı adı ile yapılan isteklerde kullanılan veri yapısı.
*/
exports.NacUsernameRequest =  {
    type:'class',
    name:'NacUsernameRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        username : { name: 'username', type: 'String', isRequired: true }
    }
}


//Mockup System for NacUsernameRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUsernameRequest';
var dto_name = 'NacUsernameRequest';

function NacUsernameRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUsernameRequestData();
    }
}

function genNacUsernameRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUsernameRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUsernameRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUsernameRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUsernameRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUsernameRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUsernameRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUsernameRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUsernameRequestDataInit;
exports.genData = genNacUsernameRequestData;
exports.getData = getNacUsernameRequestData;
exports.findData = findNacUsernameRequestData;
exports.getListData = getNacUsernameRequestListData;
exports.deleteData = deleteNacUsernameRequestData;
exports.saveData = saveNacUsernameRequestData;
exports.saveListData = saveNacUsernameRequestListData;
exports.getAllData = getAllNacUsernameRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUsernameRequestDataInit();
}

var overrideModule = '../overrides/NacUsernameRequest';
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



