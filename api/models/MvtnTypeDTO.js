'use strict';

//Model Definition File for MvtnTypeDTO.js

//var BaseDTO = require('./BaseDTO');
//var MVTN_TYPE = require('./MVTN_TYPE');

'use strict';
/**
* Sanal ağ tipini tanımlayan veri modeli.
*/
exports.MvtnTypeDTO =  {
    type:'class',
    name:'MvtnTypeDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        mvtnType : { name: 'mvtnType', type: 'MVTN_TYPE' }
    }
}


//Mockup System for MvtnTypeDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnTypeDTO';
var dto_name = 'MvtnTypeDTO';

function MvtnTypeDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnTypeDTOData();
    }
}

function genMvtnTypeDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnTypeDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnTypeDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnTypeDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnTypeDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnTypeDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnTypeDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnTypeDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnTypeDTODataInit;
exports.genData = genMvtnTypeDTOData;
exports.getData = getMvtnTypeDTOData;
exports.findData = findMvtnTypeDTOData;
exports.getListData = getMvtnTypeDTOListData;
exports.deleteData = deleteMvtnTypeDTOData;
exports.saveData = saveMvtnTypeDTOData;
exports.saveListData = saveMvtnTypeDTOListData;
exports.getAllData = getAllMvtnTypeDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnTypeDTODataInit();
}

var overrideModule = '../overrides/MvtnTypeDTO';
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



