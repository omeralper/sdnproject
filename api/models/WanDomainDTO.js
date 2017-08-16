'use strict';

//Model Definition File for WanDomainDTO.js

//var BaseDTO = require('./BaseDTO');
//var WAN_DOMAIN_STATUS = require('./WAN_DOMAIN_STATUS');

'use strict';
/**
* Alan tanımı bilgisinin bulunduğu veri yapısı.
*/
exports.WanDomainDTO =  {
    type:'class',
    name:'WanDomainDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        domainId : { name: 'domainId', type: 'String', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        status : { name: 'status', type: 'WAN_DOMAIN_STATUS' }, 
        ip : { name: 'ip', type: 'String' }, 
        centerAddress : { name: 'centerAddress', type: 'String' }
    }
}


//Mockup System for WanDomainDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanDomainDTO';
var dto_name = 'WanDomainDTO';

function WanDomainDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanDomainDTOData();
    }
}

function genWanDomainDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanDomainDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanDomainDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanDomainDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanDomainDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanDomainDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanDomainDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanDomainDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = WanDomainDTODataInit;
exports.genData = genWanDomainDTOData;
exports.getData = getWanDomainDTOData;
exports.findData = findWanDomainDTOData;
exports.getListData = getWanDomainDTOListData;
exports.deleteData = deleteWanDomainDTOData;
exports.saveData = saveWanDomainDTOData;
exports.saveListData = saveWanDomainDTOListData;
exports.getAllData = getAllWanDomainDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanDomainDTODataInit();
}

var overrideModule = '../overrides/WanDomainDTO';
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



