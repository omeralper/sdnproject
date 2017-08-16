'use strict';

//Model Definition File for VimInfoRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var VimInfoDTO = require('./VimInfoDTO');

'use strict';
/**
* 
*/
exports.VimInfoRequest =  {
    type:'class',
    name:'VimInfoRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'VimInfoDTO', isRequired: true }
    }
}


//Mockup System for VimInfoRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimInfoRequest';
var dto_name = 'VimInfoRequest';

function VimInfoRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimInfoRequestData();
    }
}

function genVimInfoRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimInfoRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimInfoRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimInfoRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimInfoRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimInfoRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimInfoRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimInfoRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VimInfoRequestDataInit;
exports.genData = genVimInfoRequestData;
exports.getData = getVimInfoRequestData;
exports.findData = findVimInfoRequestData;
exports.getListData = getVimInfoRequestListData;
exports.deleteData = deleteVimInfoRequestData;
exports.saveData = saveVimInfoRequestData;
exports.saveListData = saveVimInfoRequestListData;
exports.getAllData = getAllVimInfoRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimInfoRequestDataInit();
}

var overrideModule = '../overrides/VimInfoRequest';
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



