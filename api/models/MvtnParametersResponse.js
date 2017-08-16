'use strict';

//Model Definition File for MvtnParametersResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var TopologyInfoDTO = require('./TopologyInfoDTO');

'use strict';
/**
* Varsayılan sanal ağ parametrelerini isteme talebinin cevabı olarak kullanlan veri yapısı
*/
exports.MvtnParametersResponse =  {
    type:'class',
    name:'MvtnParametersResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'TopologyInfoDTO', isRequired: true }
    }
}


//Mockup System for MvtnParametersResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnParametersResponse';
var dto_name = 'MvtnParametersResponse';

function MvtnParametersResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnParametersResponseData();
    }
}

function genMvtnParametersResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnParametersResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnParametersResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnParametersResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnParametersResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnParametersResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnParametersResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnParametersResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnParametersResponseDataInit;
exports.genData = genMvtnParametersResponseData;
exports.getData = getMvtnParametersResponseData;
exports.findData = findMvtnParametersResponseData;
exports.getListData = getMvtnParametersResponseListData;
exports.deleteData = deleteMvtnParametersResponseData;
exports.saveData = saveMvtnParametersResponseData;
exports.saveListData = saveMvtnParametersResponseListData;
exports.getAllData = getAllMvtnParametersResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnParametersResponseDataInit();
}

var overrideModule = '../overrides/MvtnParametersResponse';
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



