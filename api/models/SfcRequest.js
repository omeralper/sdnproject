'use strict';

//Model Definition File for SfcRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var SfcDTO = require('./SfcDTO');

'use strict';
/**
* Sfc için kullanılacak istek veri modelidir.
*/
exports.SfcRequest =  {
    type:'class',
    name:'SfcRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'SfcDTO', isRequired: true }
    }
}


//Mockup System for SfcRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSfcRequest';
var dto_name = 'SfcRequest';

function SfcRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSfcRequestData();
    }
}

function genSfcRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSfcRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSfcRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSfcRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSfcRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSfcRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSfcRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSfcRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SfcRequestDataInit;
exports.genData = genSfcRequestData;
exports.getData = getSfcRequestData;
exports.findData = findSfcRequestData;
exports.getListData = getSfcRequestListData;
exports.deleteData = deleteSfcRequestData;
exports.saveData = saveSfcRequestData;
exports.saveListData = saveSfcRequestListData;
exports.getAllData = getAllSfcRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SfcRequestDataInit();
}

var overrideModule = '../overrides/SfcRequest';
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



