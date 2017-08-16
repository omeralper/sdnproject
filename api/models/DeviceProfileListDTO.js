'use strict';

//Model Definition File for DeviceProfileListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DeviceProfileDTO = require('./DeviceProfileDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Device profillerinin bulundugu veri modeli.
*/
exports.DeviceProfileListDTO =  {
    type:'class',
    name:'DeviceProfileListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DeviceProfileDTO' }
    }
}


//Mockup System for DeviceProfileListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeviceProfileListDTO';
var dto_name = 'DeviceProfileListDTO';

function DeviceProfileListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeviceProfileListDTOData();
    }
}

function genDeviceProfileListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeviceProfileListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeviceProfileListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeviceProfileListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeviceProfileListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeviceProfileListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeviceProfileListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeviceProfileListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DeviceProfileListDTODataInit;
exports.genData = genDeviceProfileListDTOData;
exports.getData = getDeviceProfileListDTOData;
exports.findData = findDeviceProfileListDTOData;
exports.getListData = getDeviceProfileListDTOListData;
exports.deleteData = deleteDeviceProfileListDTOData;
exports.saveData = saveDeviceProfileListDTOData;
exports.saveListData = saveDeviceProfileListDTOListData;
exports.getAllData = getAllDeviceProfileListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeviceProfileListDTODataInit();
}

var overrideModule = '../overrides/DeviceProfileListDTO';
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



