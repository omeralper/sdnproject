'use strict';

//Model Definition File for MvtnEditStatusDTO.js

//var BaseDTO = require('./BaseDTO');
//var MVTN_REQUEST_STATUS = require('./MVTN_REQUEST_STATUS');
//var MVTN_TYPE = require('./MVTN_TYPE');

'use strict';
/**
* Sanal ağ talebinin statü ve type bilgisini gösteren veri modeli
*/
exports.MvtnEditStatusDTO =  {
    type:'class',
    name:'MvtnEditStatusDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        status : { name: 'status', type: 'MVTN_REQUEST_STATUS' }, 
        mvtnType : { name: 'mvtnType', type: 'MVTN_TYPE' }
    }
}


//Mockup System for MvtnEditStatusDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnEditStatusDTO';
var dto_name = 'MvtnEditStatusDTO';

function MvtnEditStatusDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnEditStatusDTOData();
    }
}

function genMvtnEditStatusDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnEditStatusDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnEditStatusDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnEditStatusDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnEditStatusDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnEditStatusDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnEditStatusDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnEditStatusDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnEditStatusDTODataInit;
exports.genData = genMvtnEditStatusDTOData;
exports.getData = getMvtnEditStatusDTOData;
exports.findData = findMvtnEditStatusDTOData;
exports.getListData = getMvtnEditStatusDTOListData;
exports.deleteData = deleteMvtnEditStatusDTOData;
exports.saveData = saveMvtnEditStatusDTOData;
exports.saveListData = saveMvtnEditStatusDTOListData;
exports.getAllData = getAllMvtnEditStatusDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnEditStatusDTODataInit();
}

var overrideModule = '../overrides/MvtnEditStatusDTO';
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



