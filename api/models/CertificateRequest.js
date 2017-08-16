'use strict';

//Model Definition File for CertificateRequest.js

//var CertificateRequestDTO = require('./CertificateRequestDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sertifika üretme komutunun sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.CertificateRequest =  {
    type:'class',
    name:'CertificateRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'CertificateRequestDTO', isRequired: true }
    }
}


//Mockup System for CertificateRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDCertificateRequest';
var dto_name = 'CertificateRequest';

function CertificateRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genCertificateRequestData();
    }
}

function genCertificateRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getCertificateRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getCertificateRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findCertificateRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteCertificateRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveCertificateRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveCertificateRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllCertificateRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = CertificateRequestDataInit;
exports.genData = genCertificateRequestData;
exports.getData = getCertificateRequestData;
exports.findData = findCertificateRequestData;
exports.getListData = getCertificateRequestListData;
exports.deleteData = deleteCertificateRequestData;
exports.saveData = saveCertificateRequestData;
exports.saveListData = saveCertificateRequestListData;
exports.getAllData = getAllCertificateRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    CertificateRequestDataInit();
}

var overrideModule = '../overrides/CertificateRequest';
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



