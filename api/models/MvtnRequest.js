'use strict';

//Model Definition File for MvtnRequest.js

//var GenericRequest = require('./GenericRequest');
//var MvtnDTO = require('./MvtnDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ talebi göndermek için kullanılacak veri modelidir
*/
exports.MvtnRequest =  {
    type:'class',
    name:'MvtnRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MvtnDTO', isRequired: true }
    }
}


//Mockup System for MvtnRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnRequest';
var dto_name = 'MvtnRequest';

function MvtnRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnRequestData();
    }
}

function genMvtnRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnRequestDataInit;
exports.genData = genMvtnRequestData;
exports.getData = getMvtnRequestData;
exports.findData = findMvtnRequestData;
exports.getListData = getMvtnRequestListData;
exports.deleteData = deleteMvtnRequestData;
exports.saveData = saveMvtnRequestData;
exports.saveListData = saveMvtnRequestListData;
exports.getAllData = getAllMvtnRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnRequestDataInit();
}

var overrideModule = '../overrides/MvtnRequest';
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



