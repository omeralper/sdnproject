'use strict';

//Model Definition File for VimLocationDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* VIM bilgisinin bulundugu yer
*/
exports.VimLocationDTO =  {
    type:'class',
    name:'VimLocationDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        vimId : { name: 'vimId', type: 'String', isRequired: true }, 
        locationVersion : { name: 'locationVersion', type: 'String' }, 
        name : { name: 'name', type: 'String' }, 
        latitude : { name: 'latitude', type: 'String' }, 
        longitude : { name: 'longitude', type: 'String' }
    }
}


//Mockup System for VimLocationDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimLocationDTO';
var dto_name = 'VimLocationDTO';

function VimLocationDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimLocationDTOData();
    }
}

function genVimLocationDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimLocationDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimLocationDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimLocationDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimLocationDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimLocationDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimLocationDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimLocationDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VimLocationDTODataInit;
exports.genData = genVimLocationDTOData;
exports.getData = getVimLocationDTOData;
exports.findData = findVimLocationDTOData;
exports.getListData = getVimLocationDTOListData;
exports.deleteData = deleteVimLocationDTOData;
exports.saveData = saveVimLocationDTOData;
exports.saveListData = saveVimLocationDTOListData;
exports.getAllData = getAllVimLocationDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimLocationDTODataInit();
}

var overrideModule = '../overrides/VimLocationDTO';
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



