'use strict';

//Model Definition File for CertificateResponse.js

//var CertificateDTO = require('./CertificateDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Anahtarlayıcı ile ilgili isteklere verilecek cevabın veri yapısıdır.
*/
exports.CertificateResponse =  {
    type:'class',
    name:'CertificateResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'CertificateDTO', isRequired: true }
    }
}


//Mockup System for CertificateResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDCertificateResponse';
var dto_name = 'CertificateResponse';

function CertificateResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genCertificateResponseData();
    }
}

function genCertificateResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getCertificateResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getCertificateResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findCertificateResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteCertificateResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveCertificateResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveCertificateResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllCertificateResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = CertificateResponseDataInit;
exports.genData = genCertificateResponseData;
exports.getData = getCertificateResponseData;
exports.findData = findCertificateResponseData;
exports.getListData = getCertificateResponseListData;
exports.deleteData = deleteCertificateResponseData;
exports.saveData = saveCertificateResponseData;
exports.saveListData = saveCertificateResponseListData;
exports.getAllData = getAllCertificateResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    CertificateResponseDataInit();
}

var overrideModule = '../overrides/CertificateResponse';
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



