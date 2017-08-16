'use strict';

//Model Definition File for ControllerNodeListRequest.js

//var GenericIdRequest = require('./GenericIdRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Özellik listelemek için kullanılacak istek veri modelidir.
*/
exports.ControllerNodeListRequest =  {
    type:'class',
    name:'ControllerNodeListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        id : { name: 'id', type: 'String', isRequired: true }
    }
}


//Mockup System for ControllerNodeListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerNodeListRequest';
var dto_name = 'ControllerNodeListRequest';

function ControllerNodeListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerNodeListRequestData();
    }
}

function genControllerNodeListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerNodeListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerNodeListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerNodeListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerNodeListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerNodeListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerNodeListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerNodeListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerNodeListRequestDataInit;
exports.genData = genControllerNodeListRequestData;
exports.getData = getControllerNodeListRequestData;
exports.findData = findControllerNodeListRequestData;
exports.getListData = getControllerNodeListRequestListData;
exports.deleteData = deleteControllerNodeListRequestData;
exports.saveData = saveControllerNodeListRequestData;
exports.saveListData = saveControllerNodeListRequestListData;
exports.getAllData = getAllControllerNodeListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerNodeListRequestDataInit();
}

var overrideModule = '../overrides/ControllerNodeListRequest';
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



