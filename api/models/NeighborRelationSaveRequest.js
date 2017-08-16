'use strict';

//Model Definition File for NeighborRelationSaveRequest.js

//var GenericRequest = require('./GenericRequest');
//var NeighborRelationDTO = require('./NeighborRelationDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip rotalayıcı ekleme ve güncelleme için kullanılır
*/
exports.NeighborRelationSaveRequest =  {
    type:'class',
    name:'NeighborRelationSaveRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NeighborRelationDTO', isRequired: true }
    }
}


//Mockup System for NeighborRelationSaveRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNeighborRelationSaveRequest';
var dto_name = 'NeighborRelationSaveRequest';

function NeighborRelationSaveRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNeighborRelationSaveRequestData();
    }
}

function genNeighborRelationSaveRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNeighborRelationSaveRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNeighborRelationSaveRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNeighborRelationSaveRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNeighborRelationSaveRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNeighborRelationSaveRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNeighborRelationSaveRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNeighborRelationSaveRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NeighborRelationSaveRequestDataInit;
exports.genData = genNeighborRelationSaveRequestData;
exports.getData = getNeighborRelationSaveRequestData;
exports.findData = findNeighborRelationSaveRequestData;
exports.getListData = getNeighborRelationSaveRequestListData;
exports.deleteData = deleteNeighborRelationSaveRequestData;
exports.saveData = saveNeighborRelationSaveRequestData;
exports.saveListData = saveNeighborRelationSaveRequestListData;
exports.getAllData = getAllNeighborRelationSaveRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NeighborRelationSaveRequestDataInit();
}

var overrideModule = '../overrides/NeighborRelationSaveRequest';
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



