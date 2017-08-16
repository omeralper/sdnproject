'use strict';

//Model Definition File for LinkStatsListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var LinkStatsDTO = require('./LinkStatsDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Bağlantılara ait istatistik verilerini dönen cevap veri yapısı.
*/
exports.LinkStatsListResponse =  {
    type:'class',
    name:'LinkStatsListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Array', subType: 'LinkStatsDTO', isRequired: true }
    }
}


//Mockup System for LinkStatsListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLinkStatsListResponse';
var dto_name = 'LinkStatsListResponse';

function LinkStatsListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLinkStatsListResponseData();
    }
}

function genLinkStatsListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLinkStatsListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLinkStatsListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findLinkStatsListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLinkStatsListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLinkStatsListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveLinkStatsListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLinkStatsListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = LinkStatsListResponseDataInit;
exports.genData = genLinkStatsListResponseData;
exports.getData = getLinkStatsListResponseData;
exports.findData = findLinkStatsListResponseData;
exports.getListData = getLinkStatsListResponseListData;
exports.deleteData = deleteLinkStatsListResponseData;
exports.saveData = saveLinkStatsListResponseData;
exports.saveListData = saveLinkStatsListResponseListData;
exports.getAllData = getAllLinkStatsListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    LinkStatsListResponseDataInit();
}

var overrideModule = '../overrides/LinkStatsListResponse';
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



