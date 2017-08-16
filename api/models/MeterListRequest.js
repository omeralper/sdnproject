'use strict';

//Model Definition File for MeterListRequest.js

//var GenericRequest = require('./GenericRequest');
//var MeterRequestDTO = require('./MeterRequestDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağdaki ya da fiziksel ağdaki  meterları listelemek için kullanılacak veri modelidir
*/
exports.MeterListRequest =  {
    type:'class',
    name:'MeterListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MeterRequestDTO', isRequired: true }
    }
}


//Mockup System for MeterListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterListRequest';
var dto_name = 'MeterListRequest';

function MeterListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterListRequestData();
    }
}

function genMeterListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterListRequestDataInit;
exports.genData = genMeterListRequestData;
exports.getData = getMeterListRequestData;
exports.findData = findMeterListRequestData;
exports.getListData = getMeterListRequestListData;
exports.deleteData = deleteMeterListRequestData;
exports.saveData = saveMeterListRequestData;
exports.saveListData = saveMeterListRequestListData;
exports.getAllData = getAllMeterListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterListRequestDataInit();
}

var overrideModule = '../overrides/MeterListRequest';
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



