'use strict';

//Model Definition File for MvtnRequestDeleteDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Silinecek sanal ağ taleplerinin veri modelidir.
*/
exports.MvtnRequestDeleteDTO =  {
    type:'class',
    name:'MvtnRequestDeleteDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        deleteIdList : { name: 'deleteIdList', type: 'Array', subType: 'integer' }
    }
}


//Mockup System for MvtnRequestDeleteDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnRequestDeleteDTO';
var dto_name = 'MvtnRequestDeleteDTO';

function MvtnRequestDeleteDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnRequestDeleteDTOData();
    }
}

function genMvtnRequestDeleteDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnRequestDeleteDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnRequestDeleteDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnRequestDeleteDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnRequestDeleteDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnRequestDeleteDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnRequestDeleteDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnRequestDeleteDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnRequestDeleteDTODataInit;
exports.genData = genMvtnRequestDeleteDTOData;
exports.getData = getMvtnRequestDeleteDTOData;
exports.findData = findMvtnRequestDeleteDTOData;
exports.getListData = getMvtnRequestDeleteDTOListData;
exports.deleteData = deleteMvtnRequestDeleteDTOData;
exports.saveData = saveMvtnRequestDeleteDTOData;
exports.saveListData = saveMvtnRequestDeleteDTOListData;
exports.getAllData = getAllMvtnRequestDeleteDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnRequestDeleteDTODataInit();
}

var overrideModule = '../overrides/MvtnRequestDeleteDTO';
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



