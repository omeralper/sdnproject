'use strict';

//Model Definition File for NacGroupRequest.js

//var GenericRequest = require('./GenericRequest');
//var NacGroupDTO = require('./NacGroupDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Nac Grup verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.NacGroupRequest =  {
    type:'class',
    name:'NacGroupRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NacGroupDTO', isRequired: true }
    }
}


//Mockup System for NacGroupRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacGroupRequest';
var dto_name = 'NacGroupRequest';

function NacGroupRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacGroupRequestData();
    }
}

function genNacGroupRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacGroupRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacGroupRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacGroupRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacGroupRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacGroupRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacGroupRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacGroupRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacGroupRequestDataInit;
exports.genData = genNacGroupRequestData;
exports.getData = getNacGroupRequestData;
exports.findData = findNacGroupRequestData;
exports.getListData = getNacGroupRequestListData;
exports.deleteData = deleteNacGroupRequestData;
exports.saveData = saveNacGroupRequestData;
exports.saveListData = saveNacGroupRequestListData;
exports.getAllData = getAllNacGroupRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacGroupRequestDataInit();
}

var overrideModule = '../overrides/NacGroupRequest';
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



