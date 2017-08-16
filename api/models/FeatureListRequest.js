'use strict';

//Model Definition File for FeatureListRequest.js

//var FeatureListDTO = require('./FeatureListDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Özellik listelemek için kullanılacak istek veri modelidir.
*/
exports.FeatureListRequest =  {
    type:'class',
    name:'FeatureListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'FeatureListDTO', isRequired: true }
    }
}


//Mockup System for FeatureListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFeatureListRequest';
var dto_name = 'FeatureListRequest';

function FeatureListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFeatureListRequestData();
    }
}

function genFeatureListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFeatureListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFeatureListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findFeatureListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFeatureListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFeatureListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveFeatureListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFeatureListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = FeatureListRequestDataInit;
exports.genData = genFeatureListRequestData;
exports.getData = getFeatureListRequestData;
exports.findData = findFeatureListRequestData;
exports.getListData = getFeatureListRequestListData;
exports.deleteData = deleteFeatureListRequestData;
exports.saveData = saveFeatureListRequestData;
exports.saveListData = saveFeatureListRequestListData;
exports.getAllData = getAllFeatureListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    FeatureListRequestDataInit();
}

var overrideModule = '../overrides/FeatureListRequest';
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



