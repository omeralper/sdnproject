'use strict';

//Model Definition File for MvtnEditChangeResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MvtnEditStatusDTO = require('./MvtnEditStatusDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ taleplerinin statü değişikliği için kullanılacak cevap modelidir.
*/
exports.MvtnEditChangeResponse =  {
    type:'class',
    name:'MvtnEditChangeResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MvtnEditStatusDTO', isRequired: true }
    }
}


//Mockup System for MvtnEditChangeResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnEditChangeResponse';
var dto_name = 'MvtnEditChangeResponse';

function MvtnEditChangeResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnEditChangeResponseData();
    }
}

function genMvtnEditChangeResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnEditChangeResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnEditChangeResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnEditChangeResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnEditChangeResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnEditChangeResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnEditChangeResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnEditChangeResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnEditChangeResponseDataInit;
exports.genData = genMvtnEditChangeResponseData;
exports.getData = getMvtnEditChangeResponseData;
exports.findData = findMvtnEditChangeResponseData;
exports.getListData = getMvtnEditChangeResponseListData;
exports.deleteData = deleteMvtnEditChangeResponseData;
exports.saveData = saveMvtnEditChangeResponseData;
exports.saveListData = saveMvtnEditChangeResponseListData;
exports.getAllData = getAllMvtnEditChangeResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnEditChangeResponseDataInit();
}

var overrideModule = '../overrides/MvtnEditChangeResponse';
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



