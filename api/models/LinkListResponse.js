'use strict';

//Model Definition File for LinkListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var LinkListDTO = require('./LinkListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Bağlantı listeleme işleminin cevap veri yapısı.
*/
exports.LinkListResponse =  {
    type:'class',
    name:'LinkListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'LinkListDTO', isRequired: true }
    }
}


//Mockup System for LinkListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLinkListResponse';
var dto_name = 'LinkListResponse';

function LinkListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLinkListResponseData();
    }
}

function genLinkListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLinkListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLinkListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findLinkListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLinkListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLinkListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveLinkListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLinkListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = LinkListResponseDataInit;
exports.genData = genLinkListResponseData;
exports.getData = getLinkListResponseData;
exports.findData = findLinkListResponseData;
exports.getListData = getLinkListResponseListData;
exports.deleteData = deleteLinkListResponseData;
exports.saveData = saveLinkListResponseData;
exports.saveListData = saveLinkListResponseListData;
exports.getAllData = getAllLinkListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    LinkListResponseDataInit();
}

var overrideModule = '../overrides/LinkListResponse';
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



