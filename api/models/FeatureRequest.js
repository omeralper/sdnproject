'use strict';

//Model Definition File for FeatureRequest.js

//var FeatureDTO = require('./FeatureDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Özellik verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.FeatureRequest =  {
    type:'class',
    name:'FeatureRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'FeatureDTO', isRequired: true }
    }
}


//Mockup System for FeatureRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFeatureRequest';
var dto_name = 'FeatureRequest';

function FeatureRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFeatureRequestData();
    }
}

function genFeatureRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFeatureRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFeatureRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findFeatureRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFeatureRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFeatureRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveFeatureRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFeatureRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = FeatureRequestDataInit;
exports.genData = genFeatureRequestData;
exports.getData = getFeatureRequestData;
exports.findData = findFeatureRequestData;
exports.getListData = getFeatureRequestListData;
exports.deleteData = deleteFeatureRequestData;
exports.saveData = saveFeatureRequestData;
exports.saveListData = saveFeatureRequestListData;
exports.getAllData = getAllFeatureRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    FeatureRequestDataInit();
}

var overrideModule = '../overrides/FeatureRequest';
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



