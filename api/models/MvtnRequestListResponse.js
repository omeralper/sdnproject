'use strict';

//Model Definition File for MvtnRequestListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MvtnRequestListDTO = require('./MvtnRequestListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ taleplerini listelemek için kullanılacak veri modelidir.
*/
exports.MvtnRequestListResponse =  {
    type:'class',
    name:'MvtnRequestListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MvtnRequestListDTO' }
    }
}


//Mockup System for MvtnRequestListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnRequestListResponse';
var dto_name = 'MvtnRequestListResponse';

function MvtnRequestListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnRequestListResponseData();
    }
}

function genMvtnRequestListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnRequestListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnRequestListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnRequestListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnRequestListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnRequestListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnRequestListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnRequestListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnRequestListResponseDataInit;
exports.genData = genMvtnRequestListResponseData;
exports.getData = getMvtnRequestListResponseData;
exports.findData = findMvtnRequestListResponseData;
exports.getListData = getMvtnRequestListResponseListData;
exports.deleteData = deleteMvtnRequestListResponseData;
exports.saveData = saveMvtnRequestListResponseData;
exports.saveListData = saveMvtnRequestListResponseListData;
exports.getAllData = getAllMvtnRequestListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnRequestListResponseDataInit();
}

var overrideModule = '../overrides/MvtnRequestListResponse';
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



