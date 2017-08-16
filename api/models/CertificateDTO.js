'use strict';

//Model Definition File for CertificateDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Sertifika istek veri transfer veri modeli.
*/
exports.CertificateDTO =  {
    type:'class',
    name:'CertificateDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        zipFile : { name: 'zipFile', type: 'String', isRequired: true }
    }
}


//Mockup System for CertificateDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDCertificateDTO';
var dto_name = 'CertificateDTO';

function CertificateDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genCertificateDTOData();
    }
}

function genCertificateDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getCertificateDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getCertificateDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findCertificateDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteCertificateDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveCertificateDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveCertificateDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllCertificateDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = CertificateDTODataInit;
exports.genData = genCertificateDTOData;
exports.getData = getCertificateDTOData;
exports.findData = findCertificateDTOData;
exports.getListData = getCertificateDTOListData;
exports.deleteData = deleteCertificateDTOData;
exports.saveData = saveCertificateDTOData;
exports.saveListData = saveCertificateDTOListData;
exports.getAllData = getAllCertificateDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    CertificateDTODataInit();
}

var overrideModule = '../overrides/CertificateDTO';
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


