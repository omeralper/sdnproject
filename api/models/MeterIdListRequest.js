'use strict';

//Model Definition File for MeterIdListRequest.js

//var GenericRequest = require('./GenericRequest');
//var MeterIdentifier = require('./MeterIdentifier');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Birden çok OF meter için istekte bulunmak için.
*/
exports.MeterIdListRequest =  {
    type:'class',
    name:'MeterIdListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        idList : { name: 'idList', type: 'Array', subType: 'MeterIdentifier', isRequired: true }
    }
}


//Mockup System for MeterIdListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterIdListRequest';
var dto_name = 'MeterIdListRequest';

function MeterIdListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterIdListRequestData();
    }
}

function genMeterIdListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterIdListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterIdListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterIdListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterIdListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterIdListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterIdListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterIdListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterIdListRequestDataInit;
exports.genData = genMeterIdListRequestData;
exports.getData = getMeterIdListRequestData;
exports.findData = findMeterIdListRequestData;
exports.getListData = getMeterIdListRequestListData;
exports.deleteData = deleteMeterIdListRequestData;
exports.saveData = saveMeterIdListRequestData;
exports.saveListData = saveMeterIdListRequestListData;
exports.getAllData = getAllMeterIdListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterIdListRequestDataInit();
}

var overrideModule = '../overrides/MeterIdListRequest';
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



