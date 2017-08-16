'use strict';

//Model Definition File for TopologyResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var TopologyDTO = require('./TopologyDTO');

'use strict';
/**
* Topoloji isteğine ait cevap veri yapısı.
*/
exports.TopologyResponse =  {
    type:'class',
    name:'TopologyResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'TopologyDTO', isRequired: true }
    }
}


//Mockup System for TopologyResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyResponse';
var dto_name = 'TopologyResponse';

function TopologyResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyResponseData();
    }
}

function genTopologyResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyResponseDataInit;
exports.genData = genTopologyResponseData;
exports.getData = getTopologyResponseData;
exports.findData = findTopologyResponseData;
exports.getListData = getTopologyResponseListData;
exports.deleteData = deleteTopologyResponseData;
exports.saveData = saveTopologyResponseData;
exports.saveListData = saveTopologyResponseListData;
exports.getAllData = getAllTopologyResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyResponseDataInit();
}

var overrideModule = '../overrides/TopologyResponse';
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



