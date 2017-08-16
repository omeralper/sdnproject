'use strict';

//Model Definition File for PPPSubPathDTO.js

//var BaseDTO = require('./BaseDTO');
//var LinkDTO = require('./LinkDTO');

'use strict';
/**
* Proaktif patika politikasını tanımlayan veri modeli.
*/
exports.PPPSubPathDTO =  {
    type:'class',
    name:'PPPSubPathDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        links : { name: 'links', type: 'Array', subType: 'LinkDTO' }
    }
}


//Mockup System for PPPSubPathDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPPPSubPathDTO';
var dto_name = 'PPPSubPathDTO';

function PPPSubPathDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPPPSubPathDTOData();
    }
}

function genPPPSubPathDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPPPSubPathDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPPPSubPathDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findPPPSubPathDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePPPSubPathDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function savePPPSubPathDTOData(data) {
    return mockup.saveData(data_key, data);
}

function savePPPSubPathDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPPPSubPathDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = PPPSubPathDTODataInit;
exports.genData = genPPPSubPathDTOData;
exports.getData = getPPPSubPathDTOData;
exports.findData = findPPPSubPathDTOData;
exports.getListData = getPPPSubPathDTOListData;
exports.deleteData = deletePPPSubPathDTOData;
exports.saveData = savePPPSubPathDTOData;
exports.saveListData = savePPPSubPathDTOListData;
exports.getAllData = getAllPPPSubPathDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    PPPSubPathDTODataInit();
}

var overrideModule = '../overrides/PPPSubPathDTO';
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



