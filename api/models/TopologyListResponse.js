'use strict';

//Model Definition File for TopologyListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var TopologyInfoListDTO = require('./TopologyInfoListDTO');

'use strict';
/**
* Topoloji detaylarının listelendiği işleminin cevap veri yapısı.
*/
exports.TopologyListResponse =  {
    type:'class',
    name:'TopologyListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'TopologyInfoListDTO', isRequired: true }
    }
}


//Mockup System for TopologyListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyListResponse';
var dto_name = 'TopologyListResponse';

function TopologyListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyListResponseData();
    }
}

function genTopologyListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyListResponseDataInit;
exports.genData = genTopologyListResponseData;
exports.getData = getTopologyListResponseData;
exports.findData = findTopologyListResponseData;
exports.getListData = getTopologyListResponseListData;
exports.deleteData = deleteTopologyListResponseData;
exports.saveData = saveTopologyListResponseData;
exports.saveListData = saveTopologyListResponseListData;
exports.getAllData = getAllTopologyListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyListResponseDataInit();
}

var overrideModule = '../overrides/TopologyListResponse';
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



