'use strict';

//Model Definition File for SwitchRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var SwitchDTO = require('./SwitchDTO');

'use strict';
/**
* Anahtarlayıcı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.SwitchRequest =  {
    type:'class',
    name:'SwitchRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'SwitchDTO', isRequired: true }
    }
}


//Mockup System for SwitchRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSwitchRequest';
var dto_name = 'SwitchRequest';

function SwitchRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSwitchRequestData();
    }
}

function genSwitchRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSwitchRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSwitchRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSwitchRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSwitchRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSwitchRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSwitchRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSwitchRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SwitchRequestDataInit;
exports.genData = genSwitchRequestData;
exports.getData = getSwitchRequestData;
exports.findData = findSwitchRequestData;
exports.getListData = getSwitchRequestListData;
exports.deleteData = deleteSwitchRequestData;
exports.saveData = saveSwitchRequestData;
exports.saveListData = saveSwitchRequestListData;
exports.getAllData = getAllSwitchRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SwitchRequestDataInit();
}

var overrideModule = '../overrides/SwitchRequest';
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



