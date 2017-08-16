'use strict';

//Model Definition File for CertificateRequestDTO.js

//var AddressInfo = require('./AddressInfo');
//var BaseDTO = require('./BaseDTO');
//var CERTIFICATE_TYPE = require('./CERTIFICATE_TYPE');

'use strict';
/**
* Sertifika veri transfer veri modeli.
*/
exports.CertificateRequestDTO =  {
    type:'class',
    name:'CertificateRequestDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        address : { name: 'address', type: 'AddressInfo' }, 
        isSaved : { name: 'isSaved', type: 'Boolean' }, 
        nodeType : { name: 'nodeType', type: 'CERTIFICATE_TYPE', isRequired: true }
    }
}


//Mockup System for CertificateRequestDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDCertificateRequestDTO';
var dto_name = 'CertificateRequestDTO';

function CertificateRequestDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genCertificateRequestDTOData();
    }
}

function genCertificateRequestDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getCertificateRequestDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getCertificateRequestDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findCertificateRequestDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteCertificateRequestDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveCertificateRequestDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveCertificateRequestDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllCertificateRequestDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = CertificateRequestDTODataInit;
exports.genData = genCertificateRequestDTOData;
exports.getData = getCertificateRequestDTOData;
exports.findData = findCertificateRequestDTOData;
exports.getListData = getCertificateRequestDTOListData;
exports.deleteData = deleteCertificateRequestDTOData;
exports.saveData = saveCertificateRequestDTOData;
exports.saveListData = saveCertificateRequestDTOListData;
exports.getAllData = getAllCertificateRequestDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    CertificateRequestDTODataInit();
}

var overrideModule = '../overrides/CertificateRequestDTO';
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



