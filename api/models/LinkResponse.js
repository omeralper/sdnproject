'use strict';

//Model Definition File for LinkResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var LinkDTO = require('./LinkDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Bağlantı detaylarının dönüldüğü veri yapısı.
*/
exports.LinkResponse =  {
    type:'class',
    name:'LinkResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'LinkDTO' }
    }
}


//Mockup System for LinkResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLinkResponse';
var dto_name = 'LinkResponse';

function LinkResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLinkResponseData();
    }
}

function genLinkResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLinkResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLinkResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findLinkResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLinkResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLinkResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveLinkResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLinkResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = LinkResponseDataInit;
exports.genData = genLinkResponseData;
exports.getData = getLinkResponseData;
exports.findData = findLinkResponseData;
exports.getListData = getLinkResponseListData;
exports.deleteData = deleteLinkResponseData;
exports.saveData = saveLinkResponseData;
exports.saveListData = saveLinkResponseListData;
exports.getAllData = getAllLinkResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    LinkResponseDataInit();
}

var overrideModule = '../overrides/LinkResponse';
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



