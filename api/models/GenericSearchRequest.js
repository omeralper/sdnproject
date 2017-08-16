'use strict';

//Model Definition File for GenericSearchRequest.js

//var GenericRequest = require('./GenericRequest');
//var SearchOptions = require('./SearchOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* API sisteminde arama istekleri için kullanılacak genel veri modelidir.
*/
exports.GenericSearchRequest =  {
    type:'class',
    name:'GenericSearchRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'SearchOptions', isRequired: true }
    }
}


//Mockup System for GenericSearchRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDGenericSearchRequest';
var dto_name = 'GenericSearchRequest';

function GenericSearchRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genGenericSearchRequestData();
    }
}

function genGenericSearchRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getGenericSearchRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getGenericSearchRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findGenericSearchRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteGenericSearchRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveGenericSearchRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveGenericSearchRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllGenericSearchRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = GenericSearchRequestDataInit;
exports.genData = genGenericSearchRequestData;
exports.getData = getGenericSearchRequestData;
exports.findData = findGenericSearchRequestData;
exports.getListData = getGenericSearchRequestListData;
exports.deleteData = deleteGenericSearchRequestData;
exports.saveData = saveGenericSearchRequestData;
exports.saveListData = saveGenericSearchRequestListData;
exports.getAllData = getAllGenericSearchRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    GenericSearchRequestDataInit();
}

var overrideModule = '../overrides/GenericSearchRequest';
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



