'use strict';

//Model Definition File for IpLocationDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* IP bazlı lokasyon bilgilerini tutar
*/
exports.IpLocationDTO =  {
    type:'class',
    name:'IpLocationDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        ipList : { name: 'ipList', type: 'Array', subType: 'string', isRequired: true }, 
        latitude : { name: 'latitude', type: 'String' }, 
        longitude : { name: 'longitude', type: 'String' }
    }
}


//Mockup System for IpLocationDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDIpLocationDTO';
var dto_name = 'IpLocationDTO';

function IpLocationDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genIpLocationDTOData();
    }
}

function genIpLocationDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getIpLocationDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getIpLocationDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findIpLocationDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteIpLocationDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveIpLocationDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveIpLocationDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllIpLocationDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = IpLocationDTODataInit;
exports.genData = genIpLocationDTOData;
exports.getData = getIpLocationDTOData;
exports.findData = findIpLocationDTOData;
exports.getListData = getIpLocationDTOListData;
exports.deleteData = deleteIpLocationDTOData;
exports.saveData = saveIpLocationDTOData;
exports.saveListData = saveIpLocationDTOListData;
exports.getAllData = getAllIpLocationDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    IpLocationDTODataInit();
}

var overrideModule = '../overrides/IpLocationDTO';
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



