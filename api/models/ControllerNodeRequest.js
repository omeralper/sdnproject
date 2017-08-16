'use strict';

//Model Definition File for ControllerNodeRequest.js

//var ControllerNodeDTO = require('./ControllerNodeDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Kontrolcü verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.ControllerNodeRequest =  {
    type:'class',
    name:'ControllerNodeRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'ControllerNodeDTO', isRequired: true }
    }
}


//Mockup System for ControllerNodeRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerNodeRequest';
var dto_name = 'ControllerNodeRequest';

function ControllerNodeRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerNodeRequestData();
    }
}

function genControllerNodeRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerNodeRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerNodeRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerNodeRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerNodeRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerNodeRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerNodeRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerNodeRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerNodeRequestDataInit;
exports.genData = genControllerNodeRequestData;
exports.getData = getControllerNodeRequestData;
exports.findData = findControllerNodeRequestData;
exports.getListData = getControllerNodeRequestListData;
exports.deleteData = deleteControllerNodeRequestData;
exports.saveData = saveControllerNodeRequestData;
exports.saveListData = saveControllerNodeRequestListData;
exports.getAllData = getAllControllerNodeRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerNodeRequestDataInit();
}

var overrideModule = '../overrides/ControllerNodeRequest';
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



