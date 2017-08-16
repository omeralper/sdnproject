'use strict';

//Model Definition File for SubTopologyResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MvtnSubTopologyDTO = require('./MvtnSubTopologyDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal topolojinin fiziksel karşılığına ait cevap veri yapısı.
*/
exports.SubTopologyResponse =  {
    type:'class',
    name:'SubTopologyResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MvtnSubTopologyDTO', isRequired: true }
    }
}


//Mockup System for SubTopologyResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSubTopologyResponse';
var dto_name = 'SubTopologyResponse';

function SubTopologyResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSubTopologyResponseData();
    }
}

function genSubTopologyResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSubTopologyResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSubTopologyResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSubTopologyResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSubTopologyResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSubTopologyResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSubTopologyResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSubTopologyResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SubTopologyResponseDataInit;
exports.genData = genSubTopologyResponseData;
exports.getData = getSubTopologyResponseData;
exports.findData = findSubTopologyResponseData;
exports.getListData = getSubTopologyResponseListData;
exports.deleteData = deleteSubTopologyResponseData;
exports.saveData = saveSubTopologyResponseData;
exports.saveListData = saveSubTopologyResponseListData;
exports.getAllData = getAllSubTopologyResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SubTopologyResponseDataInit();
}

var overrideModule = '../overrides/SubTopologyResponse';
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



