'use strict';

//Model Definition File for MvtnChangeTypeResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MvtnTypeDTO = require('./MvtnTypeDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ tip değişikliği cevap veri yapısı.
*/
exports.MvtnChangeTypeResponse =  {
    type:'class',
    name:'MvtnChangeTypeResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MvtnTypeDTO', isRequired: true }
    }
}


//Mockup System for MvtnChangeTypeResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnChangeTypeResponse';
var dto_name = 'MvtnChangeTypeResponse';

function MvtnChangeTypeResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnChangeTypeResponseData();
    }
}

function genMvtnChangeTypeResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnChangeTypeResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnChangeTypeResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnChangeTypeResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnChangeTypeResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnChangeTypeResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnChangeTypeResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnChangeTypeResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnChangeTypeResponseDataInit;
exports.genData = genMvtnChangeTypeResponseData;
exports.getData = getMvtnChangeTypeResponseData;
exports.findData = findMvtnChangeTypeResponseData;
exports.getListData = getMvtnChangeTypeResponseListData;
exports.deleteData = deleteMvtnChangeTypeResponseData;
exports.saveData = saveMvtnChangeTypeResponseData;
exports.saveListData = saveMvtnChangeTypeResponseListData;
exports.getAllData = getAllMvtnChangeTypeResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnChangeTypeResponseDataInit();
}

var overrideModule = '../overrides/MvtnChangeTypeResponse';
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



