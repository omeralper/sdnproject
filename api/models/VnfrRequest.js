'use strict';

//Model Definition File for VnfrRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var VnfrDTO = require('./VnfrDTO');

'use strict';
/**
* Vnfr için kullanılacak istek veri modelidir.
*/
exports.VnfrRequest =  {
    type:'class',
    name:'VnfrRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'VnfrDTO', isRequired: true }
    }
}


//Mockup System for VnfrRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfrRequest';
var dto_name = 'VnfrRequest';

function VnfrRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfrRequestData();
    }
}

function genVnfrRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfrRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfrRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfrRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfrRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfrRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfrRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfrRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfrRequestDataInit;
exports.genData = genVnfrRequestData;
exports.getData = getVnfrRequestData;
exports.findData = findVnfrRequestData;
exports.getListData = getVnfrRequestListData;
exports.deleteData = deleteVnfrRequestData;
exports.saveData = saveVnfrRequestData;
exports.saveListData = saveVnfrRequestListData;
exports.getAllData = getAllVnfrRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfrRequestDataInit();
}

var overrideModule = '../overrides/VnfrRequest';
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



