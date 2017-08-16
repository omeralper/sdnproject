'use strict';

//Model Definition File for MvtnStatusDTO.js

//var BaseDTO = require('./BaseDTO');
//var MVTN_STATUS = require('./MVTN_STATUS');

'use strict';
/**
* Sanal ağ durumunu tanımlayan veri modeli.
*/
exports.MvtnStatusDTO =  {
    type:'class',
    name:'MvtnStatusDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        mvtnStatus : { name: 'mvtnStatus', type: 'MVTN_STATUS' }
    }
}


//Mockup System for MvtnStatusDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnStatusDTO';
var dto_name = 'MvtnStatusDTO';

function MvtnStatusDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnStatusDTOData();
    }
}

function genMvtnStatusDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnStatusDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnStatusDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnStatusDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnStatusDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnStatusDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnStatusDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnStatusDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnStatusDTODataInit;
exports.genData = genMvtnStatusDTOData;
exports.getData = getMvtnStatusDTOData;
exports.findData = findMvtnStatusDTOData;
exports.getListData = getMvtnStatusDTOListData;
exports.deleteData = deleteMvtnStatusDTOData;
exports.saveData = saveMvtnStatusDTOData;
exports.saveListData = saveMvtnStatusDTOListData;
exports.getAllData = getAllMvtnStatusDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnStatusDTODataInit();
}

var overrideModule = '../overrides/MvtnStatusDTO';
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



