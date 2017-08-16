'use strict';

//Model Definition File for ServicePolicyClassDTO.js

//var BW_UNIT = require('./BW_UNIT');
//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Trafik sınıfı bilgisinin bulunduğu veri yapısı.
*/
exports.ServicePolicyClassDTO =  {
    type:'class',
    name:'ServicePolicyClassDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        bandwidth : { name: 'bandwidth', type: 'Long' }, 
        bandwidthUnit : { name: 'bandwidthUnit', type: 'BW_UNIT' }, 
        jitter : { name: 'jitter', type: 'Double' }, 
        delay : { name: 'delay', type: 'Double' }, 
        collision : { name: 'collision', type: 'Double' }, 
        loss : { name: 'loss', type: 'Double' }, 
        serviceClassName : { name: 'serviceClassName', type: 'String' }, 
        mvtnId : { name: 'mvtnId', type: 'Integer' }, 
        mvtnName : { name: 'mvtnName', type: 'String' }, 
        classLevel : { name: 'classLevel', type: 'Integer' }
    }
}


//Mockup System for ServicePolicyClassDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServicePolicyClassDTO';
var dto_name = 'ServicePolicyClassDTO';

function ServicePolicyClassDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServicePolicyClassDTOData();
    }
}

function genServicePolicyClassDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServicePolicyClassDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServicePolicyClassDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findServicePolicyClassDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServicePolicyClassDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServicePolicyClassDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveServicePolicyClassDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServicePolicyClassDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ServicePolicyClassDTODataInit;
exports.genData = genServicePolicyClassDTOData;
exports.getData = getServicePolicyClassDTOData;
exports.findData = findServicePolicyClassDTOData;
exports.getListData = getServicePolicyClassDTOListData;
exports.deleteData = deleteServicePolicyClassDTOData;
exports.saveData = saveServicePolicyClassDTOData;
exports.saveListData = saveServicePolicyClassDTOListData;
exports.getAllData = getAllServicePolicyClassDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServicePolicyClassDTODataInit();
}

var overrideModule = '../overrides/ServicePolicyClassDTO';
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



