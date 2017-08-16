'use strict';

//Model Definition File for GenericResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* API sisteminde tüm cevaplar için kullanılacak veri modelleri bu veri modeli temel alınarak tanımlanacaktır.
*/
exports.GenericResponse =  {
    type:'class',
    name:'GenericResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }
    }
}


//Mockup System for GenericResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDGenericResponse';
var dto_name = 'GenericResponse';

function GenericResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genGenericResponseData();
    }
}

function genGenericResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getGenericResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getGenericResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findGenericResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteGenericResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveGenericResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveGenericResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllGenericResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = GenericResponseDataInit;
exports.genData = genGenericResponseData;
exports.getData = getGenericResponseData;
exports.findData = findGenericResponseData;
exports.getListData = getGenericResponseListData;
exports.deleteData = deleteGenericResponseData;
exports.saveData = saveGenericResponseData;
exports.saveListData = saveGenericResponseListData;
exports.getAllData = getAllGenericResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    GenericResponseDataInit();
}

var overrideModule = '../overrides/GenericResponse';
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



