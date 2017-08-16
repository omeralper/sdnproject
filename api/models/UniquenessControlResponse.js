'use strict';

//Model Definition File for UniquenessControlResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var UNIQUENESS_TYPE = require('./UNIQUENESS_TYPE');

'use strict';
/**
* Benzersiz olması gereken alanları veritabanı sorgulamasının cevap veri modelidir.
*/
exports.UniquenessControlResponse =  {
    type:'class',
    name:'UniquenessControlResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'UNIQUENESS_TYPE', isRequired: true }
    }
}


//Mockup System for UniquenessControlResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUniquenessControlResponse';
var dto_name = 'UniquenessControlResponse';

function UniquenessControlResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUniquenessControlResponseData();
    }
}

function genUniquenessControlResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUniquenessControlResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUniquenessControlResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findUniquenessControlResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUniquenessControlResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUniquenessControlResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveUniquenessControlResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUniquenessControlResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = UniquenessControlResponseDataInit;
exports.genData = genUniquenessControlResponseData;
exports.getData = getUniquenessControlResponseData;
exports.findData = findUniquenessControlResponseData;
exports.getListData = getUniquenessControlResponseListData;
exports.deleteData = deleteUniquenessControlResponseData;
exports.saveData = saveUniquenessControlResponseData;
exports.saveListData = saveUniquenessControlResponseListData;
exports.getAllData = getAllUniquenessControlResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    UniquenessControlResponseDataInit();
}

var overrideModule = '../overrides/UniquenessControlResponse';
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



